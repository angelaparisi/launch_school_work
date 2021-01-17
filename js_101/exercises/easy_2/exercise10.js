// In this exercise and the next, you're going to reverse those functions.

//Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) 
// to the string representation of that integer.

// PEDAC 

// ## Understand 
// convert numbers into strings 

// input: non-negative integer value 
// output: new string representation of inputed integer 

// ## examples 

// integerToString(4321);      // "4321"
// integerToString(0);         // "0"
// integerToString(5000);      // "5000"
// integerToString(1234567890);      // "1234567890"

// ## data structures 

// number to string. Array of digits. Iteration over number 

// ## algorithm 

// - create digits array 
// - create new string 
// - iterate over numbers in integer and convert into a string 
// - return new string 

// ## CODE 

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}