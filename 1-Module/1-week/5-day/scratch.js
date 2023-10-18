// function declaration syntax
// function someFunc(){}

// // function expression syntax
// let myFunc = function(){
// // some logic
// }

// let name = 'Alvin'
// let age = 1000;
// let getAvg = function(num1, num2) {
//     return (num1 + num2)/2
// };

// console.log(name, age, getAvg(4, 2)) // "Alvin", 1000, 3

// const arr = [getAvg, name, age];

// console.log(arr[0](6,4)); // 5

// let arr = ["a", "b", "c"];
// console.log(arr)

// arr[1] = "x";

// console.log(arr) // ["a", "x", "c"];

// let str = "abc"

// // str[1] = 'x';
// str = str + 'd'

// console.log(str) // 'abc';

// let animals = ["ant", "bear", "dog"];

// appends "cat" to animals && returns length
// let animalLength = animals.push("cat");
// animals.push('something')

// console.log(animals); // ["ant", "bear", "dog", "cat"]
// console.log(animalLength); // 4

// let popped = animals.pop()

// console.log(popped)
// console.log(animals)

// let unshiftLen = animals.unshift('elephant')
// console.log(animals)
// console.log(unshiftLen)
// let animals = ["ant", "bear", "dog"];
// let shifted = animals.shift();

// console.log(animals);
// console.log(shifted);


// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 5; j++) {
//       console.log(i, j);
//     }
//   }

let arr = ['a', 'b', 'c', 'd']

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        console.log(arr[i], i, arr[j], j)
    }
}