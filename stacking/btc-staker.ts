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
  waitForTxConfirmed,
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
import { signSignerKeyGrant } from './pox-5-helpers.js';

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

async function submitSignerKeyGrant(account: Account) {
  const authId = 1n;
  const signature = signSignerKeyGrant({
    staker: account.stxAddress,
    poxAddr: null,
    authId,
    signerSk: hex.decode(account.signerPrivKey),
  });

  const tx = await makeContractCall({
    ...pox5.grantSignerKey({
      signerKey: hex.decode(account.signerPubKey),
      staker: account.stxAddress,
      poxAddr: null,
      authId,
      signerSig: signature,
    }),
    senderKey: account.privKey,
    network,
  })
  const result = await broadcastTransaction({
    transaction: tx,
    network,
  });
  account.logger.info({ ...result }, 'L2 signer key grant tx broadcast');
  return result;
}

// -- L2: Stacks contract calls --

async function submitStake(
  account: Account,
  poxInfo: PoxInfo,
  unlockBytes: Uint8Array,
) {
  const authId = Math.floor(Math.random() * 0xffffffffffff);

  const poxAddr = createAddress(account.stxAddress);

  const stakeFnCall = pox5.stake({
    amountUstx: 1000_000000n,
    poxAddr: {
      version: new Uint8Array([1]),
      hashbytes: hex.decode(poxAddr.hash160),
    },
    startBurnHt: poxInfo.current_burnchain_block_height!,
    signerSig: null,
    signerKey: hex.decode(account.signerPubKey),
    maxAmount,
    authId,
    numCycles: stakingCycles,
    unlockBytes: unlockBytes,
  });

  const tx = await makeContractCall({
    ...stakeFnCall,
    senderKey: account.privKey,
    network,
    fee: getNextTxFee(),
  });
  const result = await broadcastTransaction({
    transaction: tx,
    network,
  });
  account.logger.info({ ...result }, 'L2 stake tx broadcast');
  return result;
}

async function submitStakeExtend(account: Account, poxInfo: any, unlockBytes: Uint8Array) {
  const authId = Math.floor(Math.random() * 0xffffffffffff);

  const poxAddr = createAddress(account.stxAddress);

  const txOptions = {
    ...pox5.stakeExtend({
      amountUstx: 1000_000000n,
      poxAddr: {
        version: new Uint8Array([1]),
        hashbytes: hex.decode(poxAddr.hash160),
      },
      signerSig: null,
      signerKey: hex.decode(account.signerPubKey),
      maxAmount,
      authId,
      numCycles: stakingCycles,
      unlockBytes,
    }),
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

let hasGrantedSignerKey = false;

async function run() {
  const poxInfo = await accounts[0]!.client.getPoxInfo();
  if (poxInfo.current_burnchain_block_height! <= EPOCH_35_START) {
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

  const txIdsToWait: string[] = [];

  for (const account of accountInfos) {
    const unlockBytes = getUnlockBytes(account.pubKey);
    const unlockBurnHeight = calculateUnlockBurnHeight(currentCycle, stakingCycles, POX_REWARD_LENGTH);

    if (!hasGrantedSignerKey) {
      const txResult = await submitSignerKeyGrant(account);
      if ('error' in txResult) {
        logger.error({ ...txResult }, 'Error granting signer key');
        continue;
      }
      await waitForTxConfirmed(txResult.txid);
    }

    if (account.lockedAmount === 0n) {
      account.logger.info('Account unlocked, staking...', {
        account: account.index,
        rewardCycle: poxInfo.reward_cycle_id,
        unlockBurnHeight: unlockBurnHeight.toString(),
      });

      const stakeResult = await submitStake(account, poxInfo, unlockBytes);
      txIdsToWait.push(stakeResult.txid);
      // await new Promise(r => setTimeout(r, postTxWait * 1000));

      await submitBtcLock(account, unlockBurnHeight, unlockBytes);
      continue;
    }

    const unlockCycle = burnBlockToRewardCycle(account.unlockHeight);

    if (unlockCycle === nowCycle) {
      account.logger.info({ unlockHeight: account.unlockHeight, nowCycle, unlockCycle }, 'Extending stake...');

      const stakeExtendResult = await submitStakeExtend(account, poxInfo, unlockBytes);
      txIdsToWait.push(stakeExtendResult.txid);
      // await new Promise(r => setTimeout(r, postTxWait * 1000));

      await submitBtcLock(account, unlockBurnHeight, unlockBytes);
      continue;
    }

    account.logger.info({ nowCycle, unlockCycle }, 'Staked through next cycle, skipping');
  }
  await Promise.all(txIdsToWait.map(waitForTxConfirmed));
  lastStakedCycle = nowCycle;
  hasGrantedSignerKey = true;
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
