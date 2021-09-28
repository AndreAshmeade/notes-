00 - First-class Functions

JavaScript is a programming language with First-class Functions.

A programming language is said to have First-class Functions when functions in that language are treated like any other variable.
For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function
and can be assigned as a value to a variable.

Functions in JavaScript are ‘first class’, which means they are treated like any other variable
including being passed to or returned from other functions.

When they’re passed as an argument to another function, they’re known as a ‘callback’ — to be called when the other function is ready for them.

Common examples of callbacks include functions provided to: 

- forEach or map to be called on each item in a collection

- setTimeout or setInterval to be called after set time periods

- then or catch to be called after a promise is settled


### Assign a function to a variable

```js
// Assign an Anonymous Function to a variable
const whatTimeIsIt = () => {
  console.log("It is: ", new Date().toTimeString());
};

// Invoke the function using the variable
whatTimeIsIt();
```

### Pass a function as an argument

```js
const sayHello = () => {
  return "Hello, ";
};

greeting = (helloFn, name) => {
  console.log(helloFn() + name);
};

// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
```

### Return a function

```js
const sayHello = () => {
  return () => {
    console.log("Hello!");
  };
};
```

## How would we invoke the inner function??

1. Store the return value in a variable and invoke it:

```js
const logHello = sayHello();
logHello();
```

3. Invoke the return value on the same line:

```js
sayHello()();
```

### References

- [MDN: First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [WikiPedia: First-class Function](https://en.wikipedia.org/wiki/First-class_function)
