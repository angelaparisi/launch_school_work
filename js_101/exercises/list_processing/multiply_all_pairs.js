function multiplyAllPairs(arr1, arr2) {
  let emptyArray = [];
  let array = arr1.map(number => {
    return arr2.map(digit => {
      emptyArray.push(number * digit);
    })
  })
  
  return emptyArray.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));