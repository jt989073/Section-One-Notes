// let myFunc = () => 'hello world'

// console.log(myFunc)

// function createCounter() {
//     let count = 0;
  
//     return function myCounter() {
//       count++;
//       return count;
//     };
//   }
  
//   let counter = createCounter(); // set count to 0 return value of createCounter is the myCounter function
// //   console.log(counter)

//   console.log(counter()); // => 1 count is one, we don't reseet count because we dont invoke createCounter again
//   console.log(counter()); // => 2
//   console.log(counter()); // => 3
//   console.log(counter()); // => 4
  
//   //we cannot reach the count variable!
//   console.log(counter.count); // undefined
//   let counter2 = createCounter();
//   console.log(counter2()); // => 1


const factory = function (voiceChip) {
    console.log("Booting up factory...");
    console.log("Creating a new empty array...");
    let names = [];
    console.log("Returning a new robot that says " + voiceChip + "...");
    return function robot(name) {
      console.log("Booting up " + voiceChip + " robot...");
      console.log("Adding " + name + " to names...");
      names.push(name);
      console.log("Returning the correct phrase...");
      return voiceChip + " " + names.join(" and ");
    };
  };
  
  const hiBot = factory("Hello");
  console.log("---Done---");
  const byeBot = factory("Goodbye");
  console.log("---Done---");
  
  console.log("This is the return of hiBot: ", hiBot); // function
  console.log("---Done---");
  console.log("This is the return of byeBot: ", byeBot); // function
  console.log("---Done---");
  
  console.log(hiBot("James"));
  console.log("---Done---");
  console.log(hiBot("Gabe"));
  console.log("---Done---");
  
  console.log(byeBot("Gabe"));
  console.log("---Done---");
  console.log(byeBot("James"));
  console.log("---Done---");