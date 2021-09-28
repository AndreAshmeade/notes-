// class is a blueprint of an object

// class (keyword) -> to create a class.

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

/* 
   The Constructor Method

The constructor method is a special method:


It has to have the exact name "constructor"

It is executed automatically when a new object is created

It is used to initialize object properties

If you do not define a constructor method,
JavaScript will add an empty constructor method.

 */

//Create Objects
let carOne = new Car("Ford", 2014);
let carTwo = new Car("Audi", 2019);

console.log(carOne);
console.log(carTwo);
