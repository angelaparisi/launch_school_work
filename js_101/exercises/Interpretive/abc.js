
function isBlockWord(string) {
  let blocks = ['BObo', 'XKxk', 'DQdq', 'CPcp', 'NAna', 'GTgt', 'REre', 'FSfs', 'JWjw', 'HUhu', 'VIvi', 'LYly', 'ZMzm'];
  let letters = string.split('');
  
  for (let index = 0; index < letters.length; index++) {
    if (blocks.includes(letters[index])) {
      blocks[letters.indexOf(letters[index])] = 0;
    }
  }
}