import { projectFactory, contractFactory, TESTNET_BURN_ADDRESS } from '@clarigen/core';
import { project, contracts }  from './clarigen-types.js';

export const pox5 = contractFactory(contracts.pox5, `${TESTNET_BURN_ADDRESS}.pox-5`);