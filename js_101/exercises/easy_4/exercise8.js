function wordSizes(string) {
  let sizeObject = {};
  let array = string.split(' '); 

  for (let i = 0; i < array.length; i++) {
    let wordSize = array[i].length;
    if (wordSize === 0) continue;
    
    if (!sizeObject[wordSize]) {
      sizeObject[wordSize] = 0;
    }
    sizeObject[wordSize] += 1
  }
  
  return sizeObject;
}

console.log(wordSizes('Four score and seven.'))