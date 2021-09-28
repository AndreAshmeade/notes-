try {
  //tryCode - Block of code to try
  console.log("Start of try runs");

  unicycle;

  console.log("End of try run -- never reached");
} catch (err) {
  //catchCode - Block of code to handle errors
  console.log("Error has occurred:" + err);
} finally {
  //finallyCode - Block of code to be executed regardless of the try / catch result
  console.log("This always run");
}

//The throw statement allows you to create a custom error.

let x = 0;

try {
  if (x == "") throw "empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10) throw "too high";
} catch (err) {
  console.log("Input is " + err);
}

//A RangeError is thrown if you use a number that is outside the range of legal values.

let num = 1;

try {
  num.toPrecision(500);
} catch (err) {
  console.log(err);
}

//A ReferenceError is thrown if you use (reference) a variable that has not been declared:

let x = 5;
try {
  x = y + 1; // y cannot be used (referenced)
} catch (err) {
  console.log(err);
}

// A SyntaxError is thrown if you try to evaluate code with a syntax error.

try {
  eval("alert('Hello)"); // Missing ' will produce an error
} catch (err) {
  console.log(err);
}

// A TypeError is thrown if you use a value that is outside the range of expected types:

let num = 1;
try {
  num.toUpperCase(); // You cannot convert a number to upper case
} catch (err) {
  console.log(err);
}

// A URIError is thrown if you use illegal characters in a URI function:

try {
  decodeURI("%%%"); // You cannot URI decode percent signs
} catch (err) {
  console.log(err);
}
