/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

base case when our array is empty
recursive step - grab everything in the array other than the element we are adding
recursive case is passing the sliced array to our function
***********************************************************************/

function sumArray(arr) {
  // Your code here
  if(arr.length === 0) return 0

  let restOfArr = arr.slice(1)
  debugger
  return arr[0] + sumArray(restOfArr)
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}