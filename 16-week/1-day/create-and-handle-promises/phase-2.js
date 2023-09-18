function stretch(time) {
  // Your code here
  return new Promise((resolve, reject) =>{
    if(time < 1000){
      reject('You dont have enough time to stretch')
    } else {
      time -= 1000
      setTimeout(() => {
        console.log("done stretching")
        resolve(time)
      }, 1000)
    }



  })
}


function runOnTreadmill(time) {
  // Your code here
  return new Promise((resolve, reject) => {
  if(time < 500){
    reject('you dont have enough time to run on the treadmill')
  } else {

      time -= 500
      setTimeout(() => {
        console.log("done running on treadmill")
        resolve(time)
      }, 500)

  }
  })
}

function liftWeights(time) {
  // Your code here
  return new Promise((resolve, reject) => {
  if(time <  2000){
    reject('you dont have enough time to lift weights')
  } else {
    time  -= 2000
      setTimeout(() => {
        console.log("done lifting weights")
        resolve(time)
      }, 2000)
    }
  })
}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime)
    .then((runTime) => runOnTreadmill(runTime))
    .then((liftTime) => liftWeights(liftTime))
    .then((finishTime) => console.log(`done working out with ${finishTime/ 1000} left`))
    .catch(e => console.log('Error:', e))
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left