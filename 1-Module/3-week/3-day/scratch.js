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
common character within the sentence. If there are multiple characters that
appear the most, return the lexicographically smallest one 
(e.g. if 'a' and 'b' are both the most common, return 'a'
because it is closest to the beginning of the alphabet). 
Be sure to exclude spaces when counting
characters.

split our sentence on the space and then join our sentence with no space and then split our long word into an array of letters
create a counterObj 
loop over our letterArr
    grab each letter
    check if our current letter is not a key in our obj
        create a key val pair of that letter and initiate a value of 1
    if it is in our obj
        increment our value

    create a highest val variable to keep track of which value is the highest
    loop over my obj and check which letter is the highest
        if my current Val is greater than my highest val
            reassign what my highest val is to be the key of that value

    return our highest val
*/

// const sentence = "What is the most common character in this sentence";
 

// const mostCommonChar = sentence => {
//     // Write your solution here.
//     let letterArr = sentence.split(' ').join('').split('')
//     let counterObj = {}
//     for(let i = 0; i < letterArr.length; i++){
//         let letter = letterArr[i]
//         if(!(letter in counterObj)){
//             counterObj[letter] = 1
//         } else {
//             counterObj[letter] += 1
//         }

//     }

//     let highestVal = -Infinity
//     let highestKey
//     for(let key in counterObj){
//         let val = counterObj[key]
//         if(val > highestVal){
//             highestVal = val
//             highestKey = key
//         }
//     }

//     return highestKey
	
// }

// console.log(mostCommonChar(sentence));           //  "t"


/* 
Given the nested array of objects below, write a function, getSecondObjValues,
that prints the value of the second object within each nested sub-array. If there is no second object, print null.
*/


const nestedArr = [
    [
        { a: 1 },
        { b: 2 }
    ],
    [
        { c: 3 },
        { d: 4 },
        { e: 5 }
    ],
    [
        { f: 6 }
    ],
    [
        { g: 7 },
        { h: 8 }
    ]
];

const getSecondObjValues = arr => {
    for(let i = 0; i < arr.length; i++){
        let subArr = arr[i]
       if(subArr.length >= 2){
        for(let key in subArr[1]){
            let obj = subArr[1]
            console.log(obj[key])
        }
       } else {
        console.log(null)
       }

    }
}

getSecondObjValues(nestedArr);               // 2 4 null 8
