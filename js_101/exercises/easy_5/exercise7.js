// ## PROBLEM 

// INPUT: two arrays, containing numbers, same amount of elements
// OUTPUT: new array, contains the product of each pair of of numbers from the arguments that the same index 

// ## EXAMPLE: 

// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// ## DATA STRUCTURES 

// arrays. iterating over indexes and multiplying them together 

// ## ALGORITHM 

// - create new empty array 
// - iterate index over both arrays
// - get product of multiplying both values at index 
// - push product into the empty array 
// - repeat the last two steps until iteration has gone through the array 
// - return new array 

function multiplyList(arr1, arr2) {
  let resultArray = []; 
  arr1.forEach((element, index) => {
    resultArray.push(element * arr2[index]);
  })
  
  return resultArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]))