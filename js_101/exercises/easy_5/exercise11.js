// ## PROBLEM 

// input: a number of minutes 
//    - negative number represents time BEFORE midnight 
//    - positive number represents time AFTER midight 
// output: the time of day as a string in 24hr format 

// notes: should work with any integer input

// ## EXAMPLES 

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

// ## DATA STRUCTURES 

// integer to string

// ## ALGORITHM 
// set hours per day at 24
// set minutes per day at 24 * 60 
// format time in 00:00
// if number is positive, add integer of number / 24 to hours, add integer of minutes, add integer of seconds.
// if number is negative, substract integer of number / 24 to hours, add integer of minutes, add integer of seconds.
// convert number into a string 
// return string 

const MINUTES_PER_HOUR = 60; 
const HOURS_PER_DAY = 24; 
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}
  
function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    
  }
}