## Closure | MDN: [Closures]

- An inner function that uses or changes variables that were initialized\
in an outer function.

`Overview`

- We can use/manipulate a Higher Order Functions' variables/parameters with a closure
- We can create multiple "instances" of a function's variables with closures

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
