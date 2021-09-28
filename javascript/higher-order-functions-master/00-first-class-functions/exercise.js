// 01 - Define a function called getName that returns your name as a string.

const getName = (name) => {
  console.log(`${name}`);
};

getName("kevin");

// 02 - Define a function called greet that takes in 2 parameters:
// getNameFn - a function that returns your name
// greeting - a string greeting, e.g. 'Hello', 'Goodbye' etc.
// The function should log `Some greeting, your-name-here` by invoking the getNameFn
// Invoke your function several times with different greetings

const getNameFn = () => {
  return "andre ashmeade";
};

function greet(nameMessage, greeting) {
  console.log(nameMessage(), greeting);
}
greet(getNameFn, " What up!");

// 03 - Define a function called makeAdder that takes in 1 parameter:
// number - any valid number
// makeAdder should return a function that takes in 1 parameter:
// other_number - any valid number
// The returned function should return the sum of the two numbers

const makeAdder = (number) => {
  return (other_number) => {
    return number + other_number;
  };
};

// 04 - Use your makeAdder function to create a function that adds 10 to a number
// Invoke your function several times with different numbers, log the result

const tenAddir = makeAdder(10);

console.log(tenAddir(2));
console.log(tenAddir(20));

const fiveAdder = makeAdder(5);

console.log(fiveAdder(10));
console.log(fiveAdder(1));
