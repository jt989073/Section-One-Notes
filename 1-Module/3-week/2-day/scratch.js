// let obj = {
//   name: "James",
//   age: 28,
//   game: {
//     name: "Rocket League",
//     hours: 335,
//     rank: "Platinum",
//     cars: ["Octane", "Venom", "X-Devil", "Breakout"],
//   },
// };

//How would I print my name from the object?
//   console.log(obj.name)
//   console.log(obj['name'])
//How would I add my location, Pampa?
//   console.log(obj)
//   obj.location = 'Pampa'
//   console.log(obj)
//How would I change my age to 32000?
//   obj.age = 3200
//   console.log(obj)

//How would I add "Triton" to the cars array?
// obj.game.cars.push("Triton");
// console.log(obj);

// let obj = {
//     first: 'a',
//     second: 'b',
//     third: 'c'
//   }
  
//   console.log(obj.first, obj['first']) // 'a'

// let someVariable = "firstName";
// let some = "second";
// let variable = "Name";
// let time = "FrEQUENcY";

// let obj = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   frequency: "everyday",
// };

// console.log(obj[someVariable]); // 'Oscar' same thing as doing obj['firstName']
// console.log(obj[some + variable])
// console.log(obj[time.toLowerCase()])



// if(obj['name'] !== undefined) console.log(obj.name)
// if(obj.name !== undefined) console.log(obj.name)
// let banana = 'age'

// if(!('nameasdf' in obj)) console.log(obj.name)
// if(banana in obj) console.log(obj[banana])

// let myObj = {
//     name: "James",
//     age: 28,
//     game: {
//       name: "Rocket League",
//       hours: 335,
//       rank: "Platinum",
//       cars: ["Octane", "Venom", "X-Devil", "Breakout"],
//     },
//   };


// for(let key in myObj){
//     console.log(key)
//     console.log(myObj[key])
// }
// let keys = Object.keys(myObj)
// for(let i = 0; i < keys.length; i++){
//     let val = myObj[keys[i]]
//     console.log(val)
// }

// let vals = Object.values(myObj)
// console.log(vals)

// let entries = Object.entries(myObj)

// for(let i = 0; i < entries.length; i++){
//     let subArr = entries[i]
//     let key = subArr[0]
//     let val = subArr[1]
//     console.log(key, '+++', val)
// }

let double = num => num * 2;

let doubleTwo = num => {
    return num * 2
}

console.log(double(6))
console.log(doubleTwo(6))