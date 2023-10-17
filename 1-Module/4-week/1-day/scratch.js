let higherOrderFunction = function(callback){
    callback()
  };
  
  let intoAFunction = function() {
    console.log('I\'m being passed into a function');
  };
  
  let intoAFunctionPt2 = function() {
    console.log('I\'m ALSO being passed into a function');
  }
  
  // higherOrderFunction(intoAFunction);
  // higherOrderFunction(intoAFunctionPt2);



/* 
Instructions:

Write a callback called 'upper' that:
  1. Intakes an array
  2. Returns an array with all the elements, but uppercase

Write a callback called 'lower' that:
1. Intakes an array
2. Returns an array with all the elements, but lowercase

Write a higher order function called printVals that: 
  1. Intakes two parameters 
    1. An object
    2. An optional callback
  2. If a callback is passed in
    1. Return the result of passing in an array of values from the obj to the cb
  3. Otherwise return an array of values from the obj

*/

let upper = arr => {
  return arr.map(ele => ele.toUpperCase())
}

let lower = arr => {
  return arr.map(ele => ele.toLowerCase())
}



/* 
Write a higher order function called printVals that: 
  1. Intakes two parameters 
    1. An object
    2. An optional callback
  2. If a callback is passed in
    1. Return the result of passing in an array of values from the obj to the cb
  3. Otherwise return an array of values from the obj
*/


let printVals = (obj, cb) => {
  let vals = Object.values(obj)
  if(cb === undefined){
    return vals
  } else {
    return cb(vals)
  }
}

let user = {
    name: "MylO",
    location: "ChIcaGo",
    favLibrary: "ReAct",
    favAnimal: "ElePhAnt",
  };

// console.log(upper(["YeS", "i", "DiD", "It", "!!!"])); // ['YES', 'I', 'DID', 'IT', '!!!']
// console.log(lower(["YeS", "i", "DiD", "It", "!!!"])); // ['yes', 'i', 'did', 'it', '!!!']
console.log(printVals(user)); // ['MylO','ChIcaGo', 'ReAct', 'ElePhAnt']
console.log(printVals(user, upper)); // ['MYLO', 'CHICAGO', 'REACT', 'ELEPHANT']
console.log(printVals(user, lower)); // ['mylo', 'chicago', 'react', 'elephant']