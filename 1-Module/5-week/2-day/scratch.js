// let firstName = "Doctor";
// let lastName = "Who";

// let arr = ['james']


// let greeting = `Hello, ${firstName} ${lastName}! ${arr[0]} says he loves you.`

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

const rec_sum  = num => {
    debugger
    if(num === 1){ // base case
        return 1
    }
    // recursive case - num !== 1
    //recursive step - num - 1
    debugger
    let result = num + rec_sum(num- 1)
    debugger

    return result
}


console.log(rec_sum(3)) 