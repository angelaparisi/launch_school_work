let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let array = Object.values(obj); 
let vowels = 'aeiou'

array.forEach(array => {
  array.forEach(string => {
    string.split('').forEach(character => {
      if (vowels.includes(character)) {
        console.log(character);
      }
    })
  })
})