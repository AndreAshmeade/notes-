// Elements can be any data type
var array = ["John", 23];
// NestArray => is an array in a array
var nestArray = [
  ["the universe", 42],
  ["everything", 101010],
];
const newArray = ["NASA", "World"];

// Change initization of array
array = ["NeoVim", "Vim"];
console.log(array);

// newArray = ["iphone","android"]; can't change an array declared wth const.
// You cannot resign a const array but you can mutate it by changing the elements.
//--------------------------------------------------------------------------------------

// Elements are things within the array
// Indexes are the position of the elements

var ourArray = [50, 60, 70];
var oneData = ourArray[0]; //equal 50
var secondData = ourArray[1]; //equal 60
var thirdData = ourArray[2]; //equal 70

// Bracket Notation can be used for arrays and not strings
ourArray[1] = 90;
console.log(ourArray);
//------------------------------------------------------------------------------------------

var ourNestArray = [
  [5, 10, 15],
  [20, 25, 30],
];
var accessDataX = ourNestArray[0][2]; // 15
var accessDataY = ourNestArray[1][1]; // 25
var addExtractData = accessDataX + accessDataY; //40

// change a nested Array unless its declared by a const.
// Multidimensontial array => an array within arrays
var ourNestArray = [
  [
    [10, 20],
    [20, 30],
    [30, 40],
  ],
  [
    [40, 50],
    [50, 60],
    [60, 70],
  ],
];
var dataExtract = ourNestArray[0][2][0]; // 30

//--------------------------------Array Methods------------------------------------------------

//The push() method adds a new element to an array (at the end):

var classes = ["math", "science", "english"];
classes.push(["computersciece", "criminal justice", "hardwire development"]);
/*
[
  'math',
  'science',
  'english',
  [ 'computersciece', 'criminal justice', 'hardwire development' ]
]
  */

var val = [10, 20, 30, 40, 50];
val.push(60, 70, 80, 90, 100);
/*
[
   10, 20, 30, 40,  50,
  60, 70, 80, 90, 100
  ]
*/

var addNestArray = [
  ["John", 21],
  ["Leon", 24],
];
addNestArray.push(["Chris", 14], ["Sam", 18]);
// [ [ 'John', 21 ], [ 'Leon', 24 ], [ 'Chris', 14 ], [ 'Sam', 18 ] ]

// push() method can return new array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.push("Kiwi"); //  x = 5

//The pop() method removes the last element from an array:

var ourArr = [1, 2, 3];
var removedFromOurArr = ourArr.pop();
// removedFromOurArr now equals 3 and ourArr now equals [1,2]

var myArr = [
  ["Jon", 23],
  ["Fin", 15],
];
var removedFromMyArr = myArr.pop();
// removedFromMyArr now equals ["Fin",15] and myArry now equals ["John",23]

// The shift() method removes the first array element and "shifts" all other elements to a lower index.

var ArrShift = ["Stimpson", "J", ["cat"]];
var removeFirstItem = ArrShift.shift();

// ArrShift is now ["J", ["cat"]] and removeFirstItem is equal to Stimpson

var newArrShfit = [
  ["tom", 23],
  ["zack", 3],
];
newArrShfit.shift();
// newArrShfit is now equal to ["zack",3]

// Real Word example of array usage
// Shopping list [itemName, amountOfItems]
var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  ["eggs", 12],
];

const s = [5, 7, 2];

// CANNOT resign BUT CAN MUTATE
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}

editInPlace();
console.log(s);

//Use Destructuring Assignement to Assign Variables from Arrays

const numX = [1, 2, 3, 4, 5];
const [a, b, c, d] = numX;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4

const studentName = ["John", "Kevin", "Tessia"];
const [studentJ, studentK, studentT] = studentName;

// Use Destructuring Assignement to Assign Variables from Arrays

const [varZ, varX, varY] = [1, 2, 3, 4, 5, 6];
console.log(varZ, varX, varY);

let varA = 8,
  varB = 6;
(() => {
  "use strict";
  [varA, varB] = [varB, varA];
})();

console.log(varA);
console.log(varB);
