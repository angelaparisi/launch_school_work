function isBalanced(string) {
  let parenNumber = 0;
  
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === '(') {
      parenNumber += 1;
    } else if (string[idx] === ')') {
      parenNumber -= 1;
    }
    if (parenNumber < 0) return false;
  }
  
  return parenNumber === 0;
}


console.log(isBalanced("What (is) this?"));
console.log(isBalanced("What is) this?"));
console.log(isBalanced("What (is this?"));
console.log(isBalanced("((What) (is this))?"));
console.log(isBalanced("((What)) (is this))?"));
console.log(isBalanced("Hey!"));
console.log(isBalanced(")Hey!("));
console.log(isBalanced("What ((is))) up("));