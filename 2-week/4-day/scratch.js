let s = 'This is a string';
console.log(typeof s);    // 'string'

let n = 6.28;
console.log(typeof n);    // 'number'

let sum = function (a, b) {
  return a + b;
}
console.log(typeof sum);  // 'function'

// let a = [1, 2, 3];
// console.log(typeof a);  // 'object'


// let a = [1, 2, 3];
// Array.isArray(a);  // true

// let n = 6.28;
// Array.isArray(n);  // false

// let f = function () {}
// Array.isArray(f);  // false


// // Useless code.
// console.log(typeof null);  // 'object'


// let a = [];
// let x = null;

// if (a === null) {
//   console.log('a is null');
// } else if (x === null) {
//   console.log('x is null');
// }


// // Test if a value is undefined
// if (value === undefined) {
//     // do a thing
//   }
  
//   // You can also do it this way, but
//   // it is considered passé.
//   if (typeof value === 'undefined') {
//     // do a thing
//   }