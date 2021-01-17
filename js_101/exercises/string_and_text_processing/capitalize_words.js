function wordCap(string) {
  return string.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}



console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'