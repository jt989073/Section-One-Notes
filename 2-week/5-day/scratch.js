// console.log('hello'[2]);
// console.log(24 % 6);
// console.log((false || true) && !true);

// let num = 100;
// let isBig = num >= 100;
// let isSmall = num < 100;
// console.log(isBig || isSmall);

// console.log(1 + 2 * 3);
// console.log(1 == "1.0");

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

/* 
loop over our array
define a total variable to keep track of sum
grab each element and save to variable
check if the element is butter, eggs, milk, or cheese
	update our total bassed on what the current element is
return our total
*/


function costOfGroceries(groceries) {
    // Your code here
	let total = 0
    for(let i = 0; i < groceries.length; i++){
    	let ele = groceries[i]
        if(ele === 'butter'){
        	total += 1
        } else if(ele === 'eggs'){
        	total += 2
        } else if (ele === 'milk'){
        	total += 3
        } else if (ele === 'bread'){
        	total += 4
        } else if (ele === 'cheese'){
        	total += 5
        }
    }
  return total
}

/* 
create a highestSum variable that will keep track of highest sum
create a highestIndex variable to keep track of high index
loop over our outter array
	grab each sub array
    	pass our sub array to our helper function
        check if our current subarray's total is higher than our highestSum
        	reassign our highestSum to our current subArrays total
            reassign our highest index to curreent index
*/


function mostExpensiveGroceries(arr) {
    // Your code here
  let highestSum = -Infinity
  let highestIndex = -1
  for(let i = 0; i < arr.length; i++){
  	let subArr = arr[i]
    let currTotal = costOfGroceries(subArr)
    if(currTotal > highestSum){
    	highestSum = currTotal
  
        highestIndex = i
    }
  }
  return highestIndex
}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");