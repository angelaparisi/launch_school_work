function wordLengths(string) {
  if (arguments.length === 0 || string.length === 0) {
    return [];
  } else {
    return string.split(' ').map(word => {
    return word + ' ' + String(word.length);
    })
  }
}

console.log(wordLengths(''));
// ["cow 3", "sheep 5", "chicken 7"]