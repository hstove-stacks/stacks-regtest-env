import {
  makeContractCall,
  broadcastTransaction,
  bufferCV,
  uintCV,
  tupleCV,
  AnchorMode,
  createAddress,
  someCV,
} from '@stacks/transactions';
import { hex } from '@scure/base';
import { Pox4SignatureTopic, PoxInfo } from '@stacks/stacking';
import {
  accounts,
  maxAmount,
  parseEnvInt,
  waitForSetup,
  logger,
  burnBlockToRewardCycle,
  network,
  POX_REWARD_LENGTH,
  type Account,
  EPOCH_35_START,
  WALLET_NAME,
} from './common.js';
import { createOrLoadWallet, getNewAddress, listUnspent, sendToAddress } from './btc-rpc.js';
import {
  getUnlockBytes,
  serializeLockupScript,
  calculateUnlockBurnHeight,
  getLockingAddress,
} from './btc-locking.js';
import { pox5 } from './contracts.js';
import { TESTNET_BURN_ADDRESS } from '@clarigen/core';

const stakingInterval = parseEnvInt('STACKING_INTERVAL', true);
const postTxWait = parseEnvInt('POST_TX_WAIT', true);
const stakingCycles = parseEnvInt('STACKING_CYCLES', true);
const lockAmountSats = BigInt(parseEnvInt('BTC_LOCK_AMOUNT_SATS', false) ?? 10_000_000);

let txFee = parseEnvInt('STACKING_FEE', false) ?? 1_000_000;
const getNextTxFee = () => txFee++;

// -- Initialization --

async function initBtcWallet() {
  await createOrLoadWallet(WALLET_NAME);
  logger.info({ wallet: WALLET_NAME }, 'Bitcoin staking wallet ready');

  // Wait for miner to fund the wallet
  while (true) {
    const utxos = await listUnspent(WALLET_NAME, 1);
    const total = utxos.reduce((sum, u) => sum + u.amount, 0);
    if (total > 0) {
      logger.info({ balance: total }, 'Staking wallet funded');
      return;
    }
    logger.info('Waiting for staking wallet to be funded...');
    await new Promise(r => setTimeout(r, 5000));
  }
}

// -- L2: Stacks contract calls --

async function submitStake(
  account: Account,
  poxInfo: PoxInfo,
  unlockBytes: Uint8Array,
) {
  const authId = Math.floor(Math.random() * 0xffffffffffff);

  const signerSignature = account.client.signPoxSignature({
    topic: Pox4SignatureTopic.StackStx,
    rewardCycle: poxInfo.reward_cycle_id,
    poxAddress: account.btcAddr,
    period: stakingCycles,
    signerPrivateKey: account.signerPrivKey,
    authId,
    maxAmount,
  });

  const poxAddr = createAddress(account.stxAddress);
  const [contractAddr] = poxInfo.contract_id.split('.');

  const stakeFnCall = pox5.stake({
    amountUstx: 100n,
    poxAddr: {
      version: Buffer.from([poxAddr.version]),
      hashbytes: Buffer.from(hex.decode(poxAddr.hash160)),
    },
    startBurnHt: poxInfo.current_burnchain_block_height!,
    signerSig: Buffer.from(hex.decode(signerSignature)),
    signerKey: Buffer.from(hex.decode(account.signerPubKey)),
    maxAmount,
    authId,
    numCycles: stakingCycles,
    unlockBytes: unlockBytes,
  });

  const txOptions = {
    // ...stakeFnCall,
    contractAddress: TESTNET_BURN_ADDRESS,
    contractName: 'pox-5',
    functionName: 'stake',
    functionArgs: [
      // uintCV(account.balance!),
      uintCV(100n),
      tupleCV({
        version: bufferCV(new Uint8Array([1])),
        hashbytes: bufferCV(hex.decode(poxAddr.hash160)),
      }),
      uintCV(poxInfo.current_burnchain_block_height!),
      someCV(bufferCV(hex.decode(signerSignature))),
      bufferCV(hex.decode(account.signerPubKey)),
      uintCV(maxAmount),
      uintCV(authId),
      uintCV(stakingCycles),
      bufferCV(Buffer.from(unlockBytes)),
    ],
    senderKey: account.privKey,
    network,
    fee: getNextTxFee(),
    anchorMode: AnchorMode.Any,
  };

  const tx = await makeContractCall(txOptions);
  const result = await broadcastTransaction({
    transaction: tx,
    network,
  });
  account.logger.info({ ...result }, 'L2 stake tx broadcast');
  return result;
}

