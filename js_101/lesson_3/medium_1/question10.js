function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What does the following return? 

console.log(bar(foo()));

// it will return 'no'