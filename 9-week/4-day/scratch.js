// const binaryToDecimal = binaryStr => {
//     const numString = binaryStr.slice(2)
//     const reversed = numString.split('').reverse().join('')
//     let sum = 0
//     for(let i = 0; i < reversed.length; i++){
//         let num = reversed[i]
//         // 2 ^ position of the number starting from the right * the number at  the position
//         sum += Math.pow(2, i) * num
//     }
//     return sum
// }

// const binaryString = '0b11001010'
// console.log(binaryToDecimal(binaryString))
// const letterVals = {
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15
// }

// const binaryToDecimal = binaryStr => {
//     const numString = binaryStr.slice(2)
//     const reversed = numString.split('').reverse().join('')
//     let sum = 0
//     for(let i = 0; i < reversed.length; i++){

//         let char = reversed[i]
//         if(letterVals[char]){
//             sum += Math.pow(16, i) * letterVals[char]
//         } else {
//             sum += Math.pow(16, i) * char
//         }
//     }
//     return sum
// }

// const binaryString = '0xF23C'
// console.log(binaryToDecimal(binaryString))

// console.log(String.fromCharCode(65)) 
// console.log(String.fromCharCode('0x41')) 

// const someHex = '0x2B'
// console.log(String.fromCharCode(someHex))

// const str = 'ABC';
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(1));

// Convert Hexadecimal to Base10 & back`
let hexNum = parseInt('0xa1', 16);      // 161
console.log(hexNum)
let hexStr = Number(hexNum).toString(16);  // 'a1'


// Convert Binary to Base10 & back`
let binNum = parseInt('10110', 2);      // 22
let binStr = Number(binNum).toString(2);   // '10110'