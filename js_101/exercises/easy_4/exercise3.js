const readline = require('readline-sync');

let currentYear = new Date().getFullYear();
let age = Number(readline.question('What is your age? '));
let retirementAge = Number(readline.question('At what age would you like to retire? '));

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retirementAge - age)}.`);
console.log(`You have only ${retirementAge - age} years of work to go!`);