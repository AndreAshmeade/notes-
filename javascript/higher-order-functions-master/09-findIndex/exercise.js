const arr = [5,12,8,130,44];

const isLargeNumber = (element) => element > 13;

console.log(arr.findIndex(isLargeNumber));

function isPrime(num){
  for(let i = 2; num > i; i++){
    if(num % 1 == 0){
      return false;
    }
  }
  return num > 1;
}

console.log([4,6,8,9,12].findIndex(isPrime));
console.log([4,6,8,9,12].findIndex(isPrime));


const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries

