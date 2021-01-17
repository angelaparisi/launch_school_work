// Problem 

//input: string 
// output: an object containing; 
    // percentage of characters in the string that are lowercase letters 
    // percentage of characters in the string that are uppercase characters
    // percentage of characters that are neighter 
    
// we may assume that the string will always contain at least one character

// implicit rules: 
    // percentages should be strings
    // percentages should include two decimals places 
    
// DATA STRUCTURES 
// iterate over string and count lowercase, uppercase and neither
// push percentages into object 
// turn percentages into string with appropriate 0s 

// ALGORITHM
// create an object w/ lowercase, uppercase and neither set at 0
// iterate over string
// for each iteration:
    // determine if the character is uppercase, lowercase or neither and count value in object up by 1
// determine percentage of total that uppercase, lowercase and neither are 
// set object key to that percentage 
// return object 

// to determine percentage:
    // divide value by length of string and times by 100
    // make sure percentage has two decimals 
    // turn that into a string
    // return percentage 
    

function percentage(value, string) {
  if (string.length === 0) {
    return '0:00';
  }
  let percentage = (value / string.length) * 100;
  return String(percentage.toFixed(2));
}

function determineLowerCase(char) {
  return char >= 'a' && char <= 'z';
}

function determineUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

function letterPercentages(string) {
  let object = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }
  
  for (let index = 0; index < string.length; index++) {
    if (determineLowerCase(string[index])) {
      object.lowercase += 1;
    } else if (determineUpperCase(string[index])) {
      object.uppercase += 1;
    } else {
      object.neither += 1;
    }
  }
  
  for (let prop in object) {
    object[prop] = percentage(object[prop], string);
  }
  
  return object;
}

console.log(letterPercentages(''));