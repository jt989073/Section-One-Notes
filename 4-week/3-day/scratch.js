// let GLOBALVARIABLE = 'some variable'

// let myFunction = function(functionScope){
//     let alsoFunctionScope = "I am also function scoped"
  
//     if(!functionScope){
//       let blockScope = 'I am block scoped'
//     };


//   };
  
//   myFunction("I am function scoped");

// let car = "vroom"; // global scoped



// function makeSounds(dogSound) { // function/local scoped
//   let cow = "moo";

//   if (true) {
//     let turkey = "gobble"; // block scoped

//     for (let i = 0;  i < 2; i++) { // block scoped
//       console.log(car, dogSound, cow, turkey, i);
//     }  
//     return count
//   }
// }
// makeSounds("woof");

// let sumArray = arr => {
//     let sum = 0
//     arr.forEach(ele => sum += ele)
//     return sum
// }

// console.log(sumArray([1,2,3,4]))

// const addFiveNewArr = arr => {
//     const newArr = []
//     arr.forEach(ele => {
//         newArr.push(ele + 5)
//     })
//     return newArr
// }

// console.log(addFiveNewArr([1,2,3,4]))

// const someFunc = (sentence) => {
//     console.log(count) // count is in the temporal dead zone
  
//     let count = 0
//     if(sentence.length){
//         count = sentence.length
//     }
  
//     return count
//   }
  
//   console.log(someFunc('some func sentence'))

var zoo = "panda";

if (true) {
  console.log(zoo);
  let zoo = "lion";
}