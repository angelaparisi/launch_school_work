function isValidTriangle(input1, input2, input3) {
  let array = [input1, input2, input3];
  
  return (!array.includes(0)) && array.reduce((accum, element) => accum + element, 0) === 180;
}

function triangle(angle1, angle2, angle3) {
  if (!isValidTriangle(angle1, angle2, angle3)) {
    return 'invalid';
  } else if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return 'right';
  } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}
console.log(triangle(120, 50, 10))