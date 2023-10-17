function firstStep(input) {
  // Your code here
  return input.split('&')
}

function secondStep(input) {
  // Your code here
  return input.map(ele => ele.split('='))
}

function thirdStep(input) {
  // Your code here
  return input.map(([key, value])=> [key, value.replace(/\+/g, ' ')])
}

function fourthStep(input) {
  // Your code here
  return input.map(([key, value])=> [key, decodeURIComponent(value)])
  
}

function fifthStep(input) {
  // Your code here
  return input.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})
}

function parseBody(str) {
  // Your code here
  const first = firstStep(str)
  const second = secondStep(first)
  const third = thirdStep(second)
  const fourth = fourthStep(third)
  const fifth = fifthStep(fourth)
  return fifth
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};