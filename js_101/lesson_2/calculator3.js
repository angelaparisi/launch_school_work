const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'es';

function messages(message, lang) {
  return MESSAGES[lang][message];
}

const readline = require('readline-sync');

function prompt(key) {
  let message = messages(key, LANGUAGE)
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('welcome');

while (true) {
  prompt('getNumber1');
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt('stateInvalidNumber');
    number1 = readline.question();
  }

  prompt('getNumber2');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('stateInvalidNumber');
    number2 = readline.question();
  }

  prompt('getOperation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt('result');
  console.log(operation)
  
  prompt('goAgain');
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}


