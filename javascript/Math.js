function randomDemical() {
  return Math.random();
}

console.log(randomDemical());

// Math.random() -> A random number 0 to 1 but not 1

// Math.floor -> random down to the nearest whole number
// Math.random * 20 -> random number 0 to 20 but not 20

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNumber() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNumber());

// Random whole number in a range

function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(10, 20));

// parseInt -> converts a string to an integer
function covertToInteger(str) {
  return parseInt(str);
}

console.log(covertToInteger("56")); // 56 instead of "56"

// parseInt -> Can covert Binary Numbers to integer
function covertBinary(str) {
  return parseInt(str, 2);
}

console.log(covertBinary("10011"));

//Ternary Operator -> condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEqual(1, 2));

function checkEqualTernary(a, b) {
  return a === b ? true : false;
}

// Miltiple Ternary Operator
function checkSign(num) {
  return num > 0 ? "postive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));

// Use let and const Not var

function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is :", i);
  return i;
}

console.log(checkScope());
