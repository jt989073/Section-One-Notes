/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
  // Your code here
  let counter = {};
  for (let i = 0; i < string.length; i++) {
	let letter = string[i]
	if(!(letter in counter)){
		counter[letter] = 1
	} else {
		counter[letter] += 1
	}
  }
  return counter
}


function duplicateCharMinCount(string, minCount) {
  // Your code here
  const count = countCharacters(string)
  const keys = Object.keys(count)
//   const newArr = []
//   keys.forEach(key => {
// 	if(count[key] >= minCount) newArr.push(key)
//   })
//   return newArr
	return keys.filter(key => count[key] >= minCount)
}

console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
