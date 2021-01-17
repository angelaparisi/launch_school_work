// PROBLEM 
// input: a positive odd integer
// output: display a four point diamond -> 
    // *
  //  ***
  //   *


// DATA STRUCTURES 
// iterate over number, at each number until number + 1 / 2, add two astericks to the diamond
// 1, 3, 5, ... n, n - 1, n - 2, etc. 

// ALGORITHM
// set iterator at 2
// start at 1
// for each iteration, log the number of spaces (number - iteration) / 2 and iteration asterisks 
// once we reach number, iterator starts to go down by 2 
// keep logging until we get a negative number 

function diamond(number) {
  for (let i = 1; i <= number; i += 2) {
    console.log(`${' '.repeat((number - i) / 2)} ${'*'.repeat(i)}`);
  }
  
  for (let i = number - 2; i >= 0; i -= 2) {
    console.log(`${' '.repeat((number - i) / 2)} ${'*'.repeat(i)}`)
  }
}

diamond(11)