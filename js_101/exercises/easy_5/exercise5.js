// ## PROBLEM 

// Input: two arrays: always non-empty, always same amount of elements
// Output: new array, with alternating values from both input arrays 
//    - 1st value is from 1st input array, alternates from there 

// ## EXAMPLE 

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// ## DATA STRUCTURES 
// arrays, nested arrays. 

// ## ALGORITHM 

// - create an empty array 
// - push value at index 0 from first array 
// - push value at index 0 from second array 
// - index goes up by 1. 
// - push value at index 1 from first array 
// - push value at index 1 from second array 
// - index goes up by 1 
// - repeat iteration steps until we reach the end of each array 
// - return new array 

// function interleave(arr1, arr2) {
//   let resultArray = []; 
  
//   for (let i = 0; i < arr1.length; i++) {
//     resultArray.push(arr1[i]); 
//     resultArray.push(arr2[i]);
//   }
  
//   return resultArray; 
// }

// ## WITH FOREACH: 

function interleave(arr1, arr2) {
  let resultArray = [];
  arr1.forEach((element, index) => {
    resultArray.push(element, arr2[index]);
  })
  return resultArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"])