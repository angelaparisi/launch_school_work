// ## PROBLEM 

// input, an inventory item and a list of transactions
// output: boolean if the item's transactions are greater than zero 

// notes: 
// 'movement' denotes if the quantity is coming in or going out. 
// 'quantity' denotes how much went in or out 

// ## DATA STRUCTURES 
// objects and arrays. iterating over transactions to pull out items with correct id(inventory function)
// iterating over that array to figure out ins and outs and quantity left 

// ## ALGORITHM 
// iterate over transactions array and pull out inventory items into new array 
// iterate over objects in new array and determine quantity left 
//    - if movement = 'in', add the quanity
//    - if movement = 'out', subtract the quantity 
// return boolean if quantity is greater than 0 

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

function isItemAvailable(inventoryItem, transactions) {
  let inventoryArray = transactionsFor(inventoryItem, transactions);
  let quantity = 0;
  
  inventoryArray.forEach(object => {
    if (object['movement'] === 'in') {
      quantity += object['quantity'];
    } else {
      quantity -= object['quantity']
    }
  })
  
  return quantity > 0;
}

console.log(isItemAvailable(101, transactions))
console.log(isItemAvailable(103, transactions))
console.log(isItemAvailable(105, transactions))