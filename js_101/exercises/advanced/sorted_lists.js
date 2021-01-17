// PROBLEM 

// input: two sorted arrays
// output: a new array that contains every element from both arrays in ascending order

// cannot use .sort
// cannot mutate 

// implicit: if an argument is an empty array, return the other array

// Algorithm 
// create an empty result array
// if either argument is an empty array, push the other array into the empty result array
// iterate over the elements of the 1st array


function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}