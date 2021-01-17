const readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639
const SQFEET_TO_SQMETERS = 0.092903;

console.log('Enter the length of the room:');
let length = parseInt(readline.question());

console.log('Enter the width of the room:');
let width = parseInt(readline.question());

console.log('What is the input type (meters/feet)?');
let unitOfLength = readline.question();

if (unitOfLength === 'meters') {
  let areaMeters = length * width;
  let areaFeet = areaMeters * SQMETERS_TO_SQFEET;
  console.log(`The area of the room is ${(areaMeters).toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);
} else if (unitOfLength === 'feet') {
  let areaFeet = length * width;
  let areaMeters = areaFeet * SQFEET_TO_SQMETERS;
  console.log(`The area of the room is ${areaFeet.toFixed(2)} square feet (${areaMeters.toFixed(2)} square meters).`);
}