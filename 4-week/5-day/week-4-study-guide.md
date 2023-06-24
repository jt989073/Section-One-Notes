# Week 04 Callbacks, Scope, and Closure

## Advanced Array Methods

* Breakdown:
  * All of the advanced array methods are expecting a function as their argument
  * That function will be invoked with each element of the array.
  * The function will be passed the current element, its index and the calling array as arguments.
  * forEach does not expect a return from the function it is provided
  * map will "map" the returned data into the current position in the result array
    * map will always return a new array of the same length with new elements
  * filter is expecting true or false as an indicator of whether or not the current element should be including in the new array
    * filter will always return a new array filled with items that passed our argument function
  * reduce is expecting the value of the accumulator for the next iteration.
    * reduce will return anything we want it to. if we manage our accumulator correctly, we get to determine its data type.

### forEach

* The forEach() method allows to run a function for every element of the array.
* Mainly used for iteration
* Syntax:

```Javascript
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```

* Will notice that it starts with the array you want to work on, then uses `.`forEach` to call the method. The forEach method takes a function as its parameter. JavaScript calls the provided function for every element in the array

### filter

* `filter()` returns an array of all matching elements
* Mainly used for seaching in array
* You just need to know the new, smaller array is the returned value from filter

```Javascript
// Array of toys, for example
const toys = [
    'Red Ball',
    'Pink Elephant',
    'Clown with Red Nose',
    'Teddy Bear (Brown)',
    'Firefighter Hat (Red)'
];

// Loop to get only the red toys
const redToys = toys.filter(function (toy) {
    return toy.toLowerCase().indexOf('red') > -1;
});

// Output to console
console.log(redToys);
// Expected output:
//     [ 'Red Ball', 'Clown with Red Nose', 'Firefighter Hat (Red)' ]
```

### map

* The `map()` method is one of the most useful and often used.
* Mainly used to transform an array
* It calls the function for each element of the array and returns the array of results.

```Javascript
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

console.log(lengths); //[5,7,6]
```

### reduce

* `reduce()` isused to calculate a single value based on the array.
* Mainly used to transform an array
* Helpful when you have an array of multiple numbers or elements and you want to reduce the array to a single value
* Array's reduce method take two parameters:
  1. A callback function
  2. An initialValue (optional)
  * Although initialValue is an optional parameter, it is best practice to always include an initialValue since it will ensure you get consistent results.

```Javascript
// Array reduce example 2
const numbers = [0, 1, 2, 3];
const initialValue = 0;
const theSum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, initialValue);

console.log(theSum);
// Expected output: 6
```

```Javascript
// Parameter function
const doSum = function (accumulator, currentValue) {
  return accumulator + currentValue;
}

// Array reduce example 1
const numbers = [0, 1, 2, 3];
const theSum = numbers.reduce(doSum, 0);

console.log(theSum);
// Expected output: 6
```

#### Breaking down the callback function

* The callback function passed to Array reduce can take up to four arguments:
  * accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
  * item – is the current array item.
  * index – is its position.
  * array – is the array.
* The first time reduce invokes the callback function, the accumulator will be the initialValue, and currentValue will be the first element. On the next iteration, accumulator will reset to be the calculated value returned from the first iteration, and currentValue will be the second element of the array. This process repeats for every element in the array. Once reduce has completely iterated through the array, the final value of accumulator will be returned.

## Callback

* Callback: A callback is a function that you pass into another function as an argument for executing later.

```Javascript
// one function
function isOdd(number) {
  return number % 2 != 0;
}

// another function with two parameters
// one being an array, the other a callback function
function filter(numbers, fn) {
  let results = [];
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers, isOdd));
```

### Helper functions vs callback

* all callbacks are helper function but not all helper functions are callbacks
* a callback is a function passed as an argument

## First Class Objects

* A first class object is a type that supports the same basic operations as most other types. (numbers, strings, booleans)
* There are three main operations that a first class object should support:
* First class objects can be assigned to variables

```Javascript
let color = 'red';
console.log(color); // red
```

* First class objects can be arguments

```Javascript
function foo(arg){
  console.log(arg)
}

foo('red'); // red
```

* First class objects can be return values

```Javascript
function foo(){
  return 'red'
}

