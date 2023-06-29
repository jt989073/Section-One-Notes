// Write a recursive function, `range`, that takes a start and an end and returns
// an array of all numbers in that range, exclusive. If the end number is less than
// the start, return an empty array.

// Examples:

const range = (start, end) => {

}

// function range(start, end) {
//     if (end < start){
//       return []
//     }
//     if (start === end){
//       return []
//     }
//     if (start < end){
//       return [start, ...range(start + 1, end)]
//     }
//   }


// console.log(range(1, 5)) // [1, 2, 3, 4]
// range(3, 4); // [3]
// range(7, 6); // []