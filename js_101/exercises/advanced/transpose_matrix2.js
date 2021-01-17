function transpose(matrix) {
  let transposedArray = [];
  
  for (let rowIdx = 0; rowIdx < matrix[0].length; rowIdx += 1) {
    transposedArray.push([]);
  }

  
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let columnIdx = 0; columnIdx < matrix[rowIdx].length; columnIdx++) {
      transposedArray[columnIdx].push(matrix[rowIdx][columnIdx]);
    }
  }
  
  console.log(transposedArray);
}

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]