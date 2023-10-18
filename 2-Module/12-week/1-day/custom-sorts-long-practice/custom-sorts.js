function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  });
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    // if ((a + b) % 2 === 0) {
    //   return a - b;
    // } else if (a % 2 === 0) {
    //   return 1;
    // } else {
    //   return -1;
    // }
    if(a % 2 === 1 && b % 2 === 0) return -1
    if (a % 2 === 0 && b % 2 === 1) return 1
    return a - b
  });
}

const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
oddEvenSort(arr1);

function validAnagrams(s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("");
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    let baseA = Math.floor(Math.log10(a));
    let baseB = Math.floor(Math.log10(b));
    if (baseA === baseB) return a - b;
    else return baseB - baseA;
  });
}

function frequencySort(arr) {
  const count = {};
  arr.forEach((ele) => {
    if (!count[ele]) {
      count[ele] = 1;
    } else {
      count[ele]++;
    }
  });

  return arr.sort((a, b) => {
    if (count[a] === count[b]) return b - a;
    else if (count[a] > count[b]) return 1;
    else return -1;
  });
}

const arr = [1,2,3,4]
let curr
for(let i = 0; i < arr.length; curr = arr.pop()){
  console.log(curr)
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
