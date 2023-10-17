/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.

Examples:

sentenceMaker('Hello', 'World'); // 'Hello World!'
sentenceMaker('I', 'love', 'coding'); // 'I love coding!'
sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'); // 'The quick brown fox jumps over the lazy dog!'
***********************************************************************/

// Your code here
// const sentenceMaker = (...words) => words.join(' ') + '!'
const sentenceMaker = (...words) => {
	let sentence = ''
	for(let i = 0; i < words.length; i++){
		let ele = words[i]
		if(i === words.length - 1){
			sentence += ele
		} else {
			sentence += ele + ' '
		}
	}
	return sentence + '!'
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = sentenceMaker;
} catch (e) {
	module.exports = null;
}