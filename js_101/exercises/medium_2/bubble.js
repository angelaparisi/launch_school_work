// Algorithm 
// iterate over array
    // if element is greater than the next digit, swap them
    // if not, continue
    // continue until you finish with the second to last digit
// repeat 
// if no swaps happen on one iteration, break 
// return swapped array

function bubbleSort(array) {
  
  while (true) {
    let hadToSwap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        hadToSwap = true;
      }
    }
    if (!hadToSwap) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]