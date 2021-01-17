// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)

// output is "hello there". JS passes a copy of the str1 to str2 and so str1 is never changed