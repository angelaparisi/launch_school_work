function dms(angle) {
  let degree = Math.floor(angle);
  let minutes = Math.floor((angle - degree) * 60);
  let seconds = Math.floor((((angle - degree) * 60) - minutes) * 60); 
  
  
  return String(degree) + '\xB0' + padZero(minutes) + '\'' + padZero(seconds) + '"';
}

function padZero(number) {
  if (String(number).length < 2) {
    return '0' + String(number); 
  }
  return number;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"