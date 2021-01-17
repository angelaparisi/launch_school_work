// PROBLEM 

// input: a year (integer)
// output: a number representing how many times there was a friday the 13th in that calendar year 

// we may assume that the year is greater than 1752 

// DATA STRUCTURES 
// iterating over months? 
// Date method? 
// let date = new Date('month 13, year')
// let day of week = date.getDay();
// then have to match that to the actual word 

// ALGORITHM 
// set constant months 
// set constant days of the week in an array (with sunday at 0)
// set fridayThirteens equal to 0
// iterate over months from 1 to 12 (inclusive)
// if the 13th of each month is a friday, add 1 to fridayThirteens 
// return fridayThirteens

// determine day of the week 
    // return word at index "date"

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                 'July', 'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(year) {
  let fridayThirteens = 0;
  
  for (let month = 0; month < MONTHS.length; month++) {
    let date = new Date(`${MONTHS[month]} 13, ${year}`);
    
    if (date.getDay() === 5) {
      fridayThirteens += 1;
    }
  }
  
  return fridayThirteens;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
