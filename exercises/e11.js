// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts } from "../data/data";

export function getAllWithdrawals(bankAccounts) {
  // Your code goes here...

  let withdrawalSum = [];

  for (let i = 0; i < bankAccounts.length; i++) {

    let sumTotal = 0;

    if (bankAccounts[i].withdrawals) {
      for (let x = 0; x < bankAccounts[i].withdrawals.length; x++) {
        sumTotal += bankAccounts[i].withdrawals[x];
      }
    }
    withdrawalSum.push(sumTotal);
  }
  return withdrawalSum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
