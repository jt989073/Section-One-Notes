## Closure | MDN: [Closures]

- An inner function that uses or changes variables that were initialized\
in an outer function.

`Overview`

- Closures have access to any variables within its own, as well as any outer function's, scope when they are declared. This is where the lexical environment comes in - the lexical environment consists of any variables available within the scope in which the closure was declared (which are the local inner scope, outer function's scope, and global scope).
- A closure will keep reference to all the variables when it was defined even if the outer function has returned.

- We can use/manipulate a Higher Order Functions' variables/parameters with a closure
- We can create multiple "instances" of a function's variables with closures
- Private state is a huge thing in the SWE world. We want to hide information as much as we can. We use closures a lot to create a private state


```js
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

- Prompt

  - I want to start a new business that sells robots to people.

    - Level One
      - I need to build a factory that will produce robots to people that say, "Hello" when they run them.

    - Level Two
      - Customers would like it if they could decide what the robots said.

    - Level Three
      - Customers would like it if they robots said their names

    - Level Four
      - Customers would like it if the robots kept track of ALL the names they've spoken to.

[Closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

```js
const factory = function (voiceChip) {
  console.log("Booting up factory...");
  console.log("Creating a new empty array...");
  let names = [];
  console.log("Returning a new robot that says " + voiceChip + "...");
  return function robot(name) {
    console.log("Booting up " + voiceChip + " robot...");
    console.log("Adding " + name + " to names...");
    names.push(name);
    console.log("Returning the correct phrase...");
    return voiceChip + " " + names.join(" and ");
  };
};

const hiBot = factory("Hello");
console.log("---Done---");
const byeBot = factory("Goodbye");
console.log("---Done---");

console.log("This is the return of hiBot: ", hiBot); // function
console.log("---Done---");
console.log("This is the return of byeBot: ", byeBot); // function
console.log("---Done---");

console.log(hiBot("James"));
console.log("---Done---");
console.log(hiBot("Gabe"));
console.log("---Done---");

console.log(byeBot("Gabe"));
console.log("---Done---");
console.log(byeBot("James"));
console.log("---Done---");
```
