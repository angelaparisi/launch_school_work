// Create a new array that contains all of the above values, but in an un-nested format:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];


flintstones = [].concat(...flintstones)

// Alternate solutions: 
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});