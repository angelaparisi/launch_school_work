// UNDERSTAND THE PROBLEM 

// input: a positive integer 
// output: maximum rotation of that integer -> 
    // take integer and rotate it by one digit to the left
    // keep 1st digit in place and rotate remaining digits 
    // keep 2nd digit in place and rotate remaining digits 
    // and so on.... until 
    // you have two final digits to rotate, rotate them and return number 
    
// other notes: 
    // leading zero gets dropped 
    
// DATA STRUCTURES 

// we'll use rotateRightmostDigits function. we'll iterate over digits, and rotate the rest... string? array? 

// ALGORITHM 
// turn integer into a string and then array
// iterate over the digits 
// on each digit (rotate the next digit to the end of the string)
// turn that string into a number and drop the leading zero if needed 
// return number 

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}


function maxRotation(integer) {
  let numberString = String(integer)
  
  for (let count = numberString.length; count >= 2; count--) {
    integer  = rotateRightmostDigits(integer, count);
  }
  
  console.log(integer);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845