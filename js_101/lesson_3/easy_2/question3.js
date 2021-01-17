// Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

function includes(number, array) {
  console.log(array.includes(number));
}

includes(95, numbers)
