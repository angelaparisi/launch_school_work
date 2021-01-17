function changeMultiples(array, workingPrime, limit) {
  return array.map(number => {
    if ((number !== workingPrime) && (number % workingPrime === 0)) return 0;
    return number;
  });
}

function nextPrime(workingPrime, array) {
  for (let i = array.indexOf(workingPrime) + 1; i < array.length; i++) {
    if (array[i] !== 0) {
      workingPrime = array[i];
      return workingPrime;
    }
  }
  return null;
}

function primes(limit) {
  let range = [...Array(limit - 1).keys()].map(num => num + 2);
  let workingPrime = range[0];
  
  while (workingPrime && workingPrime <= limit) {
    range = changeMultiples(range, workingPrime, limit);

    workingPrime = nextPrime(workingPrime, range);
  }
  return range.filter(number => number !== 0);
}

module.exports = primes;