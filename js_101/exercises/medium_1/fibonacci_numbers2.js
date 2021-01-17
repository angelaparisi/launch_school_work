function fibonacci(number) {
  let previousTwo = [1, 1];
  
  for (let integer = 3; integer <= number; integer++) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]]
  }
  return previousTwo[1];
}