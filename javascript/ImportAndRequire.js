"use strict";
import { capitalizeString, capitalFirst } from "./string_function.js";
import User from "./string_function.js";

const user = new User("Bob", 11);
console.log(user.name);
console.log(user.age);

const cap = capitalizeString("Hello!");
const capIt = capitalFirst("apple");

console.log(cap);
console.log(capIt);

// export functions and variables from one file so that
// you can import them into another file.
