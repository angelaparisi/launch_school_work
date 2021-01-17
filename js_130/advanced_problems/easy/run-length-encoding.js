function decode(string) {
  let currentNum = '';
  let decodedString = '';

  for(let i = 0; i < string.length; i++) {
    let currentCharacter = string[i];
    let lastCharacter = string[i - 1];

    if (!(/\d/.test(currentCharacter)) && (!/\d/.test(lastCharacter))) {
      decodedString += currentCharacter;
    } else if (/\d/.test(currentCharacter)) {
      currentNum += currentCharacter;
    } else {
      decodedString += currentCharacter.repeat(Number(currentNum));
      currentNum = 0;
    }
  }
  return decodedString;
}
  
function encode(string) {
  let codedString = '';
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    count++;
    let currentCharacter = string[i];
    let lastCharacter = string[i - 1];
    let nextCharacter = string[i + 1];

    if (lastCharacter !== currentCharacter && currentCharacter !== nextCharacter) {
      codedString += currentCharacter;
      count = 0;
    } else if (currentCharacter !== nextCharacter) {
      codedString += String(count) + currentCharacter;
      count = 0;
    }
  }
  return codedString;
}

module.exports = { encode, decode };