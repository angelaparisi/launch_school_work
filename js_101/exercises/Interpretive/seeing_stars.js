// PROBLEM 
// input: odd positive integer (n)
// output: display an 8 pointed star in a n by n grid

// notes: smallest star is 7. 
    // each line from 1 - (n - 1) has 3 stars that get closer together on each iteration 
    // the middle line at (n + 1) / 2 has n stars 
    // each line from then on has 3 stars that get farther apart on each iteration 
    

// ALGHORITHM 
// iterate from 1 to (number + 1) / 2 (inclusive) 
    // on each iteration spaces between stars iterate down by 1 and space before stars iterates up by 1
        // log spaces and asteriks
    // if iterator === (number + 1) / 2 log n asteriks 
        // log spaces and asterisks 
// iterate from ((number + 1) / 2) - 1) to 0 (inclusive)
    // on each iteration, spaces between stars iterate up by 1 and space beofre stars iterates down by 1
        // log spaces ans asterisks 
  
function star(n) {
  let middleIndex = (n + 1) / 2;
  let array = ['*', '*', '*'];
  
  for (let i = 0; i < middleIndex - 1; i++) {
    let spaceNumber = ((n - 3) / 2) - i;
    console.log(' '.repeat(i) + array.join(' '.repeat(spaceNumber)))
  }
  
  console.log('*'.repeat(n));
  
  for (let i = 0; i < middleIndex - 1; i++) {
    let spaceNumber = ((n - 3) / 2) - i;
    
    console.log(' '.repeat(spaceNumber) + array.join(' '.repeat(i)))
  }
  
}


star(9)

// function diamond(number) {
//   for (let i = 1; i <= number; i += 2) {
//     console.log(`${' '.repeat((number - i) / 2)} ${'*'.repeat(i)}`);
//   }
  
//   for (let i = number - 2; i >= 0; i -= 2) {
//     console.log(`${' '.repeat((number - i) / 2)} ${'*'.repeat(i)}`)
//   }
// }

// diamond(11)