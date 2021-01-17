function isPalindromicNumber(integer) {
  let string = integer.toString();
  console.log(string.split('').reverse().join('') === string);
  
}


isPalindromicNumber(034543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);       // true