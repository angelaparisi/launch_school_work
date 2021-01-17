let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let result = arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => a - b);
  } else { 
    return subArray.slice().sort()
  }
})

console.log(result)