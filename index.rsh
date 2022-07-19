'reach 0.1';
'use strict';

export const main = Reach.App(() => {
  // Create a participant named A
  const A = Participant('A', {
    ...hasConsoleLogger
  });
  // Read about untrustworthy maps :)
  setOptions({ untrustworthyMaps: true });
  // Initialize the dapp
  init();
  // Display deploying status notification to the console
  A.interact.log('[.rsh] Status: DEPLOYING');
  // Initiate a consensus transfer
  A.publish();
  // Hardcode a wallet address
  const address = 'Y76M3MSY6DKBRHBL7C3NNDXGS5IIMQVQVUAB6MP4XEMMGVF2QWNPL226CA';
  // Create a whitelisted wallets map
  const whitelistedAddresses = new Map(Bytes(58));
});