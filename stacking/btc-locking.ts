import * as BTC from '@scure/btc-signer';
import { hex } from '@scure/base';
import { createAddress } from '@stacks/transactions';

export const REGTEST_NETWORK = {
  bech32: 'bcrt',
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
} as const;

// -- Script construction --

export function getUnlockBytes(pubKeyHex: string): Uint8Array {
  return BTC.Script.encode([hex.decode(pubKeyHex), 'CHECKSIG']);
}

export function serializeLockupScript({
  stacker,
  unlockBurnHeight,
  unlockBytes,
}: {
  stacker: string;
  unlockBurnHeight: bigint;
  unlockBytes: Uint8Array;
}): Uint8Array {
  const addr = createAddress(stacker);
  return BTC.Script.encode([
    new Uint8Array([5, addr.version, ...hex.decode(addr.hash160)]),
    'DROP',
    Number(unlockBurnHeight),
    'CHECKLOCKTIMEVERIFY',
    'DROP',
    unlockBytes,
  ]);
}

export function toWitnessOutput(script: Uint8Array): Uint8Array {
  return BTC.OutScript.encode(BTC.p2wsh({ type: 'wsh', script }));
}

// -- Unlock height calculation --

export function calculateUnlockBurnHeight(
  currentCycle: number,
  numCycles: number,
  rewardCycleLength: number,
): bigint {
  const startCycle = currentCycle + 1;
  const lastCycle = startCycle + numCycles - 1;
  const lastCycleStartHeight = (lastCycle - 1) * rewardCycleLength;
  return BigInt(lastCycleStartHeight + Math.floor(rewardCycleLength / 2));
}

// -- P2WSH address from lock script --

export function getLockingAddress(lockScript: Uint8Array): string {
  const p2wsh = BTC.p2wsh({
    script: lockScript,
    type: 'sh',
  }, REGTEST_NETWORK);
  return p2wsh.address!;
}
