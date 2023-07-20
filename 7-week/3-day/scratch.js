// // let arr = new Array(1,2,3,4)
// // console.log(arr)

// // Define a class with the class keyword followed by the name with the first
// // letter capital and the rest of the words camel case
// class Taco {
//     // constructor is invoked when you create a new class such as:
//     // new Taco("chicken", ["sour cream", "cheese"])
//     constructor(meat, toppings = []) {
//       // define any instance variables or logic that needs to be run when an
//       // instance of the class is created
//       this.meat = meat
//       this.toppings = toppings
//       this.tortillaType = 'corn'
//     }
//     // instance method
//     assembleTaco() {
//       return `These are some delicious ${this.meat} tacos on a ${
//         this.tortillaType
//       } tortilla with all the toppings ${this.toppings.join(', ')}.`
//     }

//     changeTortilla(type){
//         this.tortillaType = type
//         return this.tortillaType
//     }

//     addToppings(...toppings){
//         this.toppings.push(...toppings)
//     }

// }

// const chickenTaco = new Taco('chicken', ['onions', 'cilantro', 'lime'])
// console.log(chickenTaco.assembleTaco())
// console.log(chickenTaco.changeTortilla('flour'))
// console.log(chickenTaco.assembleTaco())
// console.log(chickenTaco.addToppings('cotija cheese', 'something else', 'salsa'))
// console.log(chickenTaco.assembleTaco())

class Instrument {
  constructor(name, family) {
    this.name = name;
    this.family = family;
  }

  play() {
    console.log("toot toot toot");
  }
}

class Guitar extends Instrument {
  constructor() {
    Guitar.total += 1;
    super(`Guitar ${Guitar.total}`, "Strings");
    // super()
  }

  static total = 0;

  strumGuitar() {
    console.log("strumming guitar");
  }
}

class Trumpet extends Instrument {
  constructor() {
    Trumpet.total += 1;
    super(`Trumpet ${Trumpet.total}`, "Brass");
  }

  static total = 0;

  releaseSpitValve() {
    console.log("releasing spit valve");
  }
}

const myGuitar = new Guitar();
const myTrumpet = new Trumpet();
myGuitar.strumGuitar();
myGuitar.play();
myTrumpet.releaseSpitValve();
myTrumpet.play();

