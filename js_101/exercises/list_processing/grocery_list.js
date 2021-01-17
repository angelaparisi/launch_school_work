function repeat(fruitAndQuantity) {
  let result = [];
  let [fruit, quantity] = fruitAndQuantity;
  
  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }
  
  return result;
}

function buyFruit(list) {
  let repeatArray = list.map(fruit => repeat(fruit));
  let result = [];
  
  repeatArray.forEach(subArray => {
    return subArray.forEach(item => {
      result.push(item);
    })
  })
  
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));