const readline = require('readline-sync'); 

let num1 = readline.question('Enter the 1st number: ');
let num2 = readline.question('Enter the 2nd number: ');
let num3 = readline.question('Enter the 3rd number: ');
let num4 = readline.question('Enter the 4th number: ');
let num5 = readline.question('Enter the 5th number: ');
let num6 = readline.question('Enter the last number: ');

if (num6 === num1 || 
    num6 === num2 ||
    num6 === num3 ||
    num6 === num4 ||
    num6 === num5) {
      console.log(`The number ${num6} appears in ${num1},${num2},${num3},${num4},${num5}.`)
  } else {
      console.log(`The number ${num6} does not appear in ${num1},${num2},${num3},${num4},${num5}.`)
  }
  
  // or: 
  
  // push numbers into an empty array and see if arary .include(num6)