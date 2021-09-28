//Before a module's code is executed, Node.js will wrap it with
//a function wrapper that looks like the following:

/*
Wrapper Function 
(function(exports, require, module, __filename, __dirname) { 
    // Module code actually lives in here 
}); 
*/

console.log(__dirname, __filename);

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greeting(){
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
