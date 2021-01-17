const readline = require('readline-sync');

console.log('What is the bill?');
let billAmount = parseFloat(readline.question());

console.log('What is the tip percentage?');
let tipPercentage = parseFloat(readline.question());

let tipAmount = (tipPercentage / 100) * billAmount;
let totalBill = billAmount + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}\nThe total is $${totalBill.toFixed(2)}`);
