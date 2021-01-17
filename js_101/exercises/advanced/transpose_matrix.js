// PROBLEM

// 3x3 matrix can be represented by an array of arrays:
    // let matrix = [[1, 5, 8], [4, 7, 2], [3, 9, 6]];
        // represents -> 1 5 8
        //               4 7 2
        //               3 9 6
        
// to transpose a matix -> exchange the rows and columns of the og matrix 
    // transposed -> 1 4 3
    //               5 7 9
    //               8 2 6
  
  // input: an array of arrays representing a 3x3 matrix 
  // output: a NEW array of arrays that represents the transpose of the OG matrix
  
// DATA STRUCTURES 

// arrays, nested arrays, iterating over arrays

// ALGORITHM

// create a new array of nested arrays
// iterate over subArrays 
// if subarray element has index 0, push into nested array at index 0
// if subarray element has index 1, push into nested array at index 1 
// if subarray element has index 2, push into nested array at index 2
// return new nested array 

function transpose(matrix) {
  let transposedArray = [];
  
  for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
    transposedArray.push([]);
  }

  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      transposedArray[j].push(matrix[i][j]);
    }
  }
  
  return transposedArray;
}

