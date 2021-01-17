const readline = require('readline-sync');

function sum(finalInteger) {
  let answer = 0;
  for (let i = 1; i <= finalInteger; i += 1) {
    answer = answer + i;
  }
  return answer;
}

function product(finalInteger) {
  let answer = 1;
  for (let i = 1; i <= finalInteger; i += 1) {
    answer = answer * i;
  }
  return answer;
}

let finalInteger = parseInt(readline.question('Please enter an integer greater than 0: '));

let computationType = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (computationType === 's') {
  console.log(`The sum of the integers between 1 and ${finalInteger} is ${sum(finalInteger)}.`);
} else if (computationType === 'p') {
  console.log(`The product of the integers between 1 and ${finalInteger} is ${product(finalInteger)}.`);
} else {
  console.log("Oops. Unknown operation."); 
}

