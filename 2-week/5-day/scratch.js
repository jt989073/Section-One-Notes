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

// function costOfGroceries(groceries) {
//   // Your code here
//   let total = 0;
//   for (let i = 0; i < groceries.length; i++) {
//     let ele = groceries[i];
//     if (ele === "butter") {
//       total += 1;
//     } else if (ele === "eggs") {
//       total += 2;
//     } else if (ele === "milk") {
//       total += 3;
//     } else if (ele === "bread") {
//       total += 4;
//     } else if (ele === "cheese") {
//       total += 5;
//     }
//   }
//   return total;
// }

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

// function mostExpensiveGroceries(arr) {
//   // Your code here
//   let highestSum = -Infinity;
//   let highestIndex = -1;
//   for (let i = 0; i < arr.length; i++) {
//     let subArr = arr[i];
//     let currTotal = costOfGroceries(subArr);
//     if (currTotal > highestSum) {
//       highestSum = currTotal;

//       highestIndex = i;
//     }
//   }
//   return highestIndex;
// }

// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// const groceriesA = ["cheese", "butter", "eggs"];
// const groceriesB = ["eggs", "milk", "bread", "bread"];
// const groceriesC = ["cheese", "bread"];
// const groceriesD = ["eggs", "butter"];

// costOfGroceries(groceriesA); // 8
// costOfGroceries(groceriesB); // 13
// costOfGroceries(groceriesC); // 9
// costOfGroceries(groceriesD); // 3

// mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

// let score = 0;

// if (costOfGroceries(groceriesA) === 8) score++;
// if (costOfGroceries(groceriesB) === 13) score++;
// if (costOfGroceries(groceriesC) === 9) score++;
// if (costOfGroceries(groceriesD) === 3) score++;

// if (
//   mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1
// )
//   score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

// console.log("You have scored " + score + "/7 points.");

/* 
check if our operation is capitalize
	if it is capitalize the first letter
    return index into first letter capitalize it and concat the rest of the word (slice)

uppercase, 
	return the word toUpperCase()
double,
	return the word + word
reverse
	maybe a method
    create a new string variable
    loop over the word from the end to the beginning
		concat each letter to the newString
    return the word
*/

// function stringChanger(word, operation) {
//     // Your code here
//   if(operation === 'capitalize'){
//   	return word[0].toUpperCase() + word.slice(1)
//   } else if(operation === 'uppercase'){
//   	return word.toUpperCase()
//   } else if(operation === 'double'){
//   	return word + word
//   } else if (operation === 'reverse'){
//   	let newStr = ''
//   	for(let i = word.length - 1; i >= 0; i--){
//   	let letter = word[i]
//   	newStr += letter
//   	}
//   	return newStr
//     // return word.split('').reverse().join('')
//   } else {
//   	return word
//   }
// }

// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (stringChanger("foo", "capitalize") === "Foo") score++;
// if (stringChanger("foo", "uppercase") === "FOO") score++;
// if (stringChanger("foo", "double") === "foofoo") score++;
// if (stringChanger("foo", "reverse") === "oof") score++;

// if (stringChanger("foo", "unknown") === "foo") score++;

// console.log("You have scored " + score + "/5 points.");

// function isSorted(nums) {

//     // Loop through each number
//     for (let i = 0 ; i < nums.length ; i++) {

//         // Check if the current number is less than
//         // the previous number
//         if (nums[i-1] > nums[i]) {
//             // If it's not, return false
//             return false;
//         }
//     }

//     // If every number is greater or equal to the previous number
//     // in the array, it's sorted.
//     return true;

// }

// console.log(isSorted([1, 2, 3, 4, 5]))  // true
// console.log(isSorted([2, 2, 4, 4]))  // true
// console.log(isSorted([1, 2, 4, 3, 5, 6]))  // false



// TESTS // DO NOT MODIFY ANYTHING BELOW THIS LINE
// let score = 0;
// if (operate(456, 123, "greater than") === true) score++;
// if (operate(654, 654, "less than") === false) score++;
// if (operate(99, 3, "equal to") === false) score++;
// if (operate(111, 3, "not equal to") === true) score++;
// if (operate(42, 42, "opposite to") === "Invalid Operation") score++;
// console.log("You have scored " + score + "/5 points.");


// function getProduct(nums) { let product = 1; for (let i = 0; i < nums.length; i++) { product *= nums[i] } return product; } function highestProduct(numsList) { let product = 1; let index = 0; for (let i = 0; i < numsList.length; i++) { if (getProduct(numsList[i]) > product) { product = getProduct(numsList[i]); index = i; } } return index; } 


// TESTS // DO NOT MODIFY ANYTHING BELOW THIS LINE 
// const arrayA = [1, 2, 3, 4, 5]; const arrayB = [3, 7]; const arrayC = [20, 100, 1, 2]; const arrayD = [1, 3, 2, 300]; let score = 0; if (getProduct(arrayA) === 120) score++; if (getProduct(arrayB) === 21) score++; if (getProduct(arrayC) === 4000) score++; if (getProduct(arrayD) === 1800) score++; if (highestProduct([arrayA, arrayB, arrayC, arrayD]) === 2) score++; if (highestProduct([arrayA, arrayB]) === 0) score++; if (highestProduct([arrayA, arrayD]) === 1) score++; console.log("You have scored " + score + "/7 points.");



function multiplesOfSeven(num) {
     let arr = [];
      for (let i = num; i > 0; i--) { 
        if (i % 7 === 0) { 
            arr.unshift(i);
         }
         } 
         return arr; 
        } 
        // Expected return values 
        // console.log(multiplesOfSeven(85)); // [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84] 
        // console.log(multiplesOfSeven(15)); // [ 7, 14 ] 
        // console.log(multiplesOfSeven(7)); // [ 7 ] 
        // console.log(multiplesOfSeven(1)); // [] /* SCORING: DO NOT MODIFY ANYTHING BELOW THIS LINE */
 let score = 0; 
 const arrComparison = function(arr1, arr2) { 
    if (arr1.length !== arr2.length) return false; 
    let i = 0;
     while (i < arr1.length) { 
        if (arr1[i] !== arr2[i]) return false; 
        i++; } return true; }
         if (arrComparison(multiplesOfSeven(85), [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84])) score++; 
         if (arrComparison(multiplesOfSeven(15), [ 7, 14 ])) score++; 
         if (arrComparison(multiplesOfSeven(7), [ 7 ])) score++; 
         if (arrComparison(multiplesOfSeven(1), [])) score++; 
         console.log("You have scored " + score + "/4 points.");