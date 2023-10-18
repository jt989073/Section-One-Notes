<!-- markdownlint-disable MD033 -->
# M1W3D3

## POJO Practice - 20 min

- [Cat Builder]
- [Iterate Through Obj]

## POJO Discussion

```js
let obj = {
  name: "James",
  age: 28,
  game: {
    name: "Rocket League",
    hours: 135,
    rank: "Platinum",
    cars: [
      "Octane", 
      "Venom", 
      "X-Devil",
      "Breakout",
      ] 
  }
}

//How would I print my name from the object?

//How would I add my location, Pampa?

//How would I change my age to 32000?

//How would I add "Triton" to the cars array?
```

`Dot notation`

- Since keys are usually strings, and we'd hate to have to write [''] all the time, since this is a bit tedious we have dot notation.

```js
let obj = {
  first: 'a',
  second: 'b',
  third: 'c'
}

console.log(obj.first, obj['first']) // 'a'
```

`Using a variable`

```js
let someVariable = "firstName";
let some = "second";
let variable = "Name";
let time = "FrEQUENcY";

let obj = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
};

console.log(obj[someVariable]); // 'Oscar'
```

`Checking if a key exists`

- obj[key] !== undefined
- key in obj

`Iterating over an Object`

[*OBJECTS ARE UNORDERED*]

- for in loop
- Object.keys
- Object.values
- Object.entries

`Why objects`

- Instant look up time.
- Allows us a term/definition (key-value)
- Groups `like` information together


<br/>
<br/>


# Fat Arrow Functions in JavaScript

In JavaScript, fat arrow functions, also known as arrow functions, provide a concise syntax for writing function expressions. They were introduced in ES6 and have become widely used due to their simplicity and lexical scoping behavior. In this lecture, we will explore the syntax and features of fat arrow functions.

## Syntax
The syntax for a fat arrow function is as follows:

```js
let functionName = (param1, param2) => {
  // Function body
};
```
The function name is optional, and the parameters are enclosed in parentheses. The fat arrow => separates the parameter list from the function body, which is enclosed in curly braces {}.


Example: Basic Fat Arrow Function
Let's start with a basic example:

```js
const greet = () => {
  console.log("Hello, world!");
};
```

greet(); // Output: Hello, world!
In this example, we define a fat arrow function called greet that takes no parameters. When invoked, it logs the message "Hello, world!" to the console. Notice the lack of function keyword and the use of the fat arrow =>.

## Single Parameter
If a fat arrow function takes only one parameter, you can omit the parentheses around the parameter list:

```js
const square = num => {
  return num * num;
};
```

console.log(square(5)); // Output: 25
In this example, the square function takes a single parameter num and returns the square of that number.

Multiple Parameters
When a fat arrow function has multiple parameters, you need to enclose them in parentheses:


```js 
const add = (a, b) => {
  return a + b;
};
```

console.log(add(2, 3)); // Output: 5
Here, the add function takes two parameters a and b and returns their sum.

## Implicit Return
Fat arrow functions provide a convenient shorthand syntax for functions with a single statement. Instead of using the return keyword, you can omit the curly braces and the return statement. The result will be implicitly returned.


```js
const double = num => num * 2;
```

console.log(double(4)); // Output: 8
In this example, the double function takes a number num and multiplies it by 2. Since there is only one statement, we can omit the curly braces and the return keyword.