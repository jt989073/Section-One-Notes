# Week 05 Recursions and IIFE

## Arrow Functions

* There’s another very simple and concise syntax for creating functions
* Arrow functions, a.k.a. Fat Arrows (=>), are a more concise way of declaring functions.
* Syntax:

```Javascript
let func = (arg1, arg2, ..., argN) => expression;
```

* Comparison:

```Javascript
// function declaration
let average = function(num1, num2) {
  let avg = (num1 + num2) / 2;
  return avg;
};

// fat arrow function style!
let averageArrow = (num1, num2) => {
  let avg = (num1 + num2) / 2;
  return avg;
};
```

* If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

```Javascript
let double = n => n * 2;
```

* If there are no arguments, parentheses are empty, but they must be present:

```Javascript
let sayHi = () => console.log("Hello!");

sayHi();
```

## Interpolating String

* A `Template Literal` is a new way to create a string literal that expands on the syntax of the String primitive type allowing for interpolated expressions to be inserted easily into strings.
* To create a template literal by wrapping your text in backticks (`)

```Javascript
let simple = `This is a template literal`;
```

* Template literal is still a String
* One of the main advantages we gain by using template literals is the ability to interpolate variables or expressions into strings.
* The variables or expressions wrapped within the ${} will be evaluated and then will be replaced with the value of that variable or expression.

```Javascript
let firstName = 'John',
    lastName = 'Doe';

let greeting = `Hi ${firstName}, ${lastName}`;
console.log(greeting); // Hi John, Doe
```

* Can use the following technique to create a multi-line string by manually including the newline character ( \n) in the string

```Javascript
let msg = 'Multiline \n\
string';

console.log(msg);
//Multiline
//string
```

## Callstack

* The call stack is a structure that JavaScript uses to keep track of the evaluation of function calls.
* A way for the JavaScript to keep track of its place in code that calls multiple functions.
* The call stack works based on the LIFO principle i.e., last-in-first-out
* Whenever a function is called, the JavaScript  creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.
* When the current function completes,  avaScript pops it off the call stack and resumes the execution where it left off.
* Will stop when the call stack is empty.

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/asynchronous-functions/assets/stack-trace/03.png)

![](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/asynchronous-functions/assets/stack-trace/04.png)

* Sum it up:

```
 Call stack!
    - Is a stack like data structure that js uses to keep track of evaluation of function calls
    - first in last out or last in first out
    - add to a stack, you're pushing ot the stack
    - remove from the stack, popping off the stack
```

## Recursion

* Recursion: the process of calling a function within itself.
* Suppose that you have a function called recurse(). The recurse() is a recursive function if it calls itself inside its body, like this:

```Javascript
function recurse() {
    // ...
    recurse();
    // ...
}
```

* A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely.

```Javascript
function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}
```

### Two Cases

* The `base case` describes the situation where data passed into our function is processed without any additional recursion. When the base case is executed, the function runs once and ends.
  * you can have more than one base case
  * an also be called the terminating case
* The `recursive case`, as the name suggests, is the situation where the function recurses. This represents the data state that causes a function to call itself. Without a recursive case, a function's just another function!
  * usually the opposite base case
  * you usually need only the base case OR the recursive case

* Use cases for recursion:
  * An alternative to iteration
  * handling large set of data
  * breaking problems into small problems, sub problems
    * fibonacci, factorial, sorting/search algorithms

### Recursion Tip

* There are three steps that define a recursive function.
  * The function calls itself (recursive step)
  * The function has an end state (base case)
  * The function moves closer to the base case with each call
* The key here is that each recursive call MUST move the function's current state one step closer to the end state.
* Remember, a recursive function that doesn't move toward the base case isn't recursion: it's an infinite loop that leads to stack overflow.

```Javascript
//with base
function recurse(num) {
  //base case - tell function to stop recursing
  if(num === 0) return 'hello';

  console.log(num);

  return recurse(num - 1);
  //return recurse() is what makes this function recursive
  //num - 1 - recursive step, we are subtracting 1, and passing that new value to the next function call of recurse

}
```

* Any function that can be solved recursively can also be solved iteratively.

## IIFE

* (IIFE): immediately invoked function expression is a function defined as an expression and executed immediately after creation.
* The typical syntax we use to write an IIFE is to start by writing an anonymous function and then wrapping that function with the grouping operator, ( ).
  * After the anonymous function is wrapped in parentheses you simply add another pair of closed parentheses to invoke your function.

```Javascript
// 1. wrap the anonymous function in the grouping operator
// 2. invoke the function!
(function() {
  statements;
})();
```

* IIFE can only be ran once
* How could IIFE be useful?
  * Dont want to use up the global name space
  * Protect function names variables
  * Good for executing async code
  * Want to run a function just one time

## Unassigned Variables

* So the default assigned value of a variable declared using `var` or `let` is `undefined`
* Whereas variables declared using const need to be assigned a value.
  * Variables declared using `const` need to have an assigned value upon declaration to be valid.

```Javascript
const goodbye;
console.log(goodbye); // SyntaxError: Missing initializer in const declaration
let goodbye;
console.log(goodbye); // prints undefined
var hello;
console.log(hello); // prints undefined
```

## Hoisting

* Variable hoisting means that JavaScript moves the variable declarations to the top of the script.
  * let, const, and var
    * they all hoist the declaration, not the assignment
    * var when hoisted, has a default value of undefined, therefore does not thrown an error when hoisting
    * const and let, they will thrown an error, as they do not have a default value
* Function hoisting also moves the function declarations to the top of the script

```Javascript
let x = 20,
  y = 10;

let result = add(x, y);
console.log(result); // 👉 30

function add(a, b) {
  return a + b;
}
```
