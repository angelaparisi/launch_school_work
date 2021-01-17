/* Write two distinct ways of reversing the array without 
* mutating the original array. Use reverse for the first 
* solution, and sort for the second.
*/ 

let numbers = [1, 2, 3, 4, 5];

let reverse = numbers.slice(0, numbers.length).reverse();

// Additional solution: 

let numbers1 = [1, 2, 3, 4, 5];
let reversedArray = [];

numbers1.forEach((number) => {
  reversedArray.unshift(number);
});