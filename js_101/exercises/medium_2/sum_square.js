// PROBLEM 

// input; number 
// output: the difference (number) of the square sum of integers from 1 to number (inclusive) 
//         and the sum of the squares of the integers from 1 to number (inclusive)

// notes: 1 returns 0 
// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

// DATA STRUCTURES 
// sums, arrays (reduce). 

// ALGORITHM 
// iterate over the number from 1 to number (inclusive) and push into a number array
// create a new array with the squares of the original array 
// find the sum of each array 
// find the difference between the square of the sum of the original array and 
    // the sum of the squares array 
// return the difference 

function sum(array) {
  return array.reduce((accumulator, element) => accumulator + element, 0)
}

function sumSquareDifference(number) {
  let array = [];
  
  for (let integer = 1; integer <= number; integer++) {
    array.push(integer);
  }
  
  let squaresArray = array.map(integer => integer * integer);
  
  return (sum(array) * sum(array)) - (sum(squaresArray));
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0