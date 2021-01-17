function oddities(array) {
  let oddArray = [];
  
  for (let index = 0; index < array.length; index += 2) {
    oddArray.push(array[index]); 
  }
  
  return oddArray;
}

// OR 

function oddities(array) {
  let oddArray = [];
  let index = 0;
  while (index < array.length) {
    oddArray.push(array[index]); 
    index += 2;
  }
  
  return oddArray; 
}

console.log(oddities([1, 2, 3, 4]))
