
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(bankAccounts) {
  // Your code goes here...
  let wrongBalance = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    
    let account = bankAccounts[i];
    let withdrawalSum = 0;
    let depositSum = 0;

    if (account.deposits) { 
      for (let x = 0; x < account.deposits.length; x++) {
      depositSum += account.deposits[x];
      }
    }

    if (account.withdrawals) {
      for (let z = 0; z < account.withdrawals.length; z++) {
        withdrawalSum += account.withdrawals[z];
        }
    }

    let actualBalance = depositSum - withdrawalSum;

    if (account.balance !== actualBalance) {
      wrongBalance.push(account);
    }
  }

  return wrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
