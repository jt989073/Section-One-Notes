# __Static Methods__

In JavaScript, static methods are an essential aspect of object-oriented programming (OOP). They belong to the class itself rather than to instances of the class. These methods are associated with the class and can be called directly on the class itself, without the need to create an instance of the class.

One such commonly used static method that we have already been using is Object.keys(), which allows us to retrieve an array containing the enumerable property names of an object. 

# Static Methods in JavaScript
- **Definition**: A static method is defined using the static keyword within the class definition. It is bound to the class itself and not to the instance of the class.

- **Invocation**: Since static methods belong to the class, they are called directly on the class itself, not on instances of the class.

- **Accessing Instance Properties**: Static methods cannot access instance properties or methods directly since they are not bound to any specific instance.


```js
/* 
I want to keep track of ALL instances of iceCream
  Create a Static variable that will hold all of the iceCream Instances
  Add each instance to that variable at construction time
I want to see how much money I've made on ALL iceCream
  Create a Static method that will iterate over the static variable
  Return the sum of all the prices 
*/
class IceCream {
  constructor(flavor, toppings) {
    // this = {};
    this.flavor = flavor;
    // {flavor: "Vanilla"};
    this.toppings = toppings || [];
    this.price = this.toppings.length * 0.5 + 1.5;
    //{ flavor: 'Chocolate',toppings: [ 'peanut butter', 'caramel', 'Oreo' ],price: };
    IceCream.iceCreamTracker.push(this)
  }

  static iceCreamTracker = [];

  addToppings(...toppings) {
    this.toppings.push(...toppings);
    this.price = 1.5 + this.toppings.length * 0.5;
  }

  static getPrices() { 
    let sum = 0;
    let arr = IceCream.iceCreamTracker;
    for (let i = 0; i < arr.length; i++) { 
      let obj = arr[i];
      sum += obj.price;
    }
    return sum;
  }
}

let vanilla = new IceCream('Vanilla', ['sprinkles', 'strawberry']);
let chocolate = new IceCream('Chocolate', ['peanut butter', 'caramel', 'Oreo']);
let orange = new IceCream('Orange Sherbert')
console.log(IceCream.getPrices()); // Should return 7
```



Usage of Static Methods
Utility Functions: Static methods are commonly used for utility functions that are not specific to instances of a class but are related to the class itself.

Helper Methods: They can also serve as helper methods that aid in class-related operations.

Math Library: In the Math library, methods such as Math.sqrt() are static methods, as they don't require an instance of the Math class.



## Types of Polymorphism
- **Compile-Time Polymorphism**: Also known as static polymorphism, this type is resolved during compile-time. It includes method overloading, where multiple methods with the same name but different parameters are defined within the same class.

- **Run-Time Polymorphism**: Also known as dynamic polymorphism, this type is resolved during run-time. It involves method overriding, where a method in a subclass overrides the method with the same name in its superclass.

## Example: Method Overloading (Compile-Time Polymorphism)
Method overloading allows us to define multiple methods with the same name but different parameters within a class. JavaScript doesn't natively support method overloading, but we can simulate it using conditional statements.

```js
class Calculator {
  add(x, y) {
    return x + y;
  }

  // Simulating method overloading for different parameter types
  add(x, y, z) {
    return x + y + z;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));        // Output: 5
console.log(calc.add(2, 3, 4));     // Output: 9
```

# Example: Method Overriding (Run-Time Polymorphism)
 Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.

```js

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
    return Math.PI * this.radius * this.radius;
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
```

