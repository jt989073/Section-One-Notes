// let age = 10;
// let numberOfFingers = age;
// age = numberOfFingers + 1;
// console.log(age, numberOfFingers);

// let biff = {
//     type: 'dog',
//     age: 10,
// };

// let buster = biff;
// buster.age = 0;
// console.log(biff, buster);

/* 
Given a sentence string, sentence, write a function that returns the most
common character within the sentence.
Be sure to exclude spaces when counting
characters.

create a variable that splits our array into single words join those back to a string without the spaces split that back into single letters
create counter object
loop over our string
grab each letter
check if that letter is not a key in our object
    create that key value pair with a key of the letter and a value of one
if it is in the object
    increment our value at that key

create a highestVal
create a highestKey 
loop over our object
    grab each value
    check if our value is higher than our highestVal
        reassign our highestVal and our highestKey

return highestKey
*/


// const sentence = "What is the most common character in this sentence";
const sentence = 'aaaabbbbccd'

const mostCommonChar = sentence => {
    // Write your solution here.
	let letterStr = sentence.split(' ').join('')
    let counterObj = {}
    for(let i = 0; i < letterStr.length; i++){
        let letter = letterStr[i]
        if(!(letter in counterObj)){
            counterObj[letter] = 1
        } else {
            counterObj[letter] += 1
        }
    }

    let highestVal = -Infinity
    let highestKey
    for(let key in counterObj){
        let val = counterObj[key]
        if(val > highestVal){
            highestVal = val
            highestKey = key
        } else if(val === highestVal){
            if(key < highestKey){
                highestKey = key
            }
        }
    }
    return highestKey
}

console.log(mostCommonChar(sentence));           //  "t"
console.log('a' > 'b')