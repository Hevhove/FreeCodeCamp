/*
Assignment:

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]


*/

// Implementation
function checkCashRegister(price, cash, cid) {
    // Vars
    let changeTotal = cash - price;
    let changeArray = [ ["PENNY", 0],
                        ["NICKEL", 0],
                        ["DIME", 0],
                        ["QUARTER", 0],
                        ["ONE", 0],
                        ["FIVE", 0],
                        ["TEN", 0],
                        ["TWENTY", 0],
                        ["ONE HUNDRED", 0]]
    let cidTotal = 0;
    let currency = [["PENNY", 0.01],
                    ["NICKEL", 0.05],
                    ["DIME", 0.10],
                    ["QUARTER", 0.25],
                    ["ONE", 1.00],
                    ["FIVE", 5],
                    ["TEN", 10],
                    ["TWENTY", 20],
                    ["ONE HUNDRED", 100 ]]

    // Calculate total cash available
    for (let i = 0; i < cid.length; i++) {
        cidTotal += cid[i][1];
    }
    // If not enough cash or exact available:
    if (cidTotal < changeTotal || cash < price)
        return ({status: "INSUFFICIENT_FUNDS", change: []});
    else if (cidTotal == changeTotal || cash == price)
        return ({status: "CLOSED", change: cid});

    // Check if we can pay the correct cash back
    let i = 0;
    while (changeTotal > 0)
    {
        console.log("Total to be exchanged now: " + changeTotal);
        // While change is more than this currency unit and this currency unit is available
        while (changeTotal >= currency[cid.length - i - 1][1] && cid[cid.length - i - 1][1] != 0) {
            // add currency unit into changeArray
            changeArray[cid.length - i - 1][1] += currency[cid.length - i - 1][1];
            // Remove from cash register
            cid[cid.length - i - 1][1] -= currency[cid.length - i - 1][1];
            // Remove amount from the total to still be exchanged and make sure it's a 2 point decimal
            changeTotal -= currency[cid.length - i - 1][1];
            changeTotal = Math.round(changeTotal * 100) / 100;
            // Update
            console.log("Exchanging: Added 1 bill/coin of " + currency[cid.length - i - 1][0] + " to the changeArray");
            console.log("Intermediate changeTotal is now: " + changeTotal);
        }
        i++;
        // check if we are running out of options
        if (cid.length - i - 1 < 0 && changeTotal > 0) {
            return ({status: "INSUFFICIENT_FUNDS", change: []})
        }
    }
    // Remove the 0 values from the changeArray
    for (let i = changeArray.length - 1; i >= 0; i--)
    {
        if (changeArray[i][1] == 0) {
            changeArray.splice(i, 1);
        }
    }
    // Reverse the array, because apparently, largest units must be first
    changeArray.reverse();
    return ({status: "OPEN", change: changeArray});
  }

// Testing
const assert = require('assert');

let result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(result);

result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(result);

result = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(result);

result =  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(result);