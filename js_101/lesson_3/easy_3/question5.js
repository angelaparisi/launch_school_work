/* The following function unnecessarily uses two return statements
* to return boolean values. How can you eliminate the unnecessary duplication?
*/ 

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// it can be: 

function isColorValid(color) {
  return color === "blue" || color === "green";
}

// or 

const isColorValid = color => color === "blue" || color === "green";

// or 

const isColorValid = color => ["blue", "green"].includes(color);
