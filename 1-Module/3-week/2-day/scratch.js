// function catBuilder(name, color, toys) {
//   // your code here...
//   let obj = {
//     name: name,
//     color: color,
//     toys: toys,
//   };
//   return obj;
// }

// console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

// console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }


// let obj = {
//   name: "James",
//   age: 28,
//   game: {
//     name: "Rocket League",
//     hours: 135,
//     rank: "Platinum",
//     cars: [
//       "Octane", 
//       "Venom", 
//       "X-Devil",
//       "Breakout",
//       ] 
//   }
// }

//How would I print my name from the object?
// console.log(obj.name)
//How would I add my location, Pampa?
// obj.location = 'Pampa'
//How would I change my age to 32000?
// console.log(obj)
// obj.age = 32000
//How would I add "Triton" to the cars array?
// obj.game.cars.push('triton')
// console.log(obj.game.cars)


// console.log(obj)

// let obj = {
//   first: 'a',
//   second: 'b',
//   third: 'c'
// }

// console.log(obj.first, obj['first']) //
// console.log(obj.first, obj[first]) //

// let someVariable = "firstName";
// let some = "second";
// let variable = "Name";
// let time = "FrEQUENcY";

// let obj = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   frequency: "everyday",
// };

// console.log(obj[someVariable]); // 'Oscar' // same thing as saying obj['firstName']
// console.log(obj[some + variable]); // Mayer
// console.log(obj[time.toLowerCase()]); // 'everyday'



// if(obj['name'] !== undefined) console.log(obj.name)
// console.log(obj['something'])
// obj['something'] = 'something'
// console.log(obj['something'])
// let age = 'age'
// if(age in obj) console.log(obj.age)
// let myObj = {
//   name: "James",
//   age: 28,
//   game: {
//     name: "Rocket League",
//     hours: 135,
//     rank: "Platinum",
//     cars: [
//       "Octane", 
//       "Venom", 
//       "X-Devil",
//       "Breakout",
//       ] 
//   }
// }
// for(let key in myObj){
//   // console.log(key) // prints keys in objects
//   let value = myObj[key] // grabs each value
//   console.log(value)
// }

// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))
// console.log(Object.entries(myObj))


