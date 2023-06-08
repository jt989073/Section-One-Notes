// first thing we are going to talk about is helper functiojns
// let removeEWords = function(sentence) {
//     let words = sentence.split(' ');

//     let filtered = [];
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (!word.toLowerCase().includes('e')) {
//             filtered.push(word);
//         }
//     }

//     return filtered.join(' ');
// };

// let hasE = function (word) {
//   if (!word.toLowerCase().includes("e")) {
//     return true
//   }
//   return false
// };

// let looper = function(arr){
//     let filtered = [];
//         for (let i = 0; i < arr.length; i++) {
//             let word = arr[i];
//             if (hasE(word)) {
//                 filtered.push(word);
//             }
//         }
//     return filtered
// }

// let removeEWords = function(sentence){
//     let strArr = sentence.split(' ')
//     let finalArr = looper(strArr)
//     return finalArr.join(' ')
// }

// console.log(removeEWords("What time is it everyone?")); // 'What is it'
// console.log(removeEWords("Enter the building")); // 'building'

