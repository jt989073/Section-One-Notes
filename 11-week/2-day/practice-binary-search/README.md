# Practice Binary Search

In this practice exercise, you will be implementing and comparing the
performance of a linear search and binary search.

## Instructions

1. Clone the [starter] repo
2. Install all packages by typing `npm install`
3. Read through the instructions and specs to understand the task
4. Run specs with `npm test`

## Polya's Problem Solving

Remember Polya's problem solving framework as you go through these exercises.

1. Understand the problem
2. Make a plan
3. Carry out the plan
4. Look back and improve your solution

You will be implementing classic algorithms in code. Review the readings to
_understand the problem_.

You are given the _plan_ in comments already. Study these carefully!

These exercises are meant for you to practice _carrying out the plan_. Focus
on translating the plans to JavaScript code.

If you finish early, you will be able to _improve your solutions_ by
refactoring your sorting algorithms to run in-place. Binary search is also a
major improvement over linear search.

## Part 1: Comparing Linear vs Binary Search

Open up `binary-search.js`. Your first task is to implement a linear search:

```js
linearSearch([2,4,6,8], 6);  // 2
linearSearch([2,4,6,8], 10);  // -1
```

This returns the index of the target if it is contained in the array, and `-1`
otherwise. You should be able to solve it in one line of code.

Run tests by typing `mocha test/search-specs.js`.

Once the linear search is passing, fill out `binarySearch` which should work
the same way: returns the index of the target if it is contained in the array,
and `-1` otherwise.

```js
binarySearch([2,4,6,8], 6);  // 2
binarySearch([2,4,6,8], 10);  // -1
```

The key difference between the linear and binary searches is in the
performance tests. You should be able to search through an array with 1
million items roughly 1000 times per second with a linear search, and 500000
times per second with binary search.

(Specs will pass with 500 linear and 100000 binary searches so don't worry if
your computer is slow.)

Be sure to follow the pseudocode provided.

**BONUS** Time and plot the performance of linear vs. binary search on a
Google Sheet.


[starter]: https://github.com/appacademy-starters/practice-binary-search
