// Write a function that takes an array of integers as input, 
// multiplies all of the integers together, 
// divides the result by the number of entries in the array, 
// and returns the result as a string with the value rounded to three decimal places.

// ## PROBLEM 

// input: array of integers
// output: string of the value of the integer average rounded to three decimal places. 

// AVERAGE: multiply integers together and divide by how many integers there are 

// ## EXAMPLE 

// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// ## DATA STRUCTURES 

// integers to string. decimal places toFixed() 
// perform AVERAGE math on the integers 

// ## ALGORITHM 
// - find AVERAGE of all numbers to three decimal places 
// - convert number to string 
// - return string 


// Average function:
// - add all numbers in array together 
// - divide that number by the amount of elements in the array 
// - round to three decimal places 
// - return number 

function multiplicativeAverage(integer) {
  let total = integer.reduce((accumulator, element) => accumulator * element, 1); 
  return (total / integer.length).toFixed(3);
}
