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

