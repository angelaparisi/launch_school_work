let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArray = arr.sort((a, b) => {
  let totalASum = a.filter(num => num % 2 !== 0).reduce((number, next) => number + next);
  let totalBSum = b.filter(num => num % 2 !== 0).reduce((number, next) => number + next);
  
  return totalASum - totalBSum;
  
})

console.log(newArray)