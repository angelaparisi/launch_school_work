function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isLetter(char) {
  return (char >= 'a' && char <= 'z');
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}


function removeNonLettersNumbers(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (isLetter(string[i]) || isNumber(string[i])) {
      newString += string[i];
    }
  }
  return newString;
}

function isRealPalindrome(string) {
  string = removeNonLettersNumbers(string.toLowerCase());
  console.log(isPalindrome(string));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false