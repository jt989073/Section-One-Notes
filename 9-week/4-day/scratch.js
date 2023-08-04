const binaryToDecimal = binaryStr => {
    const rawBinary = binaryStr.slice(2)
    let reversed = rawBinary.split('').reverse().join('')
    let sum = 0
    for(let i = 0; i < reversed.length; i++){
        const num = Number(reversed[i])
        // 2 ^ position of the number starting from the right * the number at the position
        sum += Math.pow(2, i) * num
    }
    return sum
}

const numString = '0b11001010'
console.log(binaryToDecimal(numString))


const hexLetters = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
}

const hexToDecimal = hexStr => {
    const rawHex = hexStr.slice(2)
    const reversed = rawHex.split('').reverse().join('')
    let sum = 0
    for(let i = 0; i < reversed.length; i++){
        const char = reversed[i]
        
        if(hexLetters[char.toUpperCase()]){
            sum += Math.pow(16, i) * hexLetters[char.toUpperCase()]
            console.log(char.charCodeAt(), 'line 35')
        } else{
            sum += Math.pow(16, i) * Number(char)
        }
    }
    return sum
}


// const hexString = '0xA'
// const decimal = hexToDecimal(hexString)
// console.log()

// // const num = 

// console.log(String.fromCharCode(65))


// let binNum = parseInt('10110', 2);      // 22
// let binStr = Number(binNum).toString(2);   // '10110'
// console.log(binNum, binStr)



console.log(String.fromCharCode(65));
console.log(String.fromCharCode(66))
console.log(String.fromCharCode(67))


const str = 'ABC';
console.log(str.charCodeAt(0));

const str1 = '0x41'
const str2 = '0x42'
const str3 = '0x43'
const str4 = '0x44'
const str5 = '0x45'
console.log(String.fromCharCode(str1))
console.log(String.fromCharCode(str2))
console.log(String.fromCharCode(str3))
console.log(String.fromCharCode(str4))
console.log(String.fromCharCode(str5))

