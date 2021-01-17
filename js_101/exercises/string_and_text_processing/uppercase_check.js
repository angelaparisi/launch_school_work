function isAlphabeticCharacter(char) {
  return (char >= 'a' && char <= 'z') || 
         (char >= 'A' && char <= 'Z');
}

function isUppercase(string) {
  return string.split('').filter(char => isAlphabeticCharacter(char)).every(alphaChar => alphaChar === alphaChar.toUpperCase());
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true