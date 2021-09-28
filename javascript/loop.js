//The while loop loops through a block of code
//as long as a specified condition is true.

var arr1 = [];

var i = 0;
while (i < 5) {
  arr1.push(i);
  i++;
}

// arr1 -> [0,1,2,3,4];

//The do while loop is a variant of the while loop. This loop will execute
//the code block once, before checking if the condition is true, then it
//will repeat the loop as long as the condition is true.

var arr2 = [];

var i = 0;
do {
  arr2.push(i);
  i++;
} while (i < 10);

// arr2 -> [0,1,2,3,4,5,6,7,8,9]

// For loop : repeat code
// inilization ; condition; increment

var ourArray = [];

for (var i = 1; i < 6; i++) {
  ourArray.push(i);
}

// ourArray -> [1,2,3,4,5]

var evenArray = [];

for (var i = 10; i > 0; i -= 2) {
  evenArray.push(i);
}

//evenArray -> [10,8,6,4,2]

var oddArray = [];

for (var i = 9; i > 0; i -= 2) {
  oddArray.push(i);
}

// oddArray -> [9,7,5,3,1]

var existArr = [9, 10, 11, 12];
var total = 0;

for (var i = 0; i < existArr.length; i++) {
  total += existArr[i];
}

// total -> 9 + 10 + 11 + 12 =  42

//JavaScript for of statement loops through the values of an iterable object.

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

console.log(text);

const language = "Javascript";

let letters = "";
for (let x of language) {
  letters += x;
}

console.log(letters);

//---------------------------------- Nesting For Loops ----------------------------------------

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(product);

var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Browie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372687",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such properties";
    }
  }
  return "No such contact";
}

var data = lookUpProfile("Sherlock", "lastName"); // Holmes
