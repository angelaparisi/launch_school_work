// PROBLEM 
// input: string of 2 or more sentences 
// output: log the longest sentence and "The longest sentence has THISMANY words."

// A sentence is: 
    //a collection of words that end with a . ! or ? 

// Words are: 
    // any sequence of characters that are not spaces or . ! or ?
        // ie -- should count as a word 
        
// notes: 
    // be sure to preserve the punctuation from the end of the sentence 
    
// DATA STRUCTURES 
// strings, putting sentences and then words into arrays


// ALGORITHM
// create an empty object
// iterate over the characters and push those words into an array until we find a word that ends with . ! or ? 
// continue until we have all sentences 
// compare length of the sentences
// log longest sentence
// log "The longest sentence has WORDLENGTH words";


function longestSentence(string) {
  let object = {}
  let sentenceNumber = 1;
  let sentenceArray = string.split(' ');
  let emptyArray = [];
  let newString = string;
  
  // sentenceArray.forEach((word, index) => {
  //   sentenceArray = sentenceArray.slice(0, index + 1);
  //   if (word[word.length - 1] === '.') {
  //     object[sentenceNumber] = sentenceArray.slice(0, index + 1);
  //     sentenceNumber += 1;
  //   }
  // })
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '.' || string[i] === '!' || string[i] === '?') {
      object[sentenceNumber] = string.substring(0, i + 1).split(' ')
      // emptyArray.push(newString.substring(0, i + 1).split(' '))
      newString = string.substring(i + 2);
      sentenceNumber += 1;
    }
  }
  
    
 console.log(newString) 
 console.log(object)
}


function longestSentence(text) {
  let sentences = text.match(/\w.*?[.!?]/g);
  
  
  sentences.sort((a, b) => b.length - a.length);
  let longestSentence = sentences[0];
  let wordLength = longestSentence.split(' ').length
  
  console.log(`${longestSentence}\n`);
  console.log(`The longest sentence has ${wordLength} words.\n`)
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
