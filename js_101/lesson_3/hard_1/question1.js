//Will the following functions return the same results?


function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// no. first() returns an object. second() can't return anything since the object is created under the return call. 