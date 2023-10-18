/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

base case - arr.length === 0 || !arr.length
recursive case - adding our first element to our recursive call of sumArray
recursive step - slice off the first element 
***********************************************************************/

function sumArray(arr) {
  // Your code here
  if(arr.length === 0) return 0
  debugger
  return arr[0] + sumArray(arr.slice(1))
}

sumArray([1, 2, 3]); //  6
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}