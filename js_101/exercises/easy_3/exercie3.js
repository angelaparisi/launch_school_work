function stringy(integer) {
  let binaryArray = [];

  for (let char = 0; char < integer; char++) {
    if (char % 2 !== 0) {
      binaryArray.push(0);
    } else {
      binaryArray.push(1)
    }
  }
  
  console.log(binaryArray.join(''));
}

// Can also do: 

function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};

// PEDAC

// ## Understand the problem

// input: a positive integer
// output: a string 
//    - alternating '1's and '0's
//    - always starts with 1
//    - length of string matches given integer 

// ## test cases 

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// ## data structures

// - string with length integer
// - iterating up to integer - push to an array and return a string

// loop? // array

// ## Algorithm 

// - Create empty array
// Change character in string to 1. 
// 2. Change next character in string to 0. 
// 3. Repeat steps one and two until we reach the end of the string
// 4. Return new string. 

