// Problem 

// input: an array representing a matrix mxn
// output: a new array representing the matix rotated clockwise by 90degrees 

// EXAMPLES: 

// matrix1 = [[1, 5, 8], 
//            [4, 7, 2], 
//            [3, 9, 6]] 

// becomes => [[3, 4, 1],
//             [9, 7, 5],
//             [6, 2, 8]]

// and matrix2 => [[3, 7, 4, 2],
//                 [5, 1, 0, 8]]

// becomes =>     [[5, 3],
//                 [1, 7]
//                 [0, 4]
//                 [8, 2]]


// DATA STRUCTURES 
// arrays, iterating over array and subarray 

// Algorithm 

// create a new empty array called rotatedArray
// initialize the subarrays by iterating from 0 to less than matrix[0].length 
    // push empty array into rotatedArray
// iterate over matrix and onto each subArray in decreasing order
    // iterate through each element of each subArray in increasing order
        // for each subarray: index of 0 goes to index 0 of rotated array
        // index of 1 gets pushed into index 1 of rotated array
        // index of 2 gets pushed into index 2 of rotated array
        // and so on..... until the end of the subArray is reached 
// return rotatedArray 


function rotate90(matrix) {
  let rotatedArray = [];
  
  for (let rowIdx = 0; rowIdx < matrix[0].length; rowIdx += 1) {
    rotatedArray.push([]);
  }
  
  for (let rowIdx = matrix.length - 1; rowIdx >= 0; rowIdx -= 1) {
    for (let columnIdx = 0; columnIdx < matrix[rowIdx].length; columnIdx++) {
      rotatedArray[columnIdx].push(matrix[rowIdx][columnIdx]);
    }
  }
  return rotatedArray;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]