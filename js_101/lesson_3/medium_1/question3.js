// Alan wrote the following function, which was intended to return all of the factors of number:

function factors(number) {
  let factors = [];
  if (number <= 0) {
    return 'Invalid Number'
  } else {
    for (let divisor = number; divisor > 0; divisor -= 1) {
      if (number % divisor === 0) {
        factors.push(number / divisor)
      }
    }
  }
  
  return factors
}


console.log(factors(0))

// code fails if it's 0. How can he make this work without using a do/while loop?