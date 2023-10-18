/* 
I want to keep track of ALL instances of iceCream
  Create a Static variable that will hold all of the iceCream Instances
  Add each instance to that variable at construction time
I want to see how much money I've made on ALL iceCream
  Create a Static method that will iterate over the static variable
  Return the sum of all the prices 
*/
// class IceCream {
//     constructor(flavor, toppings) {
//       // this = {};
//       this.flavor = flavor;
//       // {flavor: "Vanilla"};
//       this.toppings = toppings || [];
//       this.price = this.toppings.length * 0.5 + 1.5;
//       //{ flavor: 'Chocolate',toppings: [ 'peanut butter', 'caramel', 'Oreo' ],price: };
//       IceCream.iceCreamTracker.push(this)
//     }
  
//     static iceCreamTracker = [];
  
//     addToppings(...toppings) {
//       this.toppings.push(...toppings);
//       this.price = 1.5 + this.toppings.length * 0.5;
//       return this.price
//     }
  
//     static getPrices() { 
//       let sum = 0;
//       let arr = IceCream.iceCreamTracker;
//       for (let i = 0; i < arr.length; i++) { 
//           let obj = arr[i];
//         sum += obj.price;
//       }
//       return sum;
//     }
//   }
  
//   let vanilla = new IceCream('Vanilla', ['sprinkles', 'strawberry']);
//   let chocolate = new IceCream('Chocolate', ['peanut butter', 'caramel', 'Oreo']);
//   let orange = new IceCream('Orange Sherbert')
//   console.log(IceCream.getPrices()); // Should return 7
//   console.log(vanilla.addToppings('reeses', 'chocolat sauce'))

// class Calculator {
//   add(x, y) {
//     return x + y;
//   }

//   // Simulating method overloading for different parameter types
//   add(x, y, z) {
//     return x + y + z;
//   }
// }

// const calc = new Calculator();
// console.log(calc.add(2, 3));        // Output: 5
// console.log(calc.add(2, 3, 4));     // Output: 9


class Shape {
    calculateArea() {
      return 0; // Base class implementation, overridden by subclasses
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    // This also overrides both classes above
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  console.log(circle.calculateArea());      // Output: 78.53981633974483
  console.log(rectangle.calculateArea());   // Output: 24