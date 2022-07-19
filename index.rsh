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
});