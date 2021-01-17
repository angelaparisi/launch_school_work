// PROBLEM 

// inut: an array and an item to search for within the array
// output: the index of the item or a -1 if the item does not exist

// a binary search is: 
    // retrieve the middle value from the data
    // i the middle value is equal to the search item, stop the search and return the index
    // if the middle value is less than the search item:
        // discard the lower half of the data including the middle value you just checked
        // repeat the process from the top with the upper half of the data 
    // if the middle value is more than the search item:
        // discard the upper half of the data including the middle value you just checked
        // repeat the process from the top with the lower half of the data 
        
// we may assume that the array argument will always be sorted 


function binarySearch(array, item) {
  let copiedArray = array.slice();
  let middleValue;
  
  while(true) {
    if (copiedArray.length % 2 !== 0) {
      middleValue = copiedArray[(copiedArray.length - 1) / 2];
    } else {
      middleValue = copiedArray[(copiedArray.length / 2) - 1];
    }
    
    if (middleValue === item) {
      return array.indexOf(item);
    }
  }
  
}

binarySearch([1], 4);
binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4);