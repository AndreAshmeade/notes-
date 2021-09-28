//------------------Data Types and Comment -----------------------------

// inline-comments

/* multi-line
 * comments
 */

/* Data Types(Anything that is meaningful to the computer):
 * undefined => something that is not defined
 * null => nothing
 * boolean => true or false
 * symbol => an immutable primitive value that is unique.
 * number => whole numbers,deciamls etc
 * object => store key value pairs
 */

// A variable is a container for a value

// var => can be used throughout the whole program.
var myName = "Andre";

myName = 8;

// let => can only be used within the scope of where you declared it.
let ourName = "freeCodeCamp";

// const => a variable that can never change
const pi = 3.14;

// Issues with var USE CONST AND LET when declaring variables

//--------------------Variables and Initialization---------------------------------------------

var a; //variable declaration

var b = 2; // '=' assignment operator

a = 7; // initializing seven to variable 'a'

b = a; // making variable 'b' equal variable 'a'

console.log(a); // print to console

// Initialize these three variables
var a1 = 5;
var b1 = 10;
var c1 = "I am a";

// Do not change code below the line

a1 = a1 + 1;
b1 = b1 + 5;
c1 = c1 + " String!";

console.log(a1);
console.log(b1);
console.log(c1);

//--------------------------  Case-Sensitive ----------------------------------------------------

//Javascript(Case-Sensitive)
//Mean=> variables with different casing is going to be treated as different variables

var stUdLyCapVar;
var properCamelCase;
var TitleCaseOver;

//Assignments(These variable have not been declared and are different variables from above )
STUDYLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
// result : Error

//Assignments(These variable have been declared and is the same as the variables on top)
stUdLyCapVar = 100;
properCamelCase = "A String";
TitleCaseOver = 4000;

//----------------------------- Arithmetic Operators -----------------------------------------------------------------

var price1 = 5;
var price2 = 6;
var total = price1 + price2; // '+' addition operator

var sum = 5 + 10; // result 15

var birthYear = 2001;
var currentYear = 2021;
var age = currentYear - birthYear; // "-" Subtraction operator

var difference = 65 - 33; //result 32

var students = 20;
var icePopCost = 2.99;
var totalCost = students * icePopCost; // "*" multiplication operator // result  59.80

var product = 30 * 6; // result 180

var people = 3;
var numApples = 30;
var eachPerson = numApples / people; // "/" Division operator // result 10

var quotient = 239 - 44; //result 195

var VarX = 5;
var VarZ = x ** 2; // "**" exponentiational operator  //result is 25

var VarX = 5;
var VarY = 5 % 2; // "%" modulus operator(remainder) // result 1

var numA = 10;
numA++; // '++ 'increment operator add 1
console.log(numA); // result 11

var numB = 5;
numB--; // '--' decrement operatpr substract 1
console.log(numB); //result 4

// Operator Preceduence => Order of operations(PEMDAS)
var ex1 = (100 + 50) * 3; // results: 450
var ex2 = 100 + 50 - 3; // 145

//------------------------------------Assignment Operator ------------------------------------------

// addition assignment operator '+=' , x += y , x = x + y

var x1 = 10;
x1 += 5;
// 10 + 5
// result: 15

// The '+' operator can also be used to add(concatenation) string.

let text1 = "Andre";
let text2 = "Ashmeade";
let text3 = text1 + " " + text2; //result: Andre Ashmeade

let txt1 = "What a very ";
txt1 += "nice day"; //result : What a very nice day

//Adding two numbers, will return the sum, but adding a number and a string will return a string:
let as1 = 5 + 5; // 10
let as2 = "5" + 5; // 55
let es3 = "Hello" + 5; // Hello5

// substraction assignment operator "-=", x -= y , x = x - y

var x2 = 3;
x2 -= 1;
// 3 - 1
// result 2

// multiplication assignment operator "*=", x *=  y, x = x * y
var x3 = 5;
x3 *= 2;
//result 10

// Division assignment operator "/=" , x /= y, x = x/y
var x4 = 22;
x4 /= 11;
//result 2

// Modulus assignment operator "%=" , x%=y, x = x % y
var x5 = 5;
x5 %= 2;
//result: 1

// Exponential assignment operator "**=" , x**=y x = x**y
var x6 = 6;
x6 **= 2;
//result: 36
