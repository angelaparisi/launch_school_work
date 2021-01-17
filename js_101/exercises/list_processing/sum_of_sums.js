// ## PROBLEM

// input: an array of numbers 
// output: the sum of the sumes of each leading subsequence for that array 

// ## DATA STRUCTURE 

// arrays, iterating over arrays to add numbers together 

// ## ALGORITHM 

// - create a sums array
// - iterate over numbers array, starting with index 1, and count going up by 1 on each iteration 
// - push sum into sums array 
// - return sum of sums array 

function sumOfSums(numbers) {
  let sumsArray = [];
  
  for(let i = 1; i <= numbers.length; i++) {
    sumsArray.push(numbers.slice(0, i).reduce((accum, number) => accum + number, 0));
  }
  
  console.log(sumsArray.reduce((accum, number) => accum + number, 0))
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35