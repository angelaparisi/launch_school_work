// Will the code below raise an error? 

let numbers = [1, 2, 3];
numbers[6] = 5;

// No. Line 4 assigns 5 at the 7th element of numbers. elements at the 4th, 5th and 6th location will be empty.

// What will line 12 return? 

let numbers1 = [1, 2, 3];
numbers1[6] = 5;
console.log(numbers1[4]);

// This will return undefined. but NOTE, this does not mean that the spaces are undefined, they are just empty. 