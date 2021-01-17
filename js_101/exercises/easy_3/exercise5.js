function triangle(number) {
  let spaceNumber = number - 1; 
  let starNumber = 1;
  
  for (let i = 0; i <= number; i++) {
    console.log(`${(" ").repeat(spaceNumber)}${'*'.repeat(starNumber)}`); 
    spaceNumber -= 1
    starNumber += 1
  }
}

// for some reason, the one above logs and then says there is a range error 

function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}
console.log(triangle(9))