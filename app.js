'use strict';



const accountBalanceHistory = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    },
    {
        monthNumber: 3, // two months ago
        account: {
            balance: { amount: 300 },
        },
    }

]



const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/

    // Write your logic here  - No pressure 😁 //


    let result;
    let diff = 0;
    if (accountBalanceHistory.length > 1) {
        diff = Math.abs(accountBalanceHistory[1].account.balance.amount - accountBalanceHistory[0].account.balance.amount);
        for (var i = 1; i < accountBalanceHistory.length; i++) {
            let currentMonthBalance = accountBalanceHistory[i].account.balance.amount;
            let previosMonthBalance = accountBalanceHistory[i - 1].account.balance.amount;
            if (diff !== Math.abs(currentMonthBalance - previosMonthBalance)) {
                return "A";
            }
        }
        return "B";
    }
    else {
        return "A"
    }


    return result ? "A" : "B";
};

console.log('Running Application to Check Account Type');
console.log('Account type for data => \n' + JSON.stringify(accountBalanceHistory) + '\n' + accountTypeChecker(accountBalanceHistory));


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Please any key to exist! ", (answer) => {
    console.log("Closing the interface");
    rl.close();
});

