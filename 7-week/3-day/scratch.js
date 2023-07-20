// const arr = new Array(1,2,3,4,5)
// const arr2 = [1,2,3,4,5]
// arr.forEach(ele => console.log(ele))
// console.log(arr)

// Define a class with the class keyword followed by the name with the first
// letter capital and the rest of the words camel case
// class Taco {
//   // constructor is invoked when you create a new class such as:
//   // new Taco("chicken", ["sour cream", "cheese"])
//   constructor(meat, toppings = [], tortillaType) {
//     // define any instance variables or logic that needs to be run when an
//     // instance of the class is created
//     this.meat = meat;
//     this.toppings = toppings;
//     this.tortillaType = (tortillaType || 'corn');
//   }

//   assemble() {
//     return `These are some delicious ${this.meat} tacos on a ${
//       this.tortillaType
//     } tortilla with all the toppings ${this.toppings.join(", ")}.`;
//   }

//   changeTortilla(type){
//     this.tortillaType = type
//   }
// }

// const chickenTaco = new Taco("chicken", ["onions", "cilantro", "lime"], );
// const barbacoaTaco = new Taco("barbacoa", ["onions", "cilantro", "lime"]);
// console.log(chickenTaco.assemble())
// chickenTaco.changeTortilla('flour')
// console.log(chickenTaco.assemble())

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
  constructor(name) {
    super(name, "strings");
    this.sound = "strum";
  }

  strumGuitar() {
    console.log(this.sound);
    console.log("this is from the guitar class");
  }
}

class Trumpet extends Instrument {
  constructor(name) {
    super(name, "brass");
    this.sound = "TOOT";
  }
  playTrumpet() {
    console.log(this.sound);
  }
}

// const myGuitar = new Guitar("fender");
// const myTrumpet = new Trumpet("some trumpet");
// myTrumpet.playTrumpet();
// myTrumpet.play();
// myTrumpet.strumGuitar();
// console.log(myGuitar)
// myGuitar.strumGuitar()
// myGuitar.play()

const arr = [1,2,3,4]
arr.something = (something) => {console.log(something)}

arr.something('something else')

