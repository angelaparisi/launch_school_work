function multisum(number) {
  let answer = 0; 
  for (let i = 1; i <= number; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      answer = answer + i;
    } else {
      continue;
    }
  }
  return answer; 
}

// FOR EASIER READABILITY IT SHOULD BE: 

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}