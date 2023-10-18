const findBiggest = (num1, num2) => {
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
  } else {
    bigNum = num2;
  }
  return bigNum;
};

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = findBiggest(num1, num2);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = findBiggest(num1, num2);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBiggest(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
} 

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  let bigNum = findBiggest(weight1, weight2);
  if (bigNum === weight2) {
    smallDog = weight1;
  } else {
    smallDog = weight2;
  }
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
