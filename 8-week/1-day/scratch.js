// class Test {
//     testFunc() {
//       console.log(this);
//       console.log(`this is equal to test1: ${this === test1}`);
//     }
//   }
  
//   const test1 = new Test();
// // //   // Calling the method on the instance
//   test1.testFunc(); // true

//   let arr = []
//   let myPush = arr.push

//   console.log(myPush('something'))
  
// //   Calling the method outside the class
//   const test1Func = test1.testFunc;
//   console.log(test1Func,"Line 15"); // 
//   test1Func(); // 
  
//   // Calling the method as a callback
//   setTimeout(test1Func, 1000); //  
//   const arr = ["test",  "array"]
//   arr.map(test1.testFunc) // 
  
//   // Using this in Function Declaration Syntax
//   function someFunc() {
//     console.log(this);
//   }
//   someFunc(); // 

class Cat {
  purr() {
    console.log("meow");
  }

  purrMore() {
    console.log(this)
    this.purr();
  }
}
let cat = new Cat();

console.log(global.setTimeout(() => {
    cat.purrMore()
}, 2000));