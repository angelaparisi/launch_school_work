const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' ||
         Number.isNaN(Number(number)) ||
         number < 0;
}

function calculatePayment(loanMonths, loanAmount, monthlyInterestRate) {
  return loanAmount *
         (monthlyInterestRate /
         (1 - Math.pow((1 + monthlyInterestRate), (-loanMonths))));
}

console.log('Welcome to Mortgage Calculator!');

while (true) {
  console.log('\n----------\n');

  prompt('What is your loan amount? Please only enter numbers:');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt("Please enter a valid, positive numerical amount:");
    loanAmount = readline.question();
  }

  prompt('What is your APR? Please only enter numbers:');
  let apr = readline.question();

  while (invalidNumber(apr)) {
    prompt("Please enter a valid, positive numerical amount:");
    apr = readline.question();
  }

  prompt("What is the duration of your loan? Please enter answer in years:");
  let loanDuration = readline.question();

  while (invalidNumber(loanDuration)) {
    prompt("Please enter a valid, positive numerical amount:");
    loanDuration = readline.question();
  }

  let monthlyInterestRate = (apr / 100) / 12;
  let loanMonths = loanDuration * 12;
  let monthlyPayment;

  if (monthlyInterestRate === 0) {
    monthlyPayment = loanAmount / loanMonths;
  } else {
    monthlyPayment = calculatePayment(loanMonths, loanAmount, monthlyInterestRate);
  }

  console.clear();

  console.log(`\nLoan amount: $${loanAmount}\nLoan duration: ${loanMonths} months
APR: ${apr}%\n---\n\nMonthly payment: $${monthlyPayment.toFixed(2)}\n\n---\n`);

  prompt('Would you like to calculate again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer !== 'n' && answer !== 'y') {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer !== 'y') {
    console.log('\nGoodbye!');
    break;
  }

  console.clear();
}