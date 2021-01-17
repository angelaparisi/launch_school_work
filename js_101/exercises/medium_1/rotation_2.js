// UNDERSTAND THE PROBLEM 

// input: an integer, last count digits to rotate (count goes from last element of number and goes to the left)
// output: a new number, with the last count digit moved to the end of the integer 

// DATA STRUCTURE 
// integer into a string into an array. iterate over array to get the last count (starting from length of array - 1). push that into a new array
// return string to numbers

// ALGORITHM
// convert number to a string 
// put string into an array
// to pick out correct digit, array length - digit
// push that digit into the end of the array 
// turn array into string. 
// turn string into number and return 

function rotateRightmostDigits(integer, digitNumber) {
  let array = String(integer).split('');
  let result = array.slice(0, array.length - digitNumber).concat(array.slice((array.length - digitNumber) + 1))
  
  result.push(array[array.length - digitNumber]);
  
  return Number(result.join(''));
}

console.log(rotateRightmostDigits(735291, 6));