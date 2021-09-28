//Example
var firstNameLength = 0;
var firstName = "Ada";

// .length => find the length of String
firstNameLength = firstName.length; // will return 3
console.log(firstNameLength);

// The sequence \" inserts double quote in a string:
let txt1 = 'We are the so-called "Viking" from the north.';
console.log(txt1);

// The sequence \' inserts a single qoute in a string:
let txt2 = "It's alright.";
console.log(txt2);

// The sequence \\ inserts a backslash in a string:
let txt3 = "The character \\ is called backslash.";
console.log(txt3);

/*****
 Code  OUTPUT 
\'     single qoute 
\""    double qoute 
\\     backslash 
\n     newline 
\r     carriage return 
\t     tab
\b     backspace 
\f     form feed 
*****/

// The sequence \n  creates a newline for home
let txt4 = "Javascript is \n home";
console.log(txt4);

// The sequence \r cuts off anything before its declaration
let txt5 = "freeCodeCamp is \r better than CodeDojo";
console.log(txt5);

// The sequence \t make a tab
let txt6 = "Call of Duty is nothing \t compared to battlefield";
console.log(txt6);

// The sequence \b makes a backspace
let txt7 = "iphone is godlike\bunlike android";
console.log(txt7);

// The sequnece \f is a page break
let txt8 = "Javascript is better \f than java by a mile";
console.log(txt8);

// Concatenation

var ourName = "freeCodeCamp";
var ourStr = "Hellom our name is " + ourName + " , how are you?";
console.log(ourStr);

var myName = "Andre";
myName += " Ashmeade";
console.log(myName);

//String Immutable => The individual characters of a string cannot be changed
var Immutable = "Jello World";
Immutable[0] = "H";
console.log(Immutable); //result: Jello World

Immutable = "Hello World";
console.log(Immutable); // result: Hello World

// Strings follow the same rules as arrays

var animal = "bird";
var firstLetterOfAnimal = animal[0]; // b
var secondLetterOfAnimal = animal[1]; // i
var thirdLetterOfAnimal = animal[2]; // r
var fourthLetterOfAnimal = animal[3]; // d

// bracket notation
var lastLetterOfAnimal = animal[animal.length - 1]; //d

var thirdToLastLetterOfAnimal = animal[animal.length - 3];

var secondToLastLetterOfAnimal = animal[animal.length - 2];

//------------------WORD Blank --------------------------------

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;
  return result;
}

console.log(wordBlanks("dogs", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Create Strings using Template Literals
// Benefits of interplation:
// Mutli-line string
// input variables

const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

// Coding Challenge

const result = {
  success: ["max-length", "no-amid", "prefer-arrow-function"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-duo-keys"],
};

function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

// Write Concise Object Literal Declarations Using Simple Fields
/*
const createPerson = (name,age,gender) =>{
  return{
    name: name,
    age:age,
    gender:gender
  };
};
*/

const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("Zodiac", 56, "male"));
