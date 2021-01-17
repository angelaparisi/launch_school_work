const NUMBERS_LIST = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
                 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
                 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
                 'eighteen', 'nineteen'];
                 

function alphabeticNumberSort(array) {
  let wordArray = array.map(number => NUMBERS_LIST[number]).sort();
  return wordArray.map(word => NUMBERS_LIST.indexOf(word));

}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]))