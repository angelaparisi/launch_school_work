// Return a new string that swaps the case of all of the letters:

let munstersDescription = "The Munsters are creepy and spooky.";

function swapLetterCase(string) {
  let swappedString = '';
  for (let char = 0; char < string.length; char++) {
    if (string[char] === string[char].toLowerCase()) {
      swappedString += string[char].toUpperCase();
    } else {
      swappedString += string[char].toLowerCase()
    }
  }
  
  return swappedString;
}

// Alternate option: 

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");