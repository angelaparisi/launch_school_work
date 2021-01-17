// Write a function that takes an array of numbers, and returns an array with the same number of elements, 
// with each element's value being the running total from the original array.

// function runningTotal(array) {
//   if (array.length === 0) {
//     console.log(array);
//   } else { 
//   let newArray = [array[0]];
//     for (let i = 1; i < array.length; i++) {
//       newArray.push(array[i] + newArray[i - 1])
//     }
//     console.log(newArray);
//   }
// }

function runningTotal(array) {
  let sum = 0;
  return array.map(num => sum += num);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);   