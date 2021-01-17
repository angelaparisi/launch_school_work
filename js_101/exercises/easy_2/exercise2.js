const readline = require('readline-sync'); 

let name = readline.question('What is your name? '); 

if (name[name.length - 1] === '!') {
  console.log(`HELLO ${(name.replace('!', '.')).toUpperCase()} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`)
}

