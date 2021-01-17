// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

console.log(numbers.slice(numbers.length));
console.log(numbers.filter(num => num > 4));
console.log(numbers.splice(0, 0)); 
