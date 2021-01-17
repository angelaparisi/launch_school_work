function xor(argument1, argument2) {
  if (argument1 && argument2) {
    return false; 
  } else if (argument1 || argument2 ) {
    return true;
  } else {
    return false; 
  }
}

// CAN ALSO BE: 

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}