// ## UNDERSTAND THE PROBLEM: 

// Input: an array 
// output: a new array that consists of two nested arrays
//    - 1st nested array contains first half of original array 
//    - 2nd nested array contains second half of original array 
//    - if original array has an odd amount of elements, place the middle element in the 1st nested array 

// implicit requirements: 
//    - if original array length is 1, place it in 1st nested array and leave second nested array empty
//    - if original array is empty, return array with 2 nested empty arrays 


// ## EXAMPLES: 

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// ## DATA STRUCTURES 

// Array -> a new array with two nested arrays declared. iterate over original array and push into new array 

// ## ALGORITHM 

// - Create new array with two empty arrays nested
// - put half of original array into array at index 0 of new array 
//    - if OG array is odd, put middle element into array at index 0
// - put last half of original array into array at index 1 of new array 
// - return new array 

function halvsies(array) {
  let nestedArray = [[], []]; 
  
  if (array.length % 2 === 0) {
    nestedArray[0] = array.slice(0, array.length / 2); 
    nestedArray[1] = array.slice(array.length / 2, array.length); 
  } else {
    nestedArray[0] = array.slice(0, (array.length + 1) / 2); 
    nestedArray[1] = array.slice((array.length + 1) / 2, array.length)
  }
  
  
  return nestedArray
} 

// OR 

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

console.log(halvsies([]))