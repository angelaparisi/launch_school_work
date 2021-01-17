// ## PROBLEM 

// Input: a positive integer 
// Output: an array with the digits in the integer 

// ## EXAMPLES: 

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

// ## DATA STRUCTURES 

// Numbers to array. Iteration? Numbers to string to array? 

// ## ALGORITHM 
// - create an empty array 
// - push the integer into the array with numbers at different indexes 
// - return array 

function digitList(integer) {
  let resultArray = integer.toString().split(''); 
  resultArray = resultArray.map(number => Number(number)); 
  console.log(resultArray)
}
