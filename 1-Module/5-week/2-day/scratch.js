// let firstName = "Doctor";
// let lastName = "Who";

// const greeting = `Hey ${firstName} ${lastName} nice to meet you!`

// console.log(greeting);

// function foo() {
//     debugger;
//     let res = 2 + bar();
//     debugger;
//     return res
// }

// function bar() {
//     debugger;
//     let res = 6 + baz();
//     debugger;
//     return res
// }

// function baz() {
//     debugger;
//     let res = 3;
//     debugger
//     return res;
// }

// console.log(foo());


/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1

*/

const recSum = num => {
    debugger
    if(num === 1){
        return 1
    }
    
    let res = num + recSum(num - 1)
    return res
}

console.log(recSum(4))