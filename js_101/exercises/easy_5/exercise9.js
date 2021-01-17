// Write a function that counts the number of occurrences of each element in a given array. 
// Once counted, log each element alongside the number of occurrences. 
// Consider the words case sensitive e.g. ("suv" !== "SUV").

// ## PROBLEM 

// input: array
// output: log each element alongside the number of times it occurs in the input array 

// notes: the words are case sensitive 

// ## EXAMPLES 

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// ## DATA STRUCTURES 

// array, iterator through, object? 

// ## ALGORITHM 
// - iterate over array
// - on each element, increase the count of that specific element by one
// - log element -> number of occurances 

function countOccurrences(array) {
  let object = {}; 
  
  array.forEach(element => {
    if (!Object.keys(object).includes(element)) {
      object[element] = 1;
    } else {
      object[element] += 1;
    }
  })
  
  Object.keys(object).forEach(element => {
    console.log(`${element} => ${object[element]}`);
  })
}

countOccurrences(vehicles); 