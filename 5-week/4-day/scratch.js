/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]

set a newArray as a default param
loop over our array
    check if each element is an array
        push our recursive call into our newArr
    else
        push the element
return our newArr
***********************************************************************/
// const flatten = (arr, newArr = []) => {
// //   let newArr = [];
//   // for(let i = 0; i < arr.length; i++){
//   //     let ele = arr[i]
//   //     if(Array.isArray(ele)){
//   //         newArr.push(...flatten(ele))
//   //     } else {
//   //         newArr.push(ele)
//   //     }
//   // }
// //   arr.forEach((ele) => {
// //     if (Array.isArray(ele)) {
// //       newArr.push(...flatten(ele));
// //     } else {
// //       newArr.push(ele);
// //     }
// //   });
// //   return newArr;

// // NIC AND JAYCE SOLUTION
// // if (arr.length === 0) {
// //     return []
// //   }
// //   if (Array.isArray(arr[0])){
// //     return [...flatten(arr[0])]
// //   }
// //   return [arr[0], ...flatten(arr.slice(1))]

// if (Array.isArray(arr) && arr.length === 0) {
//     return []
//   }

//   if (arr.length === 1) {
//     return newArr.concat(arr)
//   } else if (!Array.isArray(arr)) {
//     return newArr.concat(arr)
//   }
//   newArr.push(arr[0])
//   let trans = arr[1]
//   return flatten(trans, newArr)
// };

// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]


/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false

base case - if length of our array is less than 2 return false
recursive step - make array smaller everytime ie maybe slice or something
calling our function againn
***********************************************************************/

// const addToTwelve = arr => {
//     if(arr.length < 2) return false
//     if(arr[0] + arr[1] === 12) return true
//     console.log(arr)
//     return addToTwelve(arr.slice(1))
// }

// console.log((addToTwelve([4, 3, 12, 1, 11, 4, 7, 6]))); // true