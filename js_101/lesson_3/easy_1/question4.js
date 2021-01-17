/*
* Using the following string, create a new string that 
* contains all lowercase letters except for the first 
* character, which should be capitalized.
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";

let munstersDescriptionLowerCase = munstersDescription.toLowerCase(); 

let munstersDescriptionFirstCapital = munstersDescriptionLowerCase[0].toUpperCase() + munstersDescriptionLowerCase.slice(1, munstersDescription.length); 

// can also do: 

let munstersDescriptionFinal = munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();