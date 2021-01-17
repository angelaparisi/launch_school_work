// PROBLEM 
// input: string
// output: same string with every occurance of a written number corresponing to it's digit ie: one -> 1, two -> 2 

// DATA STRUCTURES 
// object, strings 

// ALGORITHM 
// create an object with string values of words corresponding to their digits
// place words into array
// iterate over array, if word is included in the object values, turn that word into its corresponding digit
// turn array into a string
// set original string equal to that string 
// return original string 

const DIGITS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6, 
  seven: 7,
  eight: 8,
  nine: 9
}

const PUNCTUATION = [',', '.', '!', '\''];

function wordToDigit(string) {
  let array = string.split(' ');
  
  string = array.map((word, index) => {
    if (Object.keys(DIGITS).includes(word.slice(0, word.length - 1))) {
      array[index] = String(DIGITS[word.slice(0, word.length - 1)]) + word[word.length - 1]
      return array[index];
    }
    
    if (Object.keys(DIGITS).includes(word)) {
      array[index] = String(DIGITS[word]);
      return array[index];
    }
    
    return word;
  }).join(' ');
  
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));