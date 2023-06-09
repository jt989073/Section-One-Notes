// let s = 'This is  a string';
// console.log(typeof s);    // 'string'
// // console.log(s typeof)
// if(typeof s !== 'string') console.log(s)

// let n = 6.28;
// console.log(typeof n);    // 'number'

// let sum = function (a, b) {
//   return a + b;
// }
// console.log(typeof sum);  // 'function'

// let a = [1, 2, 3];
// console.log(typeof a);  // 'object'


// let a = [1, 2, 3];
// console.log(Array.isArray(a));  // true

// if(Array.isArray(a)) console.log('hey this is an array')

// let n = 6.28;
// console.log(Array.isArray(n));  // false

// let f = function () {}
// console.log(Array.isArray(f));  // false


// Useless code.
// console.log(typeof null);  // 'object'


// let a = [];
// let x = null;


// if (a === null) {
//   console.log('a is null');
// } else if (x === null) {
//   console.log('x is null');
// }
// let value

// console.log(value)
// // // Test if a value is undefined
// if (value === undefined) {
//     // do a thing
//     console.log('something')
//   }

// console.log(typeof undefined)
//   // You can also do it this way, but
//   // it is considered passé.
//   if (typeof value === 'undefined') {
//     // do a thing
//     console.log('something')
//   }



// ---------------------------TODAYS PROBLEMS ----------------------------------

let rotate = function(array, num) {
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            let el = array.pop();
            array.unshift(el);
        }
    } else {
        for (let i = 0; i < -(num); i++) {
            let el = array.shift();
            array.push(el);
        }
    }
};

let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr);

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals);


let additionMutator = function(numbers, n) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] += n;
    }
}


let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]

// Your code here
/* 
	write a function alternatingWords that takes in an array
    loop over that array
    check if the current index is even
    	we will reassign that index to be the word.toUppercase
    else
    	we will reassign that index to be the word.toLowerCase
*/

let alternatingWords = function(arr){
	for(let i = 0; i < arr.length; i++){
    	if(i % 2 === 0){
        	arr[i] = arr[i].toUpperCase()
        } else {
        	arr[i] = arr[i].toLowerCase()
        }
    }
  return arr
}


let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

let repeatingTranslate = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length < 3) {
            newWords.push(word);
        } else {
            newWords.push(translateWord(word));
        }
    }
    return newWords.join(' ');
};


let translateWord = function(word) {
    let vowels = 'aeiou';
    let lastChar = word[word.length - 1];
    if (vowels.includes(lastChar)) {
        return word + word;
    }

    let i = word.length - 1;
    while (i >= 0) {
        if (vowels.includes(word[i])) {
            return word + word.slice(i);
        }
        i--;
    }
};

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"


/* 
write a function max in matrix takes in a 2 d array
create a largestNum variable
loop over our outter array
grab each sub Array
loop over sub array
grab each number
compare that number to the largest and if its higher
	reassign largestNum
    
return largestNum
*/ 

function maxInMatrix(matrix) {
    // your code here...
    // let largestNum = matrix[0][0]
    let largestNum = -Infinity
    for(let i = 0; i < matrix.length; i++){
        let subArr = matrix[i]
         for(let j = 0; j < subArr.length; j++){
          let number = subArr[j]
          if(number < largestNum){
              largestNum = number
          }
      }
    }
    return largestNum
  }
  
  
  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]
  
  console.log(maxInMatrix(matrix)); // 72
  


function maxColumn(matrix) {
    // Get the height (number of rows) and width (number of columns) of the matrix
    const height = matrix.length;
    const width = matrix[0].length;
  
    // Create an empty array to store the maximum values for each column
    const maxColumns = [];
  
    // Iterate over each column of the matrix
    for (let col = 0; col < width; col++) {
      // Initialize the maximum value for the current column as the value in the first row
      let colMax = matrix[0][col];
  
      // Iterate over each row of the matrix starting from the second row
      for (let row = 1; row < height; row++) {
        // Check if the value in the current row and column is greater than the current maximum
        if (matrix[row][col] > colMax) {
          // Update the maximum value if a larger value is found
          colMax = matrix[row][col];
        }
      }
  
      // Add the maximum value for the current column to the maxColumns array
      maxColumns.push(colMax);
    }
  
    // Return the array containing the maximum values for each column
    return maxColumns;
  }

  
let matrix = [[ 5,  9, 21],
              [ 9, 19,  6],
              [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]


let yeller = function(words) {
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        newWords.push(word.toUpperCase() + '!');
    }

    return newWords;
};

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]


// Your code here
/* 
write a function chooseyEndings that accepts an array of words and a suffix string
create a new array variable
check if what is passed in is not an array
	return new array
loop over our array and grab each word
check if the word ends with the suffix
	if it  does we will push that word into our new array


return new array
*/ 

let chooseyEndings = function(arr, suffix){
	let newArr = []
    if(!Array.isArray(arr)){
    	return newArr
    }
  for(let i = 0; i < arr.length; i++){
  	let word = arr[i]
    if(word.endsWith(suffix)){
    	newArr.push(word)
    }
  }
  return newArr
}


console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
[ ]

let commonFactors = function(num1, num2) {
    let factors = [];
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            factors.push(i);
        }
    }
    return factors;
};

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]


// your code here
// let hasDoubleLetter = function(str){
// 	if(typeof str !== 'string') return null
  
//   	for(let i = 0; i < str.length; i++){
//       	let char = str[i]
//     	if(char === str[i + 1]) return true
//     }
//   return false
// }






// console.log(hasDoubleLetter('deer')); // true
// console.log(hasDoubleLetter('boot camp')); // true
// console.log(hasDoubleLetter('toggle')); // true
// console.log(hasDoubleLetter('taco')); // false
// console.log(hasDoubleLetter('jumper')); // false
// console.log(hasDoubleLetter(18)); // null
// console.log(hasDoubleLetter(['array'])); // null