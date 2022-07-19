import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
// Load stdlib
const stdlib = loadStdlib();
// Hardcode a wallet address
const address = 'Y76M3MSY6DKBRHBL7C3NNDXGS5IIMQVQVUAB6MP4XEMMGVF2QWNPL226CA';
// Log the hardcoded wallet address
console.log(`[.mjs] Whitelisted wallet address: ${address}`)
// Get the hardcoded wallet network token balance 
const balance = await loadStdlib(process.env).balanceOf(address);
// Log the hardcoded wallet network token balance
console.log(`[.mjs] Whitelisted wallet network token balance: ${balance} ALGO`);
// Create test balance for logging
const tBalance = stdlib.parseCurrency(1);
// Create a test account for logging
const tAccount = await stdlib.newTestAccount(tBalance);
// Display deploying notification to the console
console.log('[.mjs] Status: DEPLOYING');
// Display attaching notification to the console
console.log('[.mjs] Status: ATTACHING\n');
// Create test contract for logging
const tContract = tAccount.contract(backend);
// Await backend
await Promise.all([
    backend.A(
      tContract,
      { ...stdlib.hasConsoleLogger },
    ),
  ]);