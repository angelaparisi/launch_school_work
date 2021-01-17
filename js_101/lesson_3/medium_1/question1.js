/* write a program that creates the following output 10 times, 
* with each line indented 1 space to the right of the line above it:
*/ 

function flintstonesRock() {
  let string = 'The Flintstones Rock';
  let padding = string.length
  let i = 0;
  while (i < 10) {
    console.log(string.padStart(padding));
    padding++;
    i++
  }
}

// another solution: 

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}