/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL


split our sentence into an array
create a new array variable
loop over our array
  grab each word
  loop over our object
    if our word ends with the key of our object
      grab the value of that key which is the call back
      add that word into a new array
    if it does not we just add our word into the array
join our new array
*******************************************************************************/

function suffixCipher(sentence, cipher) {
  let words = sentence.split(" ");
  // let newArr = []
  //  for(let i = 0; i < words.length; i++){
  //   let word = words[i]
  //   for(let suffix in cipher){
  //     if(word.endsWith(suffix)){
  //       let cb = cipher[suffix]
  //       words[i] = cb(word)
  //     }
  //   }
  //  }
  let newArr = words.map((word) => {
    for (let suffix in cipher) {
      if (word.endsWith(suffix)) {
        let cb = cipher[suffix];
        return cb(word);
      }
    }
    return word;
  });
  return newArr.join(" ");
}


let cipher1 = {
  ly: function (word) {
    return word.slice(0, -1) + "ee";
  },
  ize: function (word) {
    return word + "r";
  },
};
console.log(suffixCipher("quietly and gently visualize", cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
  tal: function (word) {
    return word.toUpperCase();
  },
  s: function (word) {
    return word + "th";
  },
};
console.log(suffixCipher("incremental progress is very instrumental", cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch (e) {
  return null;
}
