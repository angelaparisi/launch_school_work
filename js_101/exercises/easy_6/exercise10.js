function reverseWords(string) {
  let array = string.split(' '); 
  
  let reversedArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      reversedArray.push(array[i].split('').reverse().join(''))
    } else {
      reversedArray.push(array[i])
    }
  }
  
  return reversedArray.join(' ')
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"