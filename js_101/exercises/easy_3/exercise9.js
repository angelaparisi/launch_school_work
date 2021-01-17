// ## UNDERSTAND 

// - input: string that consists of some words and an assortment of non-alphabetic characters
// - output: new string with all non-alphabetical character 

// What is input is an empty string? 
// Does capitalization matter?

// ## EXAMPLE

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// ## DATA STRUCTURES 

// Working with same string
// iteration over the string to get to each character 

// ## ALGORITHM 

// - create new string to push characters to 
// - define if character is alphabetical
// - iterate over string
//    -if non-alphabetical character, push a space to new string 
//      - however, if there already exists a space in the index previous, do not push 
//    - if alphabetical character, push character to new string 
// - repeat step 3 for every character in string
// - return new string 


function cleanUp(string) { 
  let cleanString = ''; 
  
  for (let i = 0; i < string.length; i++) {
    if (isAlphabeticCharacter(string[i])) {
      cleanString += string[i];
    } else {
      if (cleanString[string.length - 1] === ' ') {
        continue; 
      } else {
        cleanString += ' ';
      }
    }
  }
  
  return cleanString;
}
  
function isAlphabeticCharacter(char) {
  if (char >= 'a' && char <= 'z' || 
      char >= 'A' && char <= 'Z') {
    return true; 
  } else {
    return false;
  }
}