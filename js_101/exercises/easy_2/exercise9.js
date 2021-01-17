function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3, 
    4: 4, 
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }
  
  let digitArray = string.split('').map(character => DIGITS[character]); 
  let value = 0; 
  
  digitArray.forEach(digit => (value = (value * 10) + digit));
  return value;
}

console.log(stringToInteger("4321"))