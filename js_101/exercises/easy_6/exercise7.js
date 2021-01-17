// swapName('Joe Roberts');    // "Roberts, Joe"

// function swapName(name) {
//   let array = name.split(' '); 
  
//   console.log(`${array[1]}, ${array[0]}`);
// }

swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"

function swapName(name) {
  let array = name.split(' ');
  let lastName = array.pop();

  
  console.log(`${lastName}, ${array.join(' ')}`);
}