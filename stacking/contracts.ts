import { contractFactory, TESTNET_BURN_ADDRESS, ClarigenClient } from '@clarigen/core';
import { contracts }  from './clarigen-types.js';
import { network } from './common.js';

export const clarigenClient = new ClarigenClient(network);

export const pox5 = contractFactory(contracts.pox5, `${TESTNET_BURN_ADDRESS}.pox-5`);