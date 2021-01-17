// ## PROBLEM 

// INPUT: string 
// OUTPUT: an array consisting of all palindromic substrings 
//    - substrings should be sorted by order of their appearance (starting character index position + length)
// 
// palindrome = same letters (case specefic) reading from left to right as reading from right to left 
//    - single characters are not palindromes 


// ## DATA STRUCTURES 
// arrays, iteration 

// ## ALGORITHM 

// - create array of all substrings 
// - determine whether each substrings is a palindrome
// - if yes, push into palindrome array, if no, continue
// - return palindrome array 

// is palindrome: 
// - determine if string is greater than one 
// - compare string to reverse string. 
// - if they are equal, return string 


function isPalindrome(string) {
  if ((string.length > 1) &&
      (string === string.split('').reverse().join(''))) {
    return true;
  } else {
    return false;
  }
}

function leadingSubstrings(string) {
  let substrings = []; 
  for (let length = 1; length <= string.length; length++) {
    substrings.push(string.substring(0, length))
  }
  return substrings;
}

function substrings(string) {
  let substrings = [];
  for (let i = 0; i < string.length; i++) {
    let indexSubstrings = leadingSubstrings(string.substring(i));
    indexSubstrings.forEach(string => substrings.push(string))
  }
  
  return substrings;
}

function palindromes(string) {
  let palindromes = []; 
  let substringArray = substrings(string);
  substringArray.forEach(string => {
    if (isPalindrome(string)) {
      palindromes.push(string);
    }
  })
  
  return palindromes;
}

// OR 

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}


console.log(palindromes('hello-madam-did-madam-goodbye'));