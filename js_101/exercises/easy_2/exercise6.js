function penultimate(string) {
  let wordArray = string.split(' '); 
  if (wordArray.length === 1) {
    return 'Empty String';
  } else if (wordArray.length % 2 === 0) {
    return `${wordArray[(wordArray.length / 2) - 1 ]} ${wordArray[wordArray.length / 2]}`;
  } else {
    return wordArray[(wordArray.length - 1) / 2];
  }
}

console.log(penultimate('hi there')); 