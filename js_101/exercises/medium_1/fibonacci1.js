function fibonacci(number) {
  if (number === 1) {
    return 1;
  } else if (number === 2) {
    return 1;
  }
  
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(1));       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
console.log(fibonacci(4));       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
console.log(fibonacci(20));      // 6765