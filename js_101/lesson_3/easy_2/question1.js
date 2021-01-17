// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replace('important', 'urgent'); 

// What if the string has more than 2 words it needs to replace? 

let advice2 = "relacing important several times is important"; 

console.log(advice2.replace(/important/g, 'urgent')); 