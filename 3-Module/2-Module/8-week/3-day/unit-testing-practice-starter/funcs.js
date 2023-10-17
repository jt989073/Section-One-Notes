function isFive(num) {
  // Your code here
  return num === 5
}

function isOdd(number) {
  // Your code here
  if(typeof number !== 'number'){
    throw new Error('need a number')
  }
  return number % 2 !== 0
}

function myRange(min, max, step = 1) {
  // Your code here
  const newArr = []
  for(let i = min; i <= max; i+= step){
    newArr.push(i)
  }
  return newArr
}


module.exports = { isFive, isOdd, myRange };