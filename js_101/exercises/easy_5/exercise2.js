// ## UNDERSTAND 

// - input: two arrays
// - output: new array that is a union of the two arrays 
//    - cannot include duplicates of the same character

// can assume both arguments will always be arrays 

// ## EXAMPLE 

// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// ## DATA STRUCTURES 
// arrays. iterating over second array to check for duplicates 

// ## ALGORITHM 

// - Create new array 
// - iterate through 1st array 
 //   - if new array already contains a duplicate, continue
//    - if the new array does not contain a duplicate, push into the new array
// - iterate through 2nd array 
//    - if new array already contains a duplicate, continue
//    - if the new array does not contain a duplicate, push into the new array
// - return new array 

function union(arr1, arr2) {
  let resultArray = []; 
  for (let i = 0; i < arr1.length; i++) {
    if (!resultArray.includes(arr1[i])) {
      resultArray.push(arr1[i]);
    }
  }
  
  for (let j = 0; j < arr2.length; j++) {
    if (!resultArray.includes(arr2[j])) {
      resultArray.push(arr2[j])
      
    }
  }
  return resultArray
} 

// OR 

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (resultArray.indexOf(value) === -1) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}


console.log(union([1, 3, 5], [3, 6, 9]));