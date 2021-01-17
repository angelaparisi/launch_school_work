function negative(number) {
  return Math.abs(number) * -1;
}

// WITH TERNARY OPERATOR 

function negative(number) {
  return number < 0 ? number : number * -1;
}