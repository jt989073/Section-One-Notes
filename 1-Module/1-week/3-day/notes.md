## Functions

`Vocabulary`

- `function declaration` - writing a function (once)
- `function call` / `invoking` - using a function (once or many times)
- `parameter(s)` - input(s) to a function when _writing_ a function
- `argument(s)` - input(s) to a function when  _calling_ a function
- `return` what a function 'equals'

`Syntax`

- Blueprint for `declaring` a function

  ```js
  function aName (optionalParams) {
    // may have a return value
  }
  ```

`Return`

- Evaluates a function
  - It will evaluate to whatever you put after `return`
  - By default, functions evaluate to `undefined`
- Stops the rest of your code from running

`Invoking a function`

- Blueprint for`invoking` a function
  
  ```js
    aName(optionalArgs)
    // if no args
    aName();
  ```

`Why Functions?`

- Blocks of code that we can invoke multiple times
- Prevent us from having to rewrite code
- console.log() vs return `**WEE-WOO-WEE-WOO**`
  - console.log we call a SIDE EFFECT, it doesn't effect the VALUE
  - return makes the function's VALUE equal to something when it's invoked


  1. [Goodbye]
  2. [Muscle Memory]
  3. [Plus Five]
  4. [Call This Function]

  # W1D4

## Here we go!: 20 mins

### WE'RE SAVING THE QUIZ UNTIL THE END

  1. [Is Five]
  2. [Is Odd]
  3. [Log Between]


## Conditionals

`Syntax`

- keywords: `if` `else if` `else`
  - `if` & `else if` require a condition inside of parenthesis
  - We can put whatever we want in a condition
    - [Falsy Values]
- a `code block` to run

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

### Loops

`While Loop`

- Syntax
  - an `initial expression` (like a counter)
  - the `while` keyword
  - parenthesis with a conditional of when to run the loop WHILE the condition is true
  - a step case leading to the conditional being falsy.

  ```js
  let i = 0;

  while(i < 5) {
      console.log('hello world');
      i++
  }
  ```

`For Loop`

- Syntax
  - `for` keyword
  - parenthesis that has ... separated by a semi-colon
    - an `initial expression` (like a counter)
    - a conditional of when to run the loop
    - if truthy, the loop will run.
    - a step case leading to the conditional being falsy.

  ```js
  for (let i = 0; i < 5; i++) {
    console.log('hello world');
  }
  ```

## Solo Practice 1: 20 mins

  1. [Print Fives]
  2. [Log Between Stepper]
  3. [Three or Seven]

## Solo Practice Discussion: 10 mins

## Arrays : 20 mins

  1. [Sum Array]
  2. [Add Arrays]

## Array Discussion: 30 mins

`Info to know`

- An array holds a `ORDERED LIST` of data
- We can call each item in an array an `element`
- Index starts at 0

`Syntax`

- An array is written with square brackets [] with each element separated by a comma

  ```js
  let arr = [1, "hello", false, NaN, [1, 2, 3]]
  ```

`Indexing`

- Just like strings we can get a specific index with `bracket notation`

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array[1]) // "cat"
  console.log(array[array.length - 1]) // finds last element // "turtle"
  ```

- `.indexOf(element)` - finds the index of the first given element in an\
 array. If not found, returns -1.

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.indexOf("dog")) // 0
  console.log(array.indexOf("elephant")) // -1
  ```

`Properties / Methods`

- `.length` - returns the number of elements in an array

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.length) // 3
  ```

- `.concat(arr)` - allows us to join arrays together.

  ```js
  let array1 = [1, 2, 3]
  let array2 = [4, 5, 6]
  let array3 = [7]

  let array4 = array1.concat(array2, array3)

  console.log(array4) // [1, 2, 3, 4, 5, 6, 7]
  ```

`More Methods`

Other common methods you will use often: (Not needed _today_, but why not\
 take a look at them on MDN)

- Array.push
- Array.pop
- Array.shift
- Array.unshift
- Array.slice
- Array.splice

## Solo Practice 2: 25 mins

  1. [Doubler]
  2. [Vowel Counter]

## Quizzes: 15 mins

  1. [Control Flow Quiz]
  2. [Formative Quiz]

## Extra Homework 😰