# Week 1 Intro to Javascript

## How to Debug

* Most common method you will be using is `console.log`
  * allows us to print something to the console
  * It’s important that the printing occurs before return statement
* Another method is Comments
  * We can `comment out` code to see if that's why we're getting an error
  * We can put explanations next to lines of code so we remember what it does during our study time

``` Javascript
console.log('hello world');
"hello world";

// this is a single line comment

/*
This
is
a multiline
comment
*/
```
* Another method is Errors
  * Read your errors, it will give you a direction to debugging
    * Look at the type
    * Look for a file/line number
    * If you can tell a TA where an error is occurring in your code and what that error message says, you're well on your way to being an expert debugger.

## Data Types in Javascript
* Number
* Boolean

### Number Type
* We can have whole numbers, decimals, and negative numbers
* Order of Operations
  * P.E.M.D.A.S. (Parentheses, Exponenets, Multiplication, Division, Addition, Subtraction)
* Modulo `%`
  * Returns the remainder of a division expression
* NaN (Not a Number)

### Boolean Type
* The Boolean data type is perhaps the simplest type since there are only two possible values, `true` and `false`
* We'll be using booleans to establish logic in our code
* For this reason, the boolean operators can also be referred to as the logical operators

- `Not` Operator (!)
  - Reverses a boolean

    | A     |   !A   |
    |:-----:|:------:|
    | true  | false  |
    | false | true   |

- The `And` Operator (&&)
  - Only true if _both_ sides are true

    | A     | B     | A && B |
    |:-----:|:-----:|:------:|
    | true  | true  | true   |
    | true  | false | false  |
    | false | true  | false  |
    | false | false | false  |

- The `Or` Operator (||)
  - True if _either_ side is true

    | A     | B     | A \|\| B |
    |:-----:|:-----:|:------:|
    | true  | true  | true   |
    | true  | false | true   |
    | false | true  | true   |
    | false | false | false  |

### String Type
* Strings are what we'll use to represent textual data.
  *  A string is a sequence of characters.


#### Syntax
* Must use single-quotes (') or double quotes (")
* You can use single within double or vice-versa
  * If you need both,escape character `\`

#### Length
* The `.length` property returns the number of characters in a string:
  * Space and punctuation are also characters

#### Indexing
* `Index`: position of an element
  * Indices start at 0

      | index | 0 | 1 | 2 | 3 |
      |-------|---|---|---|---|
      | char  | d | o | g | s |

* Refer to a singe character of sting using `bracket notation`

#### IndexOf

* Find the index of _the first_ given character with `indexOf`

#### Concatenate

* Use `+` to concatenate (join) strings together

## Comparison Operators
* Compares two elements and evaluates to a boolean
```Javascript
  // Less than/Greater than
    console.log(5 < 9);      // true
    console.log(5 > 9);      // false
    console.log('a' < 'b');  // true (dictionary order)
    console.log('cat' < 'cats'); // true (dictionary order)

    // Inclusive comparison (... or equal to)
    console.log(7 <= 10);    // true
    console.log(10 >= 10);   // true
```

* Equality
  * = is an assignment operator
  * == coerces data to check equality, hard to predict; do not use
  * === strict equality
  * !== strict NOT equal
```Javascript
  // Equality === and !==
  console.log(2 === 2);    // true
  console.log(2 === 2.1);  // false
  console.log(2 !== 2.1);  // true

  // Two equality operators, === and ==
  console.log(5 === '5'); // false
  console.log(5 == '5');  // true (types are coerced)
  console.log([] == 0);   // true (can be unpredictable)
```

## Variables
* The `=` operator is the assignment operator

* Left of the assignment operator
  * Creates a space in memory with that name
  * Think of it like writing a name on a box
* Right of the assignment operator
  * The value that will be assigned to the namespace
  * Think of it like the object you put in a box.
* Three parts of a variable
```Javascript
  let name; // declaration (undefined)

  name = 'Leroy' // assignment / reassignment

  let name2 = "Jenkins" // initialization

  console.log(name, name2);
```

## Functions
* One of the most fun parts of writing JavaScript: writing functions
* A `function` is a procedure of code that will run when called.

### Vocabulary
* `function declaration` - writing a function (once)
* `function call / invoking` - using a function (once or many times)
* `parameter(s)` - input(s) to a function when writing a function
* `argument(s)` - input(s) to a function when calling a function
* `return` what a function 'equals'

### Syntax

* Declaring a function
  * The blueprint:
```Javascript
function aName (optionalParams) {
  // may have a return value
}
```

* Some notes on return
  * sets the function equal to the return
    * By default, functions will return undefined
  * stops the rest of your code from running
```Javascript
function addTwo(num1, num2) {
  return num1 + num2;
  console.log("This code will not run!");
}
```

* Invoking a function
  * The blueprint
```Javascript:
  aName(optionalArgs)
  // if no args
  aName();
```

### Why Functions?
* Blocks of code that we can invoke multiple times
* Prevent us from having to rewrite code
* There is a difference between console.log() and return:
  * console.log we call a SIDE EFFECT, it doesn't effect the VALUE, IT PRINTS THE VALUE
  * return makes the function's VALUE equal to something when it's invoked

## Conditionals

### Syntax
* keywords: `if` `else if` `else`
  * `if` & `else if` require a condition inside of parenthesis
  * We can put whatever we want in a condition
    * [Falsy Values]
* a `code block` to run

  ```js
  let c = 'turtle';

  if (c === 'dog') {
      console.log("I'm a dog!");
  } else if (c === "turtle") {
      console.log("I'm a turtle!");
  } else if (c === "potato") {
      console.log("I'm a potato");
  } else {
      console.log("I don't know what I am");
  }
  ```

## Loops

### While Loop
* Syntax
  * an `initial expression` (like a counter)
  * the `while` keyword
  * parenthesis with a conditional of when to run the loop WHILE the condition is true
  * a step case leading to the conditional being falsy.

  ```js
  let i = 0;

  while(i < 5) {
      console.log('hello world');
      i++
  }
  ```

### For Loop

* Syntax
  * `for` keyword
  * parenthesis that has ... separated by a semi-colon
    * an `initial expression` (like a counter)
    * a conditional of when to run the loop
    * if truthy, the loop will run.
    * a step case leading to the conditional being falsy.

  ```js
  for (let i = 0; i < 5; i++) {
    console.log('hello world');
  }
  ```

## Arrays
* An array holds a `ORDERED LIST` of data
* We can call each item in an array an `element`
* Index starts at 0

### Syntax

* An array is written with square brackets [] with each element separated by a comma

  ```js
  let arr = [1, "hello", false, NaN, [1, 2, 3]]
  ```

### Indexing

* Just like strings we can get a specific index with `bracket notation`

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array[1]) // "cat"
  console.log(array[array.length - 1]) // finds last element // "turtle"
  ```

* `.indexOf(element)` - finds the index of the first given element in an\
 array. If not found, returns -1.

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.indexOf("dog")) // 0
  console.log(array.indexOf("elephant")) // -1
  ```

### Properties / Methods

* `.length` - returns the number of elements in an array

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.length) // 3
  ```

* `.concat(arr)` - allows us to join arrays together.

  ```js
  let array1 = [1, 2, 3]
  let array2 = [4, 5, 6]
  let array3 = [7]

  let array4 = array1.concat(array2, array3)

  console.log(array4) // [1, 2, 3, 4, 5, 6, 7]
  ```

### More Methods

* Other common methods you will use often: (Not needed _today_, but why not\
 take a look at them on MDN)
  * Array.push
  * Array.pop
  * Array.shift
  * Array.unshift
  * Array.slice
  * Array.splice