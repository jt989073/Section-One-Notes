const wait = (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userData);
      }, userData * 1000);
    });
  };

const myFunctionCanDoSomething = async (seconds) => {
    const res = await wait(seconds)
    console.log(res)
    return res
}

myFunctionCanDoSomething(2)


// const myFunc = async () => {
//     const res = await myFunctionCanDoSomething(2)
//     // console.log(res)
//     return res
// }

// console.log(myFunc())

//   console.log(wait(1))
// .then((userData) => console.log("It's been 1 second", userData))
// .then(() => wait(1))
// .then(() => console.log("It's been 2 seconds"))
// .then(() => wait(3))
// .then(() => console.log("It's been 5 seconds"));

// const add5AfterPause = (num) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num + 5);
//     }, 1000);
//   });
// };

// // add5AfterPause(0).then((sum) => console.log(sum)); // 5


// // add5AfterPause(0)
// //   .then((nextNum) => add5AfterPause(nextNum))
// //   .then((sum) => console.log(sum)); // 10

// add5AfterPause(0)
//   // returns 5
//   .then((nextNum) => add5AfterPause(nextNum))
//   // nextNum = 5, returns 10
//   .then((sum) => console.log(sum))
//   .then((anotherNum) => add5AfterPause(anotherNum))
//     .then((thisWontWork) => console.log(thisWontWork)); // NaN


// const add5AfterPause = (num) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         //! Comment out one of these to compare
//         resolve(num + 5);z
//         // this prints because resolve does not end function execution
//         console.log('After resolve');
  
//         //! Comment out one of these to compare
//         // this would not pass 100 to our .then()
//         // return 100;
//       }, 1000);
//     });
//   };
  
//   console.log(add5AfterPause(0)) // After resolve
    // .then((nextNum) => add5AfterPause(nextNum)) // After resolve
    // .then((sum) => console.log(sum)); // 10