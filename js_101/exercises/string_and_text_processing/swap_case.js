function swapCase(string) {
  return string.split('').map(char => {
    if (char.match(/[a-z]/g)) {
      return char.toUpperCase();
    } else if (char.match(/[A-Z]/g)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}



console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON x