// Write a function that takes a string argument, 
// and returns a list of all substrings that start 
// from the beginning of the string, ordered from shortest to longest.

// ## PROBLEM 
// input: string 
// output: an array of all substrings that start from the beginning of the string 
//    - array is ordered from shortest to longest 

// ## EXAMPLES

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// ## DATA STRUCTURES

// string to array. must iterate through to get substrings? sort array from shortest to longest length(.length property?)

// ## ALGORITHM 

//- create empty array
// - iterate over strings to create substrings
//    - all substrings start with index 0 - length iterates up by 1 each time, ending with length of string 
// - push substring into substring array 
// - sort substring array by shortest to longest 
// - return substring array 

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}