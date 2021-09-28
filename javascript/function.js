// function => is a block of code designed to perform a particular task.

/*
function functionName(parameter1,parameter2,..){
     code to be executed 
}
*/

function AlegbraFormula(a, b) {
  console.log(`(${a}+${b})^2`);
  return a ** 2 + b ** 2 + 2 * a * b;
}

console.log(AlegbraFormula(7, 6));

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

console.log(toCelsius(100));

//Unlike the other programming languages JavaScript Does not support Function Overloading.

function foo(arg1, arg2) {
  return arg1 - arg2;
}

function foo(arg1) {
  return arg1;
}

foo(1); // 1
foo(10, 2); //10

// They are not looking at both functions with the same name only the last function
// initilized.

//------------------------------------Scope------------------------------------------------

// Global Scope => Domain inside of the file

// Global variable => variables that are outside of the function
var name = "Javascript Review";
var chapter = "Scope in Javascript";

function Person() {
  //local scope => Domain inside of a function

  //local variables => variables inside of the function
  var name = "John in function";

  function displayName() {
    var email = "Email in inner function";
    console.log(chapter);
    console.log(name);
    console.log(email);
  }
}

console.log(name); // javascript Review instead of John in function
// name is a global variable and the print statement is in the Global scope

//local scope can access global variables but the global scope cannot access
// the local variables

//---------------------Comparsion Operators for Function----------------------------------------

var answer = true;

function question(choice) {
  if (choice) {
    return "correct";
  } else {
    return "incorrect";
  }
}

var result = question(answer); // correct

/*
 3 === 3   true 
 3 === '3' false 
 */

/*
 3 == 3  true 
 3 =='3' true 
 */

function compareVal(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

function compareNum(a, b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
}

//"===" makes true for only numbers not strings
var resultA1 = compareVal(3, 3); //true
var resultA2 = compareVal(3, "3"); //false

// '==' makes true for both string and number
var resultB1 = compareNum(3, "3"); //true
var resultB2 = compareNum(3, "3"); //true

//----------------------------------Comparsion Operators----------------------------------

// "!=" or "!" => means not equal

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(1)); // true -> not equal
console.log(testNotEqual(99)); // false -> equal

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10)); // true -> not equal

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  return "The anwser is less than 100";
}

console.log(testGreaterThan(200));
console.log(testGreaterThan(10));

function testLessThan(val) {
  if (val < 30) {
    return "less than 30";
  }
  return "the answer is more than 30";
}

console.log(testLessThan(20));
console.log(testLessThan(60));

function checkGreaterThanOrEqualTo(val) {
  if (val >= 40) {
    return "greater than or equal to 40";
  }
}

console.log(checkGreaterThanOrEqualTo(40));
console.log(checkGreaterThanOrEqualTo(50));

function checkLessThanOrEqualTo(val) {
  if (val <= 60) {
    return "less than or equal to 60";
  }
}

console.log(checkLessThanOrEqualTo(60));
console.log(checkLessThanOrEqualTo(50));

// value less than or equal to 50 and greater than or equal to 25
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(testLogicalAnd(30));

// value less than 10 or greater than 20
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

//-----------------------------------Conditionals-----------------------------------------

//Use if to specify a block of code to be executed, if a specified condition is true

function timeIf(hour) {
  if (hour < 12) {
    return "Good day";
  }
}

console.log(timeIf(5));

//Use the else statement to specify a block of code to be executed if the condition is false.

function timeElse(hour) {
  if (hour < 12) {
    return "Good day";
  } else {
    return "Good night";
  }
}

console.log(timeElse(13));

// Use the else if statement to specify a new condition if the first condition is false.

function timeElseIf(hour) {
  if (hour < 10) {
    return "Good morning";
  } else if (hour < 20) {
    return "Good day";
  } else {
    return "Good evening";
  }
}

console.log(timeElseIf(15));

//------------------------------------- Glof Code -------------------------------------------------------------

var names = [
  "Hole-in-One!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return namesp[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes == par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 4)); // Print Birdie
//--------------------------------------Switch -----------------------------------------------------------

//Use the switch statement to select one of many code blocks to be executed.
// break keyword it breaks out of the switch block.
// The default keyword specifies the code to run if there is no case match

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "unamed";
  }
  return answer;
}

console.log(caseInSwitch(3)); // result gamma

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(3)); // low
console.log(sequentialSizes(5)); // Mid
console.log(sequentialSizes(8)); // High

// Return Boolean Values

// Long Way
function isLessLong(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

//Short Way
function isLessShort(a, b) {
  return a < b;
}

console.log(isLessLong(10, 15)); // true
console.log(isLessShort(10, 15)); // true

// Return Early Patterns from Functions

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));

var count = 0;

function cc(card) {
  switch (card) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbelt = "Hold";
  if (count > 0) {
    holdbelt = "Bet";
  }

  return count + " " + holdbelt;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

//---------------------------------------Arrow Key--------------------------------------------------------------------------------------------------------------
// Anonymous Function -> Function that does not have a name

//Arrow functions allow us to write shorter function syntax:

// Before
let hello = function () {
  return "Hello World";
};

// After
let greet = () => {
  return "Hello World";
};

//It gets shorter! If the function has only one statement, and
//the statement returns a value, you can remove the brackets and the return keyword:

let goodBye = () => "Good Bye";

let convert = (fahrenheit) => (5 / 9) * (fahrenheit - 32);

let bedTime = (state) => {
  if (state == "Sleep") {
    return "GO TO BED";
  } else if (state == "Wake") {
    return "GET TO WORK";
  }
};

console.log(bedTime("Sleep"));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

//clearner code with arrow function
const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Higher Order function -> default parameters

const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

console.log(increment(5, 2)); // 7
console.log(increment(5)); // 6

// Use the Rest Operator with Function Parameters
// ... name  makes an array

const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3, 4));

// Use the Spread Operator to Evalute Arrays In-Place
const arr1 = ["JAN", "FEB", "MAR", "ARP", "MAY"];
let arr2;
(function () {
  arr2 = [...arr1]; // arr2 = arr1 are equal but arr2 = [...arr1] is a copy
  arr1[0] = "potato";
})();

console.log(arr2);

// Use Destructuring Assignment with the Rest Operator

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}

const arr_mod = removeFirstTwo(source);
console.log(arr_mod);
console.log(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.85,
  min: -0.75,
  average: 35.85,
};

const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();

console.log(stats);
console.log(half(stats));
