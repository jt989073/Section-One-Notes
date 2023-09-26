// const callbackHell = () => {
//     setTimeout(() => {
//       console.log("It's been 1 seconds");
//       setTimeout(() => {
//         console.log("It's been 2 seconds");
//         setTimeout(() => {
//           console.log("It's been 5 seconds");
//         }, 3000);
//       }, 1000);
//     }, 1000);
//   };
  
//   callbackHell();

// const wait = (seconds) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(seconds);
//       }, seconds * 1000);
//     });
//   };
  
// const waited = wait(1)
//     .then((sec) => {
//         console.log("It's been 1 second")
//     })
//     .then(() => wait(1))
//     .then(() => console.log("It's been 2 seconds"))
//     .then(() => wait(3))
//     .then(() => console.log("It's been 5 seconds"));


// const add5AfterPause = (num) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(num + 5);
//       }, 1000);
//     });
//   };
//   add5AfterPause(0)
//     .then((sum) => console.log(sum)); // 5
//   add5AfterPause(0)
//     .then((nextNum) => add5AfterPause(nextNum))
//     .then((sum) => console.log(sum)); // 10

// add5AfterPause(0)
//   // returns 5
//   .then((nextNum) => add5AfterPause(nextNum))
//   // nextNum = 5, returns 10
//   .then((sum) => console.log(sum))
//   // sum = 10, console.log() doesn't return anything (undefined)
//   .then((anotherNum) => add5AfterPause(anotherNum))
//   // anotherNum = undefined, returns NaN (undefined + 5 = NaN)
//   .then((thisWontWork) => console.log(thisWontWork)); // NaN


const add5AfterPause = (num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        //! Comment out one of these to compare
        resolve(num + 5);
        // this prints because resolve does not end function execution
        console.log('After resolve');
  
        //! Comment out one of these to compare
        // this would not pass 100 to our .then()
        return 100;
      }, 1000);
    });
  };
  
  add5AfterPause(0) // After resolve
    .then((nextNum) => add5AfterPause(nextNum)) // After resolve
    .then((sum) => console.log(sum)); // 10