let result = foo();
console.log(result); // red
```

## Scopes

* The `scope` of a program in JavaScript is the set of variables that are available for use within the program
* JavaScript variables are lexically scoped, meaning that we can determine a variable’s scope from where it is declared in the source code.
* Two main advantages that scope gives us:
  * Security - Scope adds security to our code by ensuring that variables can only be accessed by pre-defined parts of our programs.
  * Reduced Variable Name Collisions - Scope reduces variable name collisions, also known as namespace collisions, by ensuring you can use the same variable name multiple times in different scopes without accidentally overwriting those variable's values.
* There are three types of scopes:
  * Global - Variables defined in the global scope.
  * Local or Function - Global, Parameters, Variables in the function
  * Block- Global, Local, Variables in the block

```Javascript
let car = 'vroom';
function makeSounds(dogSound){
  let cow = 'moo';

  if (true) {
    let turkey = 'gobble';

    for (let i = 0; i < 2; i++) {
    console.log(car, dogSound, cow, turkey, i)
    }
  }
}
makeSounds('woof');
// vroom woof moo gobble 0
// vroom woof moo gobble 1
```

### Global

* Variables defined outside any function, block, or module scope have global scope.
* Variables in global scope can be accessed from everywhere in the application.


### Block

* Block scope is defined with curly braces.
* Variables declared using the `let` or `const` keywords within a JavaScript block `{}` become part of that block’s scope
* A block can appear anywhere in a JavaScript file. It may be declared inside or outside functions
* Variables declared with let and const can have block scope. They can only be accessed in the block in which they are defined.

### Local/Function

* Variables declared inside a function become part of its Local Function Scope
* The scope of a function is the set of variables that are available for use within that function
* We call the scope within a function: local scope.
* The local scope of a function includes:
  * the function's arguments
  * any local variables declared inside the function
  * any variables that were already declared when the function was defined

```Javascript
// global scope
let myName = "global";

function function1() {
  // function1's scope
  let myName = "func1";
  console.log("function1 myName: " + myName);
}

function function2() {
  // function2's scope
  let myName = "func2";
  console.log("function2 myName: " + myName);
}

function1(); // function1 myName: func1
function2(); // function2 myName: func2
console.log("global myName: " + myName); // global myName: global
```

### Scope Chaining

* When a variable is used, JavaScript looks down the scope chain until it either finds the requested variable or until it reaches the global scope, which is the end of the scope chain.

```Javascript
let x0 = 0;
(function autorun1(){
 let x1 = 1;

 (function autorun2(){
   let x2 = 2;

   (function autorun3(){
     let x3 = 3;

     console.log(x0 + " " + x1 + " " + x2 + " " + x3);//0 1 2 3
    })();
  })();
})();
```

## Different Variables

* `Variables` are used to store information to be referenced and manipulated in a computer program.
* A variable's sole purpose is to label and store data in computer memory.
* In JavaScript there are three different ways to declare a variable:
  * `let`: any variables declared with the keyword let allows you to reassign that variable. Variable declared using let is scoped within a block.
  * `const`: any variables declared with the keyword const will not allow you to reassign that variable. Variable declared using const is scoped within a block.
  * `var`: A var declared variable may or may not be reassigned, and the variable is scoped to a function.

## Closure

* The practicality of how a closure is used is simple: a closure is when an inner function uses, or changes, variables in an outer function.
* Basic closure rules:
  * Closures have access to any variables within its own, as well as any outer function's, scope when they are declared. This is where the lexical environment comes in - the lexical environment consists of any variables available within the scope in which the closure was declared (which are the local inner scope, outer function's scope, and global scope).
  * A closure will keep reference to all the variables when it was defined even if the outer function has returned.

```Javascript
function climbTree(treeType) {
  let treeString = "You climbed a ";

  function sayClimbTree() {
    // this inner function has access to the variables in the outer scope
    // in which it was defined - including any defined parameters
    return treeString + treeType;
  }

  return sayClimbTree();
}

// We assign the result to a variable
const sayFunction = climbTree("Pine");

// So we can call it, and indeed the variables have been saved in the closure
// and the sayFunction prints out their values.
console.log(sayFunction); // You climbed a Pine
```

* Closures can also be used to encapsulate private data/methods.

```Javascript
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter()); // => 1
console.log(counter()); // => 2

//we cannot reach the count variable!
counter.count; // undefined
let counter2 = createCounter();
console.log(counter2()); // => 1
```