async function submitStakeExtend(account: Account, poxInfo: any, unlockBytes: Uint8Array) {
  const authId = Math.floor(Math.random() * 0xffffffffffff);

  const signerSignature = account.client.signPoxSignature({
    topic: Pox4SignatureTopic.StackExtend,
    rewardCycle: poxInfo.reward_cycle_id,
    poxAddress: account.btcAddr,
    period: stakingCycles,
    signerPrivateKey: account.signerPrivKey,
    authId,
    maxAmount,
  });

  const [contractAddr, contractName] = poxInfo.contract_id.split('.');

  const txOptions = {
    contractAddress: contractAddr,
    contractName,
    functionName: 'stake-extend',
    functionArgs: [
      uintCV(stakingCycles),
      bufferCV(Buffer.from(unlockBytes)),
      tupleCV({
        version: bufferCV(Buffer.from([createAddress(account.stxAddress).version])),
        hashbytes: bufferCV(
          Buffer.from(hex.decode(createAddress(account.stxAddress).hash160)),
        ),
      }),
      bufferCV(Buffer.from(hex.decode(signerSignature))),
      bufferCV(Buffer.from(hex.decode(account.signerPubKey))),
      uintCV(maxAmount),
      uintCV(authId),
    ],
    senderKey: account.privKey,
    network,
    fee: getNextTxFee(),
    anchorMode: AnchorMode.Any,
  };

  const tx = await makeContractCall(txOptions);
  const result = await broadcastTransaction({
    transaction: tx,
    network,
  });
  account.logger.info({ txid: result.txid }, 'L2 stake-extend tx broadcast');
  return result;
}

// -- L1: Bitcoin locking transaction --

async function submitBtcLock(account: Account, unlockBurnHeight: bigint, unlockBytes: Uint8Array) {
  const lockScript = serializeLockupScript({
    stacker: account.stxAddress,
    unlockBurnHeight,
    unlockBytes,
  });

  const address = getLockingAddress(lockScript);
  const amountBtc = Number(lockAmountSats) / 1e8;

  const txid = await sendToAddress(WALLET_NAME, address, amountBtc);
  account.logger.info({ txid, address, amountBtc, unlockBurnHeight: unlockBurnHeight.toString() }, 'L1 BTC lock tx broadcast');
  return txid;
}

// -- Main loop --

let lastStakedCycle = 0;

async function run() {
  const poxInfo = await accounts[0]!.client.getPoxInfo();
  if (poxInfo.current_burnchain_block_height! < EPOCH_35_START) {
    // logger.info({ burnHeight: poxInfo.current_burnchain_block_height }, 'Not on epoch 3.5 yet, skipping');
    return;
  }

  const currentCycle = poxInfo.reward_cycle_id;

  const accountInfos = await Promise.all(
    accounts.map(async a => {
      const info = await a.client.getAccountStatus();
      return {
        ...a,
        unlockHeight: Number(info.unlock_height),
        lockedAmount: BigInt(info.locked),
        balance: BigInt(info.balance),
      };
    }),
  );

  const nowCycle = burnBlockToRewardCycle(poxInfo.current_burnchain_block_height ?? 0);

  for (const account of accountInfos) {
    const unlockBytes = getUnlockBytes(account.pubKey);
    const unlockBurnHeight = calculateUnlockBurnHeight(currentCycle, stakingCycles, POX_REWARD_LENGTH);

    const ALWAYS_STAKE = false; // for now, testing

    if (ALWAYS_STAKE && nowCycle > lastStakedCycle) {
      logger.info({ nowCycle, lastStakedCycle }, 'Staking through next cycle');
      // await submitStake(account, poxInfo, unlockBytes);

      await submitBtcLock(account, unlockBurnHeight, unlockBytes);
      if (account.lockedAmount === 0n) {
        await submitStake(account, poxInfo, unlockBytes);
      }
      await new Promise(r => setTimeout(r, postTxWait * 1000));
      continue;
    }

    // TODO: this won't trigger because we don't have pox-locking for pox-5 yet

    if (account.lockedAmount === 0n) {
      account.logger.info('Account unlocked, staking...', {
        account: account.index,
        rewardCycle: poxInfo.reward_cycle_id,
      });

      await submitStake(account, poxInfo, unlockBytes);
      await new Promise(r => setTimeout(r, postTxWait * 1000));

      await submitBtcLock(account, unlockBurnHeight, unlockBytes);
      continue;
    }

    const unlockCycle = burnBlockToRewardCycle(account.unlockHeight);

    if (unlockCycle === nowCycle + 1) {
      account.logger.info({ unlockHeight: account.unlockHeight, nowCycle, unlockCycle }, 'Extending stake...');

      await submitStakeExtend(account, poxInfo, unlockBytes);
      await new Promise(r => setTimeout(r, postTxWait * 1000));

      await submitBtcLock(account, unlockBurnHeight, unlockBytes);
      continue;
    }

    // account.logger.info({ nowCycle, unlockCycle }, 'Staked through next cycle, skipping');
  }
  lastStakedCycle = nowCycle;
}

async function loop() {
  await waitForSetup();
  await initBtcWallet();

  while (true) {
    try {
      await run();
    } catch (e) {
      logger.error(e, 'Error in btc-staker loop');
    }
    await new Promise(r => setTimeout(r, stakingInterval * 1000));
  }
}

loop();
