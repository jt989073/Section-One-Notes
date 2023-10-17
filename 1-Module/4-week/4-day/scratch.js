// let myFunc = () => console.log('hello world')

// // console.log(myFunc)

// function createCounter() {
//     let count = 0;
  
//     return function() {
//       count++;
//       return count;
//     };
//   }
  
//   let counter = createCounter(); // returns a function


//   console.log(counter)
//   console.log(counter()); // => 1
//   console.log(counter()); // => 2
//   console.log(counter()); // => 3
//   console.log(counter()); // => 4
  
//   //we cannot reach the count variable!
//   counter.count; // undefined
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