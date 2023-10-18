// class Test {
//     testFunc() {
//       console.log(this);
//       console.log(`this is equal to test1: ${this === test1}`);
//     }
//   }
  
//   const test1 = new Test();
 // Calling the method on the instance
//   test1.testFunc(); // true

// //   Calling the method outside the class
//   const test1Func = test1.testFunc;
//   console.log(test1Func,"Line 15"); // 
//   test1Func(); // 
  
//   // Calling the method as a callback
//   setTimeout(() => {
//     test1.testFunc()
//   }, 1000); //  
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
      console.log(this, 'line 36')
      this.purr();
    }
  }
  let cat = new Cat();

  
global.setTimeout(() => {
    cat.purrMore()
}, 2000) 

//   function hello() {
//     console.log(`Hello ${this.firstName}`);
//   }
  
//   const greeting = new hello();
//   console.log(greeting)