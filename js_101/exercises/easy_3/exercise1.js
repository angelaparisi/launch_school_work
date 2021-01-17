function crunch(string) {
  let newString = [];
  string.split('');
  for (let letter = 0; letter < string.length; letter++) {
    if (string[letter] !== string[letter - 1]) {
      newString.push(string[letter]);
    }
  }
  return newString.join('');
}

console.log((crunch('ddaaiillyy ddoouubbllee')))