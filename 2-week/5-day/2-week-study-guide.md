# Week 2 Intermediate Functions

## More ARRAYS

### Two Dimensional Array

* Two-dimensional arrays can be defined as arrays within an array.

```Javascript
let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];
```

* Note that indexing the outer twoDimensional array will return an element like usual, it's just that element happens to be another array.

* To gain access to the innermost elements, we simply need to apply another set of indexing brackets!

```Javascript
// get the element in the 0th row, 2nd col:
console.log(twoDimensional[0][2]); // 'c'
```

### Array Methods

* `Array#push`
  * Syntax

    ```js
    arr.push(ele1, ele2) // n amount of elements
    ```

  * Description
    * Adds one or more elements to the _end_ of an array and returns the new\
     length of the array.
    * **mutates the array it is called on**
  * Arguments
    * The element(s) to add to the end of the array.
  * Return value
    * The new length property of the object upon which the method was called.

      ```js
      let animals = ["ant", "bear", "dog"];

      // appends "cat" to animals && returns length
      let animalLength = animals.push("cat");

      console.log(animals); // ["ant", "bear", "dog", "cat"]
      console.log(animalLength); // 4
      ```

* `Array#pop`

  * Syntax

    ```js
    arr.pop()
    ```

  * Description
    * Removes the _last_ element from an array and returns that element. \
    This method changes the length of the array.
    * **mutates the array it is called on**
  * Arguments
    * None
  * Return value
    * The removed element from the array; undefined if the array is empty.

    ```js
    let dogs = ['Fido', 'Rover'];

    //removes Rover from dogs and returns Rover
    let lastDog = dogs.pop();

    console.log(dogs); // ['Fido']
    console.log(lastDog); // 'Rover'
    ```

* `Array#unshift`

  * Syntax

    ```js
    arr.unshift(ele1, ele2) // n amount of elements
    ```

  * Description
    * Adds one or more elements to the _beginning_ of an array and returns the\
     new length of the array.
    * **mutates the array it is called on**
  * Arguments
    * The element(s) to add to the beginning of the array.
  * Return value
    * The new length property of the object upon which the method was called.

    ```js
    let cats = ['Whiskers', 'Garfield']

    // adds Jasper to cats && returns length
    let catsLength = cats.unshift('Jasper');

    console.log(cats); // ['Jasper', 'Whiskers', 'Garfield']
    console.log(catsLength) // 3
    ```

* `Array#shift`

  * Syntax

    ```js
    arr.shift()
    ```

  * Description
    * Removes the _first_ element from an array and returns that element. \
    This method changes the length of the array.
    * **mutates the array it is called on**
  * Arguments
    * None
  * Return value
    * The removed element from the array; undefined if the array is empty.

    ```js
    let cats = ['Paprika', 'Whiskers', 'Garfield'];
    //removes 'Paprika' from cats and returns 'Paprika'
    let firstCat = cats.shift();

    console.log(firstCat); // 'Paprika'
    console.log(cats); // ['Whiskers', 'Garfield']
    ```

* `Array#Slice`

  * Syntax

    ```js
    arr.slice(start)
    ```

  * Description
    * returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array
    * **The original array will not be modified.**
  * Arguments
    * start
        * Zero-based index at which to start changing the array
      * end - optional
        * Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end
  * Return value
    * A new array containing the extracted elements.

    ```Javascript
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // Expected output: Array ["camel", "duck", "elephant"]
    ```

* `Array#Splice`

  * Syntax

    ```js
    arr.splice(start)
    ```

  * Description
    * changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
    * **mutates the array it is called on**
  * Arguments
    * start
        * Zero-based index at which to start changing the array
    * deleteCount - optional
      * An integer indicating the number of elements in the array to remove from start.
    * item1, …, itemN - optional
      * The elements to add to the array, beginning from start.
  * Return value
    * An array containing the deleted elements.
    * If only one element is removed, an array of one element is returned.
    * If no elements are removed, an empty array is returned.
    * An array containing with replacement

    ```Javascript
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // Inserts at index 1
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
    ```

## Function Expression

### First Class Functions

* First Class Functions can be
  * Stored in a variable
  * passed as an argument to a function
  * returned from a function
* Functions are first class objects!

```Javascript
let name = 'Alvin'
let age = 1000;
let getAvg = function(num1, num2) {
    return (num1 + num2)/2
};

console.log(name, age, getAvg(4, 2)) // "Alvin", 1000, 3

const arr = [getAvg, name, age];

console.log(arr[0](6,4)); // 5
```

### Syntax

* variable assignment (name)
* function keyword
* parenthesis with the function's parameter(s)
* code block
* semi-colon

```Javascript
// function declaration syntax
function sayHello1() {
  console.log('hello');
  console.log('bye');
}
// function expression syntax
let sayHello2 = function() {
  console.log('hello');
  console.log('bye');
};
```

## Helper Functions
* Utilizing helper functions in your code makes tasks less complicated to manage and makes your code more DRY (Don't Repeat Yourself).
*  If you are finding that a single function is getting overly complicated, split off into another helper function to keep things tidy