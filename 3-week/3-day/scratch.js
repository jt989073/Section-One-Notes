// let age = 10;
// let numberOfFingers = age;
// age = numberOfFingers + 1;
// console.log(age, numberOfFingers);


let biff = {
    type: 'dog',
    age: 10,
};

let buster = biff;
buster.age = 0;

console.log(biff, buster);