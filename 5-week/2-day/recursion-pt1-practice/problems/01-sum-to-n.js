/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null

when n < 0 return null - edge case 
when n === 1 return n - base case
n - 1 - recursive step
pass recursive step to our function - recursive case
***********************************************************************/


function sumToN(n) {
  // Your code here
  // base case
  debugger
  if(n < 0) return null
  if(n === 0) return n

  // recursive step and case
  debugger
  return n + sumToN(n - 1)
}

console.log(sumToN(5)) // returns 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}