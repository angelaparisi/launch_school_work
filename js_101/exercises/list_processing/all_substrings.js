// ## PROBLEM 

// input: string 
// output: an array of all substrings 
//    - all substrings that start at position 0 come first, ordered from shortest to longest.
//    - all substrings that start at position 1 come next, ordered from shortest to longes 
//    - and so on 

// ## EXAMPLE 

substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]


// ## DATA STRUCTURES 
// - use leadingSubstrings function
// - iterate over all characters using leading substrings function on each index 

// ## ALGORITHM 

// - create substring array 
// find substrings for character at index 0 
//- push into substring array 
//    - substrings at each index should be sorted from shortest to longest 
// - index goes up by 1
// - repeat the last three steps until index reaches the end of the string (length - 1)
// - return substring array 

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

function substrings(string) {
  let substrings = [];
  for (let i = 0; i < string.length; i++) {
    let indexSubstrings = leadingSubstrings(string.substring(i, string.length));
    indexSubstrings.forEach(string => substrings.push(string))
  }
  
  return substrings;
}

console.log(substrings('abcde'))