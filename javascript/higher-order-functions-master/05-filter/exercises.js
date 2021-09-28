const numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];
// Create a new array with only the even numbers

const evenNumber = numbers.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});

const evenNumber = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumber);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// create a new array with only the days that start with the letter T

const first_letter = days.filter((letter) => {
  return letter.substring(0, 1) === "T";
});

console.log(first_letter);

// CharAt

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

// Create a new array with only the people who's first name is less than 4 characters long.

const less_four = people.filter((peep) => {
  return peep.first_name.length <= 4;
});

console.log(less_four);

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

// Create a new array with only the animals of size small
const size_small = animals.filter((pet) => {
  return pet.size == "small";
});

console.log(size_small);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// create a new array with only the words with a length longer than 6
const lengthOfSix = words.filter((letter) => {
  return letter.length >= 6;
});

console.log(lengthOfSix);
