const numbers = [13, 42, 1337];
// Create a new array with the numbers doubled

const double = numbers.map((number) => {
  return number * 2;
});

console.log(double);

// Map create a new array of the same length
// Transform array

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// create a new array with the first 3 letters of each day

const abreviated = days.map((day) => {
  return day.substring(0, 2);
});

console.log(abreviated);

const people = [
  {
    first_name: "CJ",
    last_name: "R.",
  },
  {
    first_name: "Brendan",
    last_name: "Eich",
  },
  {
    first_name: "Kyle",
    last_name: "Simpson",
  },
  {
    first_name: "Douglas",
    last_name: "Crockford",
  },
];

// Create a new array with the string full name of each person
const name = people.map((person) => {
  console.log(person.first_name);
});

const animals = [
  {
    name: "cat",
    size: "small",
  },
  {
    name: "dog",
    size: "small",
  },
  {
    name: "lion",
    size: "medium",
  },
  {
    name: "elephant",
    size: "big",
  },
];

// Create a new array with just the names of the animals
const pet = animals.map((creature) => {
  return creature.name;
});

console.log(pet);

const theNumbers = [4, 8, 15, 16, 23, 42];
// create a new array of objects with the properties value and index

const num = theNumbers.map((element, index) => {
  return {
    element,
    index,
  };
});

console.log(num);

const starter = [2, 5, 10];
// Create a new array with each value multiplied by the next value
// The last value should be multiplied by the first value
// e.g. [2*5, 5*10, 10*2] == [10, 50, 20]

const multipliedByNext = starter.map((number, index, array) => {
  let nextIndex = index + 1;

  if (index == array.length - 1) {
    nextIndex = 0;
  }

  return number * array[nextIndex];
});

console.log(multipliedByNext);
