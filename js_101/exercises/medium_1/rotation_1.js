// PROBLEM 

// input: an array 
// output: a NEW array with element at original array index 0, moved to the end of the new array

// we know: 
    // we cannot mutate the original array
    // if input is not an array, we return undefined
    // if input is an empty array, we return [];
    // if input array has one element, we return that array.
    
// TEST CASES

// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]



    //NOT MUTATED
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

// DATA STRUCTURES 

// an array to an array. remove the first element and push it into the new array 

// ALGHORITHM 
// determine if input is an array, if not, return undefined 
// determine if array is empty, if empty, return array
// Create a copy of the array, so original array is not mutated
// remove the first element from the copied array
// push that element into the end of the copied array 
// return the copied array

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  
  if (array.length === 0) {
    return array;
  }
  
  let copiedArray = array.slice();
  let firstElement = copiedArray.shift();
  copiedArray.push(firstElement);
  
  return copiedArray;
  
}

console.log(rotateArray([1, 2, 3]));                         // undefined
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));                        // undefined

// OR 

// return array.slice(1).concat(array[0]);
