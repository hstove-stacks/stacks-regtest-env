
import type { TypedAbiArg, TypedAbiFunction, TypedAbiMap, TypedAbiVariable, Response } from '@clarigen/core';

export const contracts = {
  pox5: {
  "functions": {
    addStakerToNthRewardCycle: {"name":"add-staker-to-nth-reward-cycle","access":"private","args":[{"name":"cycle-index","type":"uint128"},{"name":"params-resp","type":{"response":{"ok":{"tuple":[{"name":"first-reward-cycle","type":"uint128"},{"name":"staker","type":"principal"}]},"error":"uint128"}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"first-reward-cycle","type":"uint128"},{"name":"staker","type":"principal"}]},"error":"uint128"}}}} as TypedAbiFunction<[cycleIndex: TypedAbiArg<number | bigint, "cycleIndex">, paramsResp: TypedAbiArg<Response<{
  "firstRewardCycle": number | bigint;
  "staker": string;
}, number | bigint>, "paramsResp">], Response<{
  "firstRewardCycle": bigint;
  "staker": string;
}, bigint>>,
    addStakerToRewardCycles: {"name":"add-staker-to-reward-cycles","access":"private","args":[{"name":"staker","type":"principal"},{"name":"first-reward-cycle","type":"uint128"},{"name":"num-cycles","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">, firstRewardCycle: TypedAbiArg<number | bigint, "firstRewardCycle">, numCycles: TypedAbiArg<number | bigint, "numCycles">], Response<boolean, bigint>>,
    addStakerToSetForCycle: {"name":"add-staker-to-set-for-cycle","access":"private","args":[{"name":"staker","type":"principal"},{"name":"cycle","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">, cycle: TypedAbiArg<number | bigint, "cycle">], Response<boolean, bigint>>,
    consumeSignerKeyAuthorization: {"name":"consume-signer-key-authorization","access":"private","args":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"reward-cycle","type":"uint128"},{"name":"topic","type":{"string-ascii":{"length":14}}},{"name":"period","type":"uint128"},{"name":"signer-sig","type":{"buffer":{"length":65}}},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"amount","type":"uint128"},{"name":"max-amount","type":"uint128"},{"name":"auth-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">, rewardCycle: TypedAbiArg<number | bigint, "rewardCycle">, topic: TypedAbiArg<string, "topic">, period: TypedAbiArg<number | bigint, "period">, signerSig: TypedAbiArg<Uint8Array, "signerSig">, signerKey: TypedAbiArg<Uint8Array, "signerKey">, amount: TypedAbiArg<number | bigint, "amount">, maxAmount: TypedAbiArg<number | bigint, "maxAmount">, authId: TypedAbiArg<number | bigint, "authId">], Response<boolean, bigint>>,
    innerStake: {"name":"inner-stake","access":"private","args":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"start-burn-ht","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"stacker","type":"principal"},{"name":"unlock-burn-height","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"unlock-cycle","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[amountUstx: TypedAbiArg<number | bigint, "amountUstx">, numCycles: TypedAbiArg<number | bigint, "numCycles">, unlockBytes: TypedAbiArg<Uint8Array, "unlockBytes">, startBurnHt: TypedAbiArg<number | bigint, "startBurnHt">, poolOrSoloInfo: TypedAbiArg<Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>, "poolOrSoloInfo">], Response<{
  "amountUstx": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "stacker": string;
  "unlockBurnHeight": bigint;
  "unlockBytes": Uint8Array;
  "unlockCycle": bigint;
}, bigint>>,
    innerStakeExtend: {"name":"inner-stake-extend","access":"private","args":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"stacker","type":"principal"},{"name":"unlock-burn-height","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"unlock-cycle","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[amountUstx: TypedAbiArg<number | bigint, "amountUstx">, numCycles: TypedAbiArg<number | bigint, "numCycles">, unlockBytes: TypedAbiArg<Uint8Array, "unlockBytes">, poolOrSoloInfo: TypedAbiArg<Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>, "poolOrSoloInfo">], Response<{
  "amountUstx": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "stacker": string;
  "unlockBurnHeight": bigint;
  "unlockBytes": Uint8Array;
  "unlockCycle": bigint;
}, bigint>>,
    innerStakeUpdate: {"name":"inner-stake-update","access":"private","args":[{"name":"amount-ustx-increase","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"stacker","type":"principal"},{"name":"unlock-burn-height","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"unlock-cycle","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[amountUstxIncrease: TypedAbiArg<number | bigint, "amountUstxIncrease">, poolOrSoloInfo: TypedAbiArg<Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>, "poolOrSoloInfo">], Response<{
  "amountUstx": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "stacker": string;
  "unlockBurnHeight": bigint;
  "unlockBytes": Uint8Array;
  "unlockCycle": bigint;
}, bigint>>,
    validateSignerKeyUsage: {"name":"validate-signer-key-usage","access":"private","args":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"reward-cycle","type":"uint128"},{"name":"topic","type":{"string-ascii":{"length":14}}},{"name":"period","type":"uint128"},{"name":"signer-sig-opt","type":{"optional":{"buffer":{"length":65}}}},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"amount","type":"uint128"},{"name":"max-amount","type":"uint128"},{"name":"auth-id","type":"uint128"},{"name":"staker","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">, rewardCycle: TypedAbiArg<number | bigint, "rewardCycle">, topic: TypedAbiArg<string, "topic">, period: TypedAbiArg<number | bigint, "period">, signerSigOpt: TypedAbiArg<Uint8Array | null, "signerSigOpt">, signerKey: TypedAbiArg<Uint8Array, "signerKey">, amount: TypedAbiArg<number | bigint, "amount">, maxAmount: TypedAbiArg<number | bigint, "maxAmount">, authId: TypedAbiArg<number | bigint, "authId">, staker: TypedAbiArg<string, "staker">], Response<boolean, bigint>>,
    grantSignerKey: {"name":"grant-signer-key","access":"public","args":[{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"staker","type":"principal"},{"name":"pox-addr","type":{"optional":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}}},{"name":"auth-id","type":"uint128"},{"name":"signer-sig","type":{"buffer":{"length":65}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[signerKey: TypedAbiArg<Uint8Array, "signerKey">, staker: TypedAbiArg<string, "staker">, poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
} | null, "poxAddr">, authId: TypedAbiArg<number | bigint, "authId">, signerSig: TypedAbiArg<Uint8Array, "signerSig">], Response<boolean, bigint>>,
    registerPool: {"name":"register-pool","access":"public","args":[{"name":"pool-owner","type":"trait_reference"},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-sig","type":{"buffer":{"length":65}}},{"name":"auth-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"owner","type":"principal"},{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]},"error":"uint128"}}}} as TypedAbiFunction<[poolOwner: TypedAbiArg<string, "poolOwner">, signerKey: TypedAbiArg<Uint8Array, "signerKey">, poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">, signerSig: TypedAbiArg<Uint8Array, "signerSig">, authId: TypedAbiArg<number | bigint, "authId">], Response<{
  "owner": string;
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}, bigint>>,
    revokeSignerGrant: {"name":"revoke-signer-grant","access":"public","args":[{"name":"staker","type":"principal"},{"name":"signer-key","type":{"buffer":{"length":33}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">, signerKey: TypedAbiArg<Uint8Array, "signerKey">], Response<boolean, bigint>>,
    setBurnchainParameters: {"name":"set-burnchain-parameters","access":"public","args":[{"name":"first-burn-height","type":"uint128"},{"name":"prepare-cycle-length","type":"uint128"},{"name":"reward-cycle-length","type":"uint128"},{"name":"begin-pox5-reward-cycle","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[firstBurnHeight: TypedAbiArg<number | bigint, "firstBurnHeight">, prepareCycleLength: TypedAbiArg<number | bigint, "prepareCycleLength">, rewardCycleLength: TypedAbiArg<number | bigint, "rewardCycleLength">, beginPox5RewardCycle: TypedAbiArg<number | bigint, "beginPox5RewardCycle">], Response<boolean, null>>,
    stake: {"name":"stake","access":"public","args":[{"name":"amount-ustx","type":"uint128"},{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"start-burn-ht","type":"uint128"},{"name":"signer-sig","type":{"optional":{"buffer":{"length":65}}}},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"max-amount","type":"uint128"},{"name":"auth-id","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"stacker","type":"principal"},{"name":"unlock-burn-height","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"unlock-cycle","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[amountUstx: TypedAbiArg<number | bigint, "amountUstx">, poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">, startBurnHt: TypedAbiArg<number | bigint, "startBurnHt">, signerSig: TypedAbiArg<Uint8Array | null, "signerSig">, signerKey: TypedAbiArg<Uint8Array, "signerKey">, maxAmount: TypedAbiArg<number | bigint, "maxAmount">, authId: TypedAbiArg<number | bigint, "authId">, numCycles: TypedAbiArg<number | bigint, "numCycles">, unlockBytes: TypedAbiArg<Uint8Array, "unlockBytes">], Response<{
  "amountUstx": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "stacker": string;
  "unlockBurnHeight": bigint;
  "unlockBytes": Uint8Array;
  "unlockCycle": bigint;
}, bigint>>,
    stakeExtend: {"name":"stake-extend","access":"public","args":[{"name":"amount-ustx","type":"uint128"},{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-sig","type":{"optional":{"buffer":{"length":65}}}},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"max-amount","type":"uint128"},{"name":"auth-id","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"stacker","type":"principal"},{"name":"unlock-burn-height","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"unlock-cycle","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[amountUstx: TypedAbiArg<number | bigint, "amountUstx">, poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">, signerSig: TypedAbiArg<Uint8Array | null, "signerSig">, signerKey: TypedAbiArg<Uint8Array, "signerKey">, maxAmount: TypedAbiArg<number | bigint, "maxAmount">, authId: TypedAbiArg<number | bigint, "authId">, numCycles: TypedAbiArg<number | bigint, "numCycles">, unlockBytes: TypedAbiArg<Uint8Array, "unlockBytes">], Response<{
  "amountUstx": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "stacker": string;
  "unlockBurnHeight": bigint;
  "unlockBytes": Uint8Array;
  "unlockCycle": bigint;
}, bigint>>,
    stakeExtendPooled: {"name":"stake-extend-pooled","access":"public","args":[{"name":"pool-owner","type":"trait_reference"},{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"stacker","type":"principal"},{"name":"unlock-burn-height","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"unlock-cycle","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[poolOwner: TypedAbiArg<string, "poolOwner">, amountUstx: TypedAbiArg<number | bigint, "amountUstx">, numCycles: TypedAbiArg<number | bigint, "numCycles">, unlockBytes: TypedAbiArg<Uint8Array, "unlockBytes">], Response<{
  "amountUstx": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "stacker": string;
  "unlockBurnHeight": bigint;
  "unlockBytes": Uint8Array;
  "unlockCycle": bigint;
}, bigint>>,
    stakePooled: {"name":"stake-pooled","access":"public","args":[{"name":"pool-owner","type":"trait_reference"},{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"start-burn-ht","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"stacker","type":"principal"},{"name":"unlock-burn-height","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"unlock-cycle","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[poolOwner: TypedAbiArg<string, "poolOwner">, amountUstx: TypedAbiArg<number | bigint, "amountUstx">, numCycles: TypedAbiArg<number | bigint, "numCycles">, unlockBytes: TypedAbiArg<Uint8Array, "unlockBytes">, startBurnHt: TypedAbiArg<number | bigint, "startBurnHt">], Response<{
  "amountUstx": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "stacker": string;
  "unlockBurnHeight": bigint;
  "unlockBytes": Uint8Array;
  "unlockCycle": bigint;
}, bigint>>,
    stakeUpdate: {"name":"stake-update","access":"public","args":[{"name":"amount-ustx-increase","type":"uint128"},{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"signer-sig","type":{"optional":{"buffer":{"length":65}}}},{"name":"max-amount","type":"uint128"},{"name":"auth-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"stacker","type":"principal"},{"name":"unlock-burn-height","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"unlock-cycle","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[amountUstxIncrease: TypedAbiArg<number | bigint, "amountUstxIncrease">, poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">, signerKey: TypedAbiArg<Uint8Array, "signerKey">, signerSig: TypedAbiArg<Uint8Array | null, "signerSig">, maxAmount: TypedAbiArg<number | bigint, "maxAmount">, authId: TypedAbiArg<number | bigint, "authId">], Response<{
  "amountUstx": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "stacker": string;
  "unlockBurnHeight": bigint;
  "unlockBytes": Uint8Array;
  "unlockCycle": bigint;
}, bigint>>,
    stakeUpdatePooled: {"name":"stake-update-pooled","access":"public","args":[{"name":"pool-owner","type":"trait_reference"},{"name":"amount-ustx-increase","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"stacker","type":"principal"},{"name":"unlock-burn-height","type":"uint128"},{"name":"unlock-bytes","type":{"buffer":{"length":683}}},{"name":"unlock-cycle","type":"uint128"}]},"error":"uint128"}}}} as TypedAbiFunction<[poolOwner: TypedAbiArg<string, "poolOwner">, amountUstxIncrease: TypedAbiArg<number | bigint, "amountUstxIncrease">], Response<{
  "amountUstx": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "stacker": string;
  "unlockBurnHeight": bigint;
  "unlockBytes": Uint8Array;
  "unlockCycle": bigint;
}, bigint>>,
    burnHeightToRewardCycle: {"name":"burn-height-to-reward-cycle","access":"read_only","args":[{"name":"height","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[height: TypedAbiArg<number | bigint, "height">], bigint>,
    checkPoxAddr: {"name":"check-pox-addr","access":"read_only","args":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">], Response<boolean, bigint>>,
    checkPoxAddrHashbytes: {"name":"check-pox-addr-hashbytes","access":"read_only","args":[{"name":"version","type":{"buffer":{"length":1}}},{"name":"hashbytes","type":{"buffer":{"length":32}}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[version: TypedAbiArg<Uint8Array, "version">, hashbytes: TypedAbiArg<Uint8Array, "hashbytes">], boolean>,
    checkPoxAddrVersion: {"name":"check-pox-addr-version","access":"read_only","args":[{"name":"version","type":{"buffer":{"length":1}}}],"outputs":{"type":"bool"}} as TypedAbiFunction<[version: TypedAbiArg<Uint8Array, "version">], boolean>,
    checkPoxLockPeriod: {"name":"check-pox-lock-period","access":"read_only","args":[{"name":"lock-period","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[lockPeriod: TypedAbiArg<number | bigint, "lockPeriod">], boolean>,
    currentPoxRewardCycle: {"name":"current-pox-reward-cycle","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    getPoolInfo: {"name":"get-pool-info","access":"read_only","args":[{"name":"owner","type":"principal"}],"outputs":{"type":{"optional":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}} as TypedAbiFunction<[owner: TypedAbiArg<string, "owner">], {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
} | null>,
    getPoxInfo: {"name":"get-pox-info","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"tuple":[{"name":"first-burnchain-block-height","type":"uint128"},{"name":"min-amount-ustx","type":"uint128"},{"name":"prepare-cycle-length","type":"uint128"},{"name":"reward-cycle-id","type":"uint128"},{"name":"reward-cycle-length","type":"uint128"},{"name":"total-liquid-supply-ustx","type":"uint128"}]},"error":"none"}}}} as TypedAbiFunction<[], Response<{
  "firstBurnchainBlockHeight": bigint;
  "minAmountUstx": bigint;
  "prepareCycleLength": bigint;
  "rewardCycleId": bigint;
  "rewardCycleLength": bigint;
  "totalLiquidSupplyUstx": bigint;
}, null>>,
    getSignerGrantMessageHash: {"name":"get-signer-grant-message-hash","access":"read_only","args":[{"name":"staker","type":"principal"},{"name":"pox-addr","type":{"optional":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}}},{"name":"auth-id","type":"uint128"}],"outputs":{"type":{"buffer":{"length":32}}}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">, poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
} | null, "poxAddr">, authId: TypedAbiArg<number | bigint, "authId">], Uint8Array>,
    getSignerKeyMessageHash: {"name":"get-signer-key-message-hash","access":"read_only","args":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"reward-cycle","type":"uint128"},{"name":"topic","type":{"string-ascii":{"length":14}}},{"name":"period","type":"uint128"},{"name":"max-amount","type":"uint128"},{"name":"auth-id","type":"uint128"}],"outputs":{"type":{"buffer":{"length":32}}}} as TypedAbiFunction<[poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">, rewardCycle: TypedAbiArg<number | bigint, "rewardCycle">, topic: TypedAbiArg<string, "topic">, period: TypedAbiArg<number | bigint, "period">, maxAmount: TypedAbiArg<number | bigint, "maxAmount">, authId: TypedAbiArg<number | bigint, "authId">], Uint8Array>,
    getStakerInfo: {"name":"get-staker-info","access":"read_only","args":[{"name":"staker","type":"principal"}],"outputs":{"type":{"optional":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"first-reward-cycle","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"unlock-bytes","type":{"buffer":{"length":683}}}]}}}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">], {
  "amountUstx": bigint;
  "firstRewardCycle": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "unlockBytes": Uint8Array;
} | null>,
    getStakerSetFirstItemForCycle: {"name":"get-staker-set-first-item-for-cycle","access":"read_only","args":[{"name":"cycle","type":"uint128"}],"outputs":{"type":{"optional":"principal"}}} as TypedAbiFunction<[cycle: TypedAbiArg<number | bigint, "cycle">], string | null>,
    getStakerSetItemForCycle: {"name":"get-staker-set-item-for-cycle","access":"read_only","args":[{"name":"staker","type":"principal"},{"name":"cycle","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"next","type":{"optional":"principal"}},{"name":"prev","type":{"optional":"principal"}}]}}}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">, cycle: TypedAbiArg<number | bigint, "cycle">], {
  "next": string | null;
  "prev": string | null;
} | null>,
    getStakerSetLastItemForCycle: {"name":"get-staker-set-last-item-for-cycle","access":"read_only","args":[{"name":"cycle","type":"uint128"}],"outputs":{"type":{"optional":"principal"}}} as TypedAbiFunction<[cycle: TypedAbiArg<number | bigint, "cycle">], string | null>,
    getStakerSetNextItemForCycle: {"name":"get-staker-set-next-item-for-cycle","access":"read_only","args":[{"name":"staker","type":"principal"},{"name":"cycle","type":"uint128"}],"outputs":{"type":{"optional":"principal"}}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">, cycle: TypedAbiArg<number | bigint, "cycle">], string | null>,
    getStakerSetPrevItemForCycle: {"name":"get-staker-set-prev-item-for-cycle","access":"read_only","args":[{"name":"staker","type":"principal"},{"name":"cycle","type":"uint128"}],"outputs":{"type":{"optional":"principal"}}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">, cycle: TypedAbiArg<number | bigint, "cycle">], string | null>,
    rewardCycleToBurnHeight: {"name":"reward-cycle-to-burn-height","access":"read_only","args":[{"name":"cycle","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[cycle: TypedAbiArg<number | bigint, "cycle">], bigint>,
    rewardCycleToUnlockHeight: {"name":"reward-cycle-to-unlock-height","access":"read_only","args":[{"name":"cycle","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[cycle: TypedAbiArg<number | bigint, "cycle">], bigint>,
    stakerSetContainsForCycle: {"name":"staker-set-contains-for-cycle","access":"read_only","args":[{"name":"staker","type":"principal"},{"name":"cycle","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">, cycle: TypedAbiArg<number | bigint, "cycle">], boolean>,
    verifySignerKeyGrant: {"name":"verify-signer-key-grant","access":"read_only","args":[{"name":"staker","type":"principal"},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[staker: TypedAbiArg<string, "staker">, signerKey: TypedAbiArg<Uint8Array, "signerKey">, poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">], Response<boolean, bigint>>,
    verifySignerKeySig: {"name":"verify-signer-key-sig","access":"read_only","args":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"reward-cycle","type":"uint128"},{"name":"topic","type":{"string-ascii":{"length":14}}},{"name":"period","type":"uint128"},{"name":"signer-sig","type":{"buffer":{"length":65}}},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"amount","type":"uint128"},{"name":"max-amount","type":"uint128"},{"name":"auth-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[poxAddr: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "poxAddr">, rewardCycle: TypedAbiArg<number | bigint, "rewardCycle">, topic: TypedAbiArg<string, "topic">, period: TypedAbiArg<number | bigint, "period">, signerSig: TypedAbiArg<Uint8Array, "signerSig">, signerKey: TypedAbiArg<Uint8Array, "signerKey">, amount: TypedAbiArg<number | bigint, "amount">, maxAmount: TypedAbiArg<number | bigint, "maxAmount">, authId: TypedAbiArg<number | bigint, "authId">], Response<boolean, bigint>>
  },
  "maps": {
    pools: {"name":"pools","key":"principal","value":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}} as TypedAbiMap<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>,
    signerKeyGrants: {"name":"signer-key-grants","key":{"tuple":[{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"staker","type":"principal"}]},"value":{"optional":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}}} as TypedAbiMap<{
  "signerKey": Uint8Array;
  "staker": string;
}, {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
} | null>,
    stakerSetLlFirstForCycle: {"name":"staker-set-ll-first-for-cycle","key":"uint128","value":"principal"} as TypedAbiMap<number | bigint, string>,
    stakerSetLlForCycle: {"name":"staker-set-ll-for-cycle","key":{"tuple":[{"name":"cycle","type":"uint128"},{"name":"staker","type":"principal"}]},"value":{"tuple":[{"name":"next","type":{"optional":"principal"}},{"name":"prev","type":{"optional":"principal"}}]}} as TypedAbiMap<{
  "cycle": number | bigint;
  "staker": string;
}, {
  "next": string | null;
  "prev": string | null;
}>,
    stakerSetLlLastForCycle: {"name":"staker-set-ll-last-for-cycle","key":"uint128","value":"principal"} as TypedAbiMap<number | bigint, string>,
    stakingState: {"name":"staking-state","key":"principal","value":{"tuple":[{"name":"amount-ustx","type":"uint128"},{"name":"first-reward-cycle","type":"uint128"},{"name":"num-cycles","type":"uint128"},{"name":"pool-or-solo-info","type":{"response":{"ok":"principal","error":{"tuple":[{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"signer-key","type":{"buffer":{"length":33}}}]}}}},{"name":"unlock-bytes","type":{"buffer":{"length":683}}}]}} as TypedAbiMap<string, {
  "amountUstx": bigint;
  "firstRewardCycle": bigint;
  "numCycles": bigint;
  "poolOrSoloInfo": Response<string, {
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "signerKey": Uint8Array;
}>;
  "unlockBytes": Uint8Array;
}>,
    usedSignerKeyAuthorizations: {"name":"used-signer-key-authorizations","key":{"tuple":[{"name":"auth-id","type":"uint128"},{"name":"max-amount","type":"uint128"},{"name":"period","type":"uint128"},{"name":"pox-addr","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"reward-cycle","type":"uint128"},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"topic","type":{"string-ascii":{"length":14}}}]},"value":"bool"} as TypedAbiMap<{
  "authId": number | bigint;
  "maxAmount": number | bigint;
  "period": number | bigint;
  "poxAddr": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "rewardCycle": number | bigint;
  "signerKey": Uint8Array;
  "topic": string;
}, boolean>,
    usedSignerKeyGrants: {"name":"used-signer-key-grants","key":{"tuple":[{"name":"auth-id","type":"uint128"},{"name":"signer-key","type":{"buffer":{"length":33}}},{"name":"staker","type":"principal"}]},"value":"bool"} as TypedAbiMap<{
  "authId": number | bigint;
  "signerKey": Uint8Array;
  "staker": string;
}, boolean>
  },
  "variables": {
    ERR_ALREADY_STAKED: {
  name: 'ERR_ALREADY_STAKED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_CANNOT_EXTEND: {
  name: 'ERR_CANNOT_EXTEND',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INSUFFICIENT_FUNDS: {
  name: 'ERR_INSUFFICIENT_FUNDS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_AMOUNT: {
  name: 'ERR_INVALID_AMOUNT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_NUM_CYCLES: {
  name: 'ERR_INVALID_NUM_CYCLES',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_POX_ADDRESS: {
  name: 'ERR_INVALID_POX_ADDRESS',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_SIGNATURE_PUBKEY: {
  name: 'ERR_INVALID_SIGNATURE_PUBKEY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_SIGNATURE_RECOVER: {
  name: 'ERR_INVALID_SIGNATURE_RECOVER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_START_BURN_HEIGHT: {
  name: 'ERR_INVALID_START_BURN_HEIGHT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NOT_ALLOWED: {
  name: 'ERR_NOT_ALLOWED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_NOT_STAKED: {
  name: 'ERR_NOT_STAKED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_POOL_NOT_FOUND: {
  name: 'ERR_POOL_NOT_FOUND',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SIGNER_AUTH_AMOUNT_TOO_HIGH: {
  name: 'ERR_SIGNER_AUTH_AMOUNT_TOO_HIGH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SIGNER_AUTH_USED: {
  name: 'ERR_SIGNER_AUTH_USED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SIGNER_KEY_GRANT_NOT_FOUND: {
  name: 'ERR_SIGNER_KEY_GRANT_NOT_FOUND',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SIGNER_KEY_GRANT_POX_ADDR_MISMATCH: {
  name: 'ERR_SIGNER_KEY_GRANT_POX_ADDR_MISMATCH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_SIGNER_KEY_GRANT_USED: {
  name: 'ERR_SIGNER_KEY_GRANT_USED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    MAX_ADDRESS_VERSION: {
  name: 'MAX_ADDRESS_VERSION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAX_ADDRESS_VERSION_BUFF_20: {
  name: 'MAX_ADDRESS_VERSION_BUFF_20',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    mAX_ADDRESS_VERSION_BUFF_32: {
  name: 'MAX_ADDRESS_VERSION_BUFF_32',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_NUM_CYCLES: {
  name: 'MAX_NUM_CYCLES',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MIN_STACKING_AMOUNT: {
  name: 'MIN_STACKING_AMOUNT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    pOX_5_SIGNER_DOMAIN: {
  name: 'POX_5_SIGNER_DOMAIN',
  type: {
    tuple: [
      {
        name: 'chain-id',
        type: 'uint128'
      },
      {
        name: 'name',
        type: {
          'string-ascii': {
            length: 12
          }
        }
      },
      {
        name: 'version',
        type: {
          'string-ascii': {
            length: 5
          }
        }
      }
    ]
  },
  access: 'constant'
} as TypedAbiVariable<{
  "chainId": bigint;
  "name": string;
  "version": string;
}>,
    PREPARE_CYCLE_LENGTH: {
  name: 'PREPARE_CYCLE_LENGTH',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    REWARD_CYCLE_LENGTH: {
  name: 'REWARD_CYCLE_LENGTH',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    sIP018_MSG_PREFIX: {
  name: 'SIP018_MSG_PREFIX',
  type: {
    buffer: {
      length: 6
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    STACKS_ADDR_VERSION_MAINNET: {
  name: 'STACKS_ADDR_VERSION_MAINNET',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    STACKS_ADDR_VERSION_TESTNET: {
  name: 'STACKS_ADDR_VERSION_TESTNET',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    configured: {
  name: 'configured',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    firstBurnchainBlockHeight: {
  name: 'first-burnchain-block-height',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    firstPox5RewardCycle: {
  name: 'first-pox-5-reward-cycle',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    poxPrepareCycleLength: {
  name: 'pox-prepare-cycle-length',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    poxRewardCycleLength: {
  name: 'pox-reward-cycle-length',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  ERR_ALREADY_STAKED: {
    isOk: false,
    value: 1n
  },
  ERR_CANNOT_EXTEND: {
    isOk: false,
    value: 10n
  },
  ERR_INSUFFICIENT_FUNDS: {
    isOk: false,
    value: 4n
  },
  ERR_INVALID_AMOUNT: {
    isOk: false,
    value: 11n
  },
  ERR_INVALID_NUM_CYCLES: {
    isOk: false,
    value: 9n
  },
  ERR_INVALID_POX_ADDRESS: {
    isOk: false,
    value: 13n
  },
  ERR_INVALID_SIGNATURE_PUBKEY: {
    isOk: false,
    value: 17n
  },
  ERR_INVALID_SIGNATURE_RECOVER: {
    isOk: false,
    value: 16n
  },
  ERR_INVALID_START_BURN_HEIGHT: {
    isOk: false,
    value: 8n
  },
  ERR_NOT_ALLOWED: {
    isOk: false,
    value: 23n
  },
  ERR_NOT_STAKED: {
    isOk: false,
    value: 2n
  },
  ERR_POOL_NOT_FOUND: {
    isOk: false,
    value: 14n
  },
  ERR_SIGNER_AUTH_AMOUNT_TOO_HIGH: {
    isOk: false,
    value: 19n
  },
  ERR_SIGNER_AUTH_USED: {
    isOk: false,
    value: 20n
  },
  ERR_SIGNER_KEY_GRANT_NOT_FOUND: {
    isOk: false,
    value: 21n
  },
  ERR_SIGNER_KEY_GRANT_POX_ADDR_MISMATCH: {
    isOk: false,
    value: 22n
  },
  ERR_SIGNER_KEY_GRANT_USED: {
    isOk: false,
    value: 15n
  },
  MAX_ADDRESS_VERSION: 6n,
  mAX_ADDRESS_VERSION_BUFF_20: 4n,
  mAX_ADDRESS_VERSION_BUFF_32: 6n,
  MAX_NUM_CYCLES: 24n,
  MIN_STACKING_AMOUNT: 100_000_000n,
  pOX_5_SIGNER_DOMAIN: {
    chainId: 2_147_483_648n,
    name: 'pox-5-signer',
    version: '1.0.0'
  },
  PREPARE_CYCLE_LENGTH: 50n,
  REWARD_CYCLE_LENGTH: 1_050n,
  sIP018_MSG_PREFIX: Uint8Array.from([83,73,80,48,49,56]),
  STACKS_ADDR_VERSION_MAINNET: Uint8Array.from([22]),
  STACKS_ADDR_VERSION_TESTNET: Uint8Array.from([26]),
  configured: false,
  firstBurnchainBlockHeight: 0n,
  firstPox5RewardCycle: 0n,
  poxPrepareCycleLength: 50n,
  poxRewardCycleLength: 1_050n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch33","clarity_version":"Clarity4",
  contractName: 'pox-5',
  }
} as const;

export const accounts = {"deployer":{"address":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM","balance":"100000000000000"},"wallet_1":{"address":"ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5","balance":"100000000000000"},"wallet_10":{"address":"ST3FFKYTTB975A3JC3F99MM7TXZJ406R3GKE6JV56","balance":"200000000000000"},"wallet_2":{"address":"ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG","balance":"100000000000000"},"wallet_3":{"address":"ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC","balance":"100000000000000"},"wallet_4":{"address":"ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND","balance":"100000000000000"},"wallet_5":{"address":"ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB","balance":"100000000000000"},"wallet_6":{"address":"ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0","balance":"100000000000000"},"wallet_7":{"address":"ST3PF13W7Z0RRM42A8VZRVFQ75SV1K26RXEP8YGKJ","balance":"100000000000000"},"wallet_8":{"address":"ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP","balance":"100000000000000"},"wallet_9":{"address":"STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6","balance":"100000000000000"}} as const;

export const identifiers = {"pox5":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pox-5"} as const

export const simnet = {
  accounts,
  contracts,
  identifiers,
} as const;


export const deployments = {"pox5":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pox-5","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pox-5","testnet":null,"mainnet":null}} as const;

export const project = {
  contracts,
  deployments,
} as const;
  