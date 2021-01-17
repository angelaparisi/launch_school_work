function reverseNumber(integer) {
  let array = integer.toString().split(''); 
  let reversedStringNumber = array.reverse().join('');
  
  return parseInt(reversedStringNumber, 10);
}