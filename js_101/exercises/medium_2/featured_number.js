// Problem 
// input: a number (integer)
// output: next featured number 


// featured number: 
    // multiple of 7
    // odd
    // all digits occur once 
    // highest featured number is 9876543201
    
// DATA STRUCTURES 
// numbers to strings? numbers to strings to arrays? iterating over digits 

// ALGORITHM 
//determine that the number is a positive integer 
// iterate over (number + 1) and up 
// determine if each number in the iteration is 
    // a multiple of 7 
    // odd
    // a distinct digit 
// if a number reaches that criteria, break, and return that number 

function isFeaturedNumber(number) {
  let emptyArray = [];
  let stringArray = String(number).split('');
  
  stringArray.forEach(number => {
    if (!emptyArray.includes(number)) {
        emptyArray.push(number);
    }
  });
  
  return (number % 2 !== 0) && (number % 7 === 0) && (emptyArray.length === String(number).length);
          
}

function featured(number) {
  let featuredNumber = 0;
  if (number <= 0) {
    return 'number must be a positive integer';
  } else if (number >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  } else {
    for (let num = number + 1; num <= 9876543201; num++) {
      if (isFeaturedNumber(num)) {
        featuredNumber = num;
        break;
      }
    }
    return featuredNumber;
  }
  
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   //

// OR TO MAKE IT GO FASTER::: 

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}
