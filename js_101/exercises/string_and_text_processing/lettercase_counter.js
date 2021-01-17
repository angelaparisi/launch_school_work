function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

function letterCaseCount(string) {
  let countObject = {lowercase: 0, uppercase: 0, neither: 0}
  
  string.split('').forEach(char => {
    if (isLowerCaseLetter(char)) {
      countObject.lowercase += 1;
    } else if (isUpperCaseLetter(char)) {
      countObject.uppercase += 1;
    } else {
      countObject.neither += 1;
    }
  })
  
  console.log(countObject);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }