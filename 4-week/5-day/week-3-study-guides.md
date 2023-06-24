# Week 3 Node, Pair Programming, and POJO

## Terminal Basic Commands

* ls
  * See all files and folders in the directory(folder) you're currently in
* cd <folder>
  * Navigate to a directory(folder)
* mkdir <folder_name>
  * Make a directory(folder) in whatever directory(folder) you're in
* touch <file_name>
  * Create a file in whatever directory(folder) you're currently in
* pwd
  * Shows you path to the current directory(folder) you're in
* cd ../
  * Travel upwards
* cd ./
  * Don't travel

## Node

* Node.js (Node) is a JavaScript runtime environment

### Commands

* Open a node REPL with `node`
  * exit with ctrl+c (twice)
* Use node <filename> to run a file with node

## Mocha

* Mocha is a testing suite we'll use to test our code

### Commands

* Make sure you're in the folder that contains the 'test' file
* Run `mocha` to run all test files
* Run `mocha -b` to run the test until one fails
* Run `mocha <testFileLocation>` to run a single test
* Run `mocha -g <functionName>` to run all test about a single function

## Object Type

* An object is a data structure that stores other data, similar to how an array stores elements.
* An object differs in that each value stored in an object is associated with a key.
  * Keys are almost always strings while values can be any data type: numbers, strings, functions, arrays, other objects, anything at all!

### Create Object

* Typically when you create an object, you are going to open up a curly bracket, and then go ahead and close that curly bracket

* Inside the object are the key value pairs
  * The property/key is on the left, and then there is a colon and then we have the value on the right.

```Javascript
let person = {
    name: "wes",
    age: 100
  };
```

* Now you could swap out the hardcoded age from the person's object and instead assign it the variable

```Javascript
const age = 100;
const person = {
    name = "Kush",
    age: age
}
```

* Now if you ever run into this situation where the property is the same name as the value variable that you're setting it to, you can simply get away with simply writing the property

```Javascript
const age = 100;
const person = {
    name = "Superman",
    age
}
```

### Access Properties

* We can access key-value pairs using Bracket Notation
  * Place key inside bracket, is represented by a string
  * Can be used to create as well
* We can access values within an object is called Dot Notation
  * Can also use `.` to assign and access key-value pairs
* When we use dot notation, no need for string quotation marks

### Bracket notation vs Dot notation

* Dot notation:

  * easier to read
  * easier to write because we don't have to deal with using quotation marks
  * cannot use variables as keys
  * keys can't contain numbers as their first character (object.1key doesn't work!)

* Bracket notation:

  * you can use variables (assigned to string values) as keys!
  * It is okay to use variables and Strings that start with numbers as keys (use object['1key'] does work, while object.1key does not)

```Javascript
let myDog = {};
myDog.name = "Fido";

// let's use a variable as our key and some bracket notation:
let myKey = "name";
console.log(myDog); // prints `{name: "Fido"}`
console.log(myDog[myKey]); // prints `Fido`

// what if we try to use the variable in dot notation:
// the below is interpreted as myDog['myKey']
console.log(myDog.myKey); // prints: undefined
```

* When we use dot notation to write myDog.myKey, myKey will not be interpreted by JavaScript as a variable.
* The text we write after the . will be used as the literal key.

## Iterating Objects

* We can use special syntax to iterate through each key of an object (in arbitrary order). This is super useful for looping through both the keys and values of an object.

```Javascript
// The current key is assigned to *variable* on each iteration.
for (let variable in object) {
  statement;
}
```

* The `for...in` loop allows you to iterate the enumerable properties of an object. In each iteration, you can get the object key and by using that you can access the property value.

```Javascript
let obj = { name: "Rose", cats: 2 };

// The key we are accessing is assigned to the `currentKey`
// *variable* on each iteration.
for (let currentKey in obj) {
  console.log(currentKey);
}

// prints out:
// name
// cats
```

### Other useful Object methods

* The `Object.keys()` takes an object and returns an array of the object’s properties

```Javascript
> let dog = {name: "Fido", age: "2"}

> Object.keys(dog)
//['name', 'age']
```

* The `Object.values()` takes an object as an argument and returns an array of the object’s values.

```Javascript
> let dog = {name: "Fido", age: "2"}

> Object.values(dog)
// ['Fido', '2']
```

* The `Object.entries()` takes an object and returns an array of the object’s own enumerable string-keyed property [key, value] pairs.

```Javascript
> let cat = {name: "Freyja", color: "orange"}

> Object.entries(cat)
//[ [ 'name', 'Freyja' ], [ 'color', 'orange' ] ]
```

## Reference vs Primitive

* JavaScript has two different types of values:
  * Primitive values
  * Reference values

* Five Primitive Types:
  * Boolean - true and false
  * Null - represents the intentional absence of value.
  * Undefined - default return value for many things in JavaScript.
  * Number - like the numbers we usually use (15, 4, 42)
  * String - ordered collection of characters ('apple')

* One Reference Type:
  * Object - (an array is also a kind of object)!

* Let's talk about the one of the main ways Reference Types and Primitive Types differ:
  * Primitive types are immutable. Meaning they cannot change.

### Immutability

* Primitives are immutable meaning they can not be directly changed.
* When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: stack and heap.
* Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and store it on the stack.

```Javascript
let num1 = 5;
// here we assign num2 to point at the value of the number variable
let num2 = num1;

// here we *reassign* the num1 variable
num1 = num1 + 3;

console.log(num1); // 8
console.log(num2); // 5
```

* We start by assigning num1. JavaScript already knows that the number 5 is a primitive number value. So when we are assigning num1 to the value of 5, we are actually telling the num1 variable to point to the place that the number 5 takes up in our computer's memory
* Next we assign num2 to the value of num1. What effectively happens when we do this is we are copying the value of num1 and then pointing num2 at that copy
* We cannot change the 5 our computer has in memory - because it is a primitive data type. Meaning if we want num1 to equal 8 we need to reassign the value of the num1 variable.
* When we are talking about primitives reassignment breaks down into simply having your variable point somewhere else in memory
* So that in essence is immutability - we can not change values stored in memory; we can only reassign where our variables are pointing.

### Mutability

* A reference value allows you to add, change, or delete properties at any time.
* When you assign a reference value from one variable to another, the JavaScript engine creates a reference so that both variables refer to the same object on the heap memory. This means that if you change one variable, it’ll affect the other.

```Javascript
let cat1 = { name: "apples", breed: "tabby" };
let cat2 = cat1;

cat1.name = "Lucy";

console.log(cat1); // => {name: "Lucy", breed: "tabby"}
console.log(cat2); // => {name: "Lucy", breed: "tabby"}
```
* First we create cat1 then assign cat2 to the value of cat1. This means that both cat1 and cat2 are pointing to the same object in our computer's memory
* Now looking at the code above we can see what when we change either cat1 or cat2, since they are both pointing to the same place in memory, both will change

## Rest and Spread Operators

* JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.

### Rest

* Rest parameter syntax allows us to capture all of a function's incoming arguments into an array.
  * Only the last parameter can be a rest parameter.
* In order to use rest parameter syntax a function's last parameter can be prefixed with `...` which will then cause all remaining arguments to be placed within an array.

```Javascript
function logArguments(...allArguments) {
  console.log(allArguments);
}

logArguments("apple", 15, 3); // prints: ["apple", 15, 3]
```

### Spread

* In essence, the spread operator allows you to break down a data type into the elements that make it up.
* The spread operator has two basic behaviors:
  * Take a data type (i.e. an array, an object) and spread the values of that type where elements are expected
  * Take an iterable data type (an array or a string) and spread the elements of that type where arguments are expected.
* The spread syntax works within array literals, function calls, and initialized property objects to spread the values of iterable objects into separate items.
* Spread operator syntax is very similar to rest parameter syntax but they do very different things:

```Javascript
let numArray = [1, 2, 3];

// here we are taking `numArray` and *spreading* it into a new array where
// comma separated elements are expected to be
let moreNums = [...numArray, 4, 5, 6];

> moreNums
// => [1, 2, 3, 4, 5, 6]
```

* Previously we used the concat method for this purpose, but we can now accomplish the same behavior using the spread operator.

## Destructuring

* The destructuring assignment syntax allows you to extract parts of an array or object into distinct variables

```Javascript
// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
```

* We can alternatively declare our variables before destructuring as well:

```Javascript
let animalArray = ["tiger", "hippo"];

let animal1, animal2;

// here we are "unpacking" the array values into two separate variables
[animal1, animal2] = animalArray;

console.log(animal1); //=> "tiger"
console.log(animal2); //=> "hippo"
```

### Swapping variables using destructuring

* There’s a well-known trick for swapping values of two variables using a destructuring assignment:

```Javascript
let num1 = 17;
let num2 = 3;

// this syntax will swap the values of the two variables
[num1, num2] = [num2, num1];

console.log(num1); // 3
console.log(num2); // 17
```

* Here we create a temporary array of two variables and immediately destructure it in swapped order.
* We can swap more than two variables this way.
* As you've previously read - objects can contain a lot of varied information including arrays, functions, and other objects

```Javascript
let obj = { name: "Apples", breed: ["tabby", "short hair"] };
let { name, breed } = obj;

console.log(name); // "Apples"
console.log(breed); // ["tabby", "short hair"]
```
