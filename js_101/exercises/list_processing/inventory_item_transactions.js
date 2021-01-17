// ## Problem 

// input: inventory item and transaction 
// output: an array containing only the transactions for the inventory item 

// ## DATA STRUCTURE 

// objects, array, iteration over objects in array 

// ## ALGORITHM 

// iterate over transactions array
// if id number equals inventory item, push it into the new array 
// return a new array 

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(object => {
    return object['id'] === inventoryItem;
  })
}

console.log(transactionsFor(101, transactions));