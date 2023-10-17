# Week 06 Async, Node vs Browser

## What is a thread?

* We use the term thread of execution to refer as a sequence of commands
* Javascript is a single threaded language,meaning:
  * It only executes one command at a time
  * Any instance during the program, only one command is being executed
  * The current command will run to full completion, before the next event is handled
* Python is multithreaded:
  * multiple commands can be processed at a time

## Synchronous vs Asynchronous

### Synchronous code

* It runs runs line by line
* Commands are executed one after another
* Code that inherit order
* We can predict the order of code
* Block the call stack

### Asynchronous code

* No guarantee order
* Does not block the call stack
* Async code is sent to the message queue
* We use async code for:
  * wait for user input
  * bad connection
  * handle multiple operations that run independently and do not block or wait for each other to finish
  * api calls
  * users are unpredictable
    * users have short attention spans
  * more dynamic website
  * the environment in which we run our applications is full of uncertainty

```Javascript
console.log('first');

setTimeout(() => {
  console.log('second');
}, 0)

setTimeout(() => {
  console.log('fourth');
},0)

console.log('third');

//first third second
//because setTimeout is async, it does not block the call stack
//async code is sent to the message queue
```

## Event Loop

* Event loop is a running process that watches call stack & queues.
  * It a model of execution that JS uses
* The Event Loop is compromised of two data structures:
  * call stack
  * message queue
* If the call stack is empty, it takes first event in Task queue and pushes it to the call stack.
  * (Check if the call stack is empty, if it is we can move task from the message queue to the call stack)

## Message Queue

* Message Queue tracks the task that cannot be executed at the moment
  * used to track the handling of events
* It uses the queue data structure.
  * It is asynchronous code
  * first in first out, last in last out
  * add to back, enqueue
  * remove from the front, dequeue
  * queue structure

## setTimeout

* What is a setTimeout?
  * The global `setTimeout()` method sets a timer which executes a function or specified piece of code once the timer expires.
  * setTimeout(callbackFunction, delayInMilliseconds, param1, param1);
  * you can pass a non callback to a setTimeout

```Javascript
function foo() {
  console.log("food");
}

setTimeout(foo, 2000);
```

* The code above will print out 'food' after waiting about two seconds
* `setTimeout` is asynchronous, so any commands that come after the setTimeout may be executed before the callback is called

```Javascript
function foo() {
  console.log("food");
}

setTimeout(foo, 2000);
console.log("drink");
```

* The code above will print out 'drink' first and then 'food'.
* A way to cancel timeouts is with `clearTimeout()`
  * you would pass the timer id object to the clear timeout and this will prevent the settimeout from even running

## setInterval

* Similar to `setTimeout`, there also exists a `setInterval` that function that executes a callback repeatedly at the specified delay.
* setInterval accepts the same arguments as setTimeout

```Javascript
function foo(food1, food2) {
  console.log(food1 + " and " + food2 + "!");
}

setInterval(foo, 1000, "pancakes", "couscous");
```

* The code above will print out 'pancakes and couscous!' every second.
* There is also a `clearInterval` that we can use to cancel an interval!
