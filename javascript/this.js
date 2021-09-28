// The JavaScript this keyword refers to the object it belongs to.

// In a object, this mean the current value
person = {
  firstName: "John",
  lastName: "Don",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// person.fullName() ->  John Don

// Alone, this refers to the global object.
/* In a function, this refers to the global object.
 * In a function, in strict mode, this is undefined
 * In an event, this refers to the element that recieved the event.
 * Method like call(), apply() can refer this to any Object.
 */
