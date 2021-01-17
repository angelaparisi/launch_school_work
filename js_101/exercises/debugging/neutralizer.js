function neutralize(sentence) {
  function isNegative(word) {
    return ["dull", "boring", "annoying", "chaotic"].includes(word);
  }
  
  let words = sentence.split(" ");
  let emptyArray = [];
  
  words.forEach(word => {
    if (!isNegative(word)) {
      emptyArray.push(word)
    }
  });
  return emptyArray.join(" ");
};


 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.