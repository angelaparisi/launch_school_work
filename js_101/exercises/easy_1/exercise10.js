function asciiValue(string) {
  let sum = 0; 
  for (let i = 0; i < string.length; i++) {
    sum = sum + string.charCodeAt(i); 
  }
  return sum;
}

console.log(asciiValue(''))
