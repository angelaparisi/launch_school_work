

function determineConsonant(char) {
  if((char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') &&
      'aeiou'.includes(char.toLowerCase()) !== true) {
    return true;
  } else {
    return false; 
  }
}

function doubleConsonants(string) {
  return string.split('').map(char => {
    if (determineConsonant(char)) {
      return char + char;
    } else {
      return char;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""