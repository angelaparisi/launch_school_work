// PROBLEM 
// input: three lengths of potential triangle sides
// output: return a string that classifies the three lengths as either: 
    // "equilateral" (all three sides are equal length) 
    // "isosceles" (two sides are of equal length, while the third is different)
    // "scalene" (all three sides are of equal length)
    // 'invalid' (the sides cannot make a triangle) 


// rules to make a triangle: 
    // the sum of the lengths of the two shortest sides must be greather than the length of the longest side
    // every side must have a length great than 0
    
// DATA STRUCTURES 
// numbers to strings 

// ALGORITHM 

// determine whether the triangle is valid: 
    // determine that every number is greater than 0
    // push the numbers into an array and sort from minimum length to maximum length 
    // sum the first two elements in the array 
    // compare that sum to the third element of the array 
        // if the sum is less than the third element, the triangle is invalid 
        // if the sum is more than the third element, the triangle is valid
// if the three sides are of equal length, return 'equilateral'
// if two sides are of equal length, return 'isosceles'
// else return scalene


function isValidTriangle(input1, input2, input3) {
  let array = [input1, input2, input3];
  
  if (array.includes(0)) {
    return false;
  } 
  
  let sortedArray = array.sort((a, b) => a - b);
  
  if ((sortedArray[0] + sortedArray[1]) < sortedArray[2]) {
    return false;
  }
  
  return true;
}

function triangle(input1, input2, input3) {
  if (!isValidTriangle(input1, input2, input3)) {
    return 'invalid';
  } else if (input1 === input2 && input2 === input3) {
    return 'equilateral';
  } else if (input1 === input2 || input2 === input3 || input1 === input3) {
    return 'isosceles'
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 1, 1))
 
 