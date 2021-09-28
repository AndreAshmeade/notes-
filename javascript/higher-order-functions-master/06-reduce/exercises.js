const numbers = [1, 2, 3, 4, 5,6];
// Create a number that is the sum of all the numbers in the array

const sum = numbers.reduce((sum, number) => {
  sum = number + sum;
  return sum;
},0);

console.log(sum);

const fruits = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
// Create an object with the fruit as a key and the number of occurences of that fruit as a value

const fruitSightings = fruits.reduce((fruitStock, fruit) => { 
  // check if the current fruit is a property in fruitStock // hasOwnProperty
  if(fruitStock.hasOwnProperty(fruit)){
    fruitStock[fruit]++; //increment the value at the given fruit property in fruitStock
  } else {
    fruitStock[fruit] = 1; // add the property to fruitStock and set the value 
  }
  return fruitStock;
},{});

console.log(fruitSightings);

const prices = [29.76, 41.85, 46.5 ];
// Create a number that is the average price of all the prices in the array
// HINT: you will need to check the index to determine if you should return the sum or the average

const averagePrice = prices.reduce((average, price, index, array) =>{
  return average + price / array.length;
}, 0);

console.log(averagePrice);


const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
// create a new array with the first 3 letters of each day

const first_three = days.reduce((shorten, day)=> {
  const firstThree = day.substring(0,3);
  shorten.push(firstThree);
  return shorten;
},[]);

console.log(first_three);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// create a new array with only the words with a length longer than 6

const length_Six = words.reduce((longWord, word)=>{
  if(word.length > 6){
    longWord.push(word);
  }
  return longWord;
},[]);

console.log(length_Six);

const people = [{
  id: 1,
  first_name: 'CJ',
  last_name: 'R.'
}, {
  id: 2,
  first_name: 'Brendan',
  last_name: 'Eich'
}, {
  id: 3,
  first_name: 'Kyle',
  last_name: 'Simpson'
}, {
  id: 4,
  first_name: 'Douglas',
  last_name: 'Crockford'
}];

// Create an object where the keys are the id and the values are the people
const peopleById = people.reduce((byId, person) =>{
  byId[person.id] = person;
  return byId;
},{});

console.log(peopleById);

const animals = [{
  name: 'cat',
  size: 'small'
}, {
  name: 'dog',
  size: 'small'
}, {
  name: 'lion',
  size: 'medium'
}, {
  name: 'elephant',
  size: 'big'
}];

// Create an object where the keys are the size and the values are an array of all animals that size
const animalBySize = animals.reduce((bySize,animal) =>{
  // does bySize have a property that is the current animal size
  if(!bySize.hasOwnProperty(animal.size)){
    // if not set the size property on bySize to be an empty array
    bySize[animal.size] = [];
  }
  // push animal into array in bySize at the given animal size 
  bySize[animal.size].push(animal);
  return bySize;
},{});

console.log(animalBySize);


