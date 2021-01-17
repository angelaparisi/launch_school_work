function isLetterOrSpace(character) {
  return ((character >= 'a' && character <= 'z') ||
         (character >= 'A' && character <= 'Z') || 
         (character === ' '));
}

function removeNonLetters(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (isLetterOrSpace(string[i])) {
      newString += string[i];
    }
  }
  return newString;
}


function wordSizes(string) {
  let sizeObject = {};
  string = removeNonLetters(string);
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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes('')); 