// Can only default export one thing

export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(`User name is ${user.name}`);
}

export function printAge(user) {
  console.log(`User is ${user.age} years old`);
}

// exported functions

export const capitalizeString = (str) => str.toUpperCase();
export const capitalFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// export functions and variables from one file so that
// you can import them into another file.
