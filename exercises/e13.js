// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

import { bankAccounts } from "../data/data";

export function getAllAccountsWithSumsOfDepositsLess2000(array) {

  let depositLess2000 = [];

  for (let i = 0; i < bankAccounts.length; i++) {

    let account = bankAccounts[i];
    let sumOfDeposits = 0;

    if (account.deposits) {
      for (let x = 0; x < account.deposits.length; x++) {
        sumOfDeposits += account.deposits[x];
      }
    }

    if (sumOfDeposits < 2000) {
      depositLess2000.push(account);
    }


  }

  return depositLess2000;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
