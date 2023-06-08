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

// let hasE = function(word){
//     if(!word.toLowerCase().includes('e')){
//         return true
//     }
//     return false
// }

// let looper = function(arr){
//     let resArr = []
//     for(let i = 0; i < arr.length; i++){
//         let word = arr[i]
//         if(hasE(word)){
//             resArr.push(word)
//         }
//     }
//     return resArr
// }

// let removeEWords = function(sentence){
//     let strArr  = sentence.split(' ')
//     let finalArr = looper(strArr)
//     return finalArr.join(' ')
// }




// console.log(removeEWords("What time is it everyone?")); // 'What is it'
// console.log(removeEWords("Enter the building")); // 'building'

// let uncompress = function(str){
// 	let newStr = ''
//     for(let i = 0; i < str.length; i+=2){
//     	let letter = str[i]
//         let num = str[i + 1]
//         for(let j = 0; j < num; j++){
//         	newStr += letter
//         }
//     }
    
//     return newStr
// }




// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'
