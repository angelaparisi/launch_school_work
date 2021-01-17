// ## UNDERSTAND 

// input: year in integer form 
// output: the century in string form
//    - begins with century number 
//    - ends with 'st' (1st), 'nd' (2nd), 'rd' (3rd), 'th' (4th, 5th, 6th, 7th, 8th, 9th, 0th) 

// to note: 
//    - new centuries begin in years that end with 01
//        - 1901 - 2000 is the 20th century 
//        - 1801 - 1900 is the 19th century 
//        - 1701 - 1800 is the 18th century and so on... 

// ## EXAMPLES 


// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

// ## DATA STRUCTURES 

// integer to string. switch? - for ending 

// ## ALGORITHM 

// - create new string
// - Determine century as a string and push into new string
// - Add 'st', 'nd', 'rd', etc, and push into new string 
// - return string 

// - create new string 
// - 


function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}