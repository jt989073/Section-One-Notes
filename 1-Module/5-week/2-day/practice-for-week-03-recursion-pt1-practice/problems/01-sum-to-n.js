/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null

base case - n === 0
recursive case - the addition of our num + our function call
recursive step - n - 1
***********************************************************************/


function sumToN(n) {
  // Your code here
  debugger
  if(n === 0) return 0
  let res = n + sumToN(n - 1)
  debugger
  return res
}

console.log(sumToN(5)) // returns 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}