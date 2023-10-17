const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber; // Will be assigned randomly
let numAttempts; // Number of attempts remaining

function randomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(guess) {
  if (guess > secretNumber) {
    console.log('Too high.');
    return false;
  } else if (guess < secretNumber) {
    console.log('Too low.');
    return false;
  } else {
    console.log('Correct!');
    return true;
  }
}

function askGuess() {
  rl.question('Enter a guess: ', (answer) => {
    const guess = Number(answer);
    if (checkGuess(guess)) {
      console.log('YOU WON.');
      rl.close();
    } else {
      numAttempts--;
      if (numAttempts === 0) {
        console.log('You Lose.');
        rl.close();
      } else {
        console.log(`Attempts remaining: ${numAttempts}`);
        askGuess();
      }
    }
  });
}

function askRange() {
  rl.question('Enter a min number: ', (minAnswer) => {
    const min = Number(minAnswer);
    rl.question('Enter a max number: ', (maxAnswer) => {
      const max = Number(maxAnswer);
      secretNumber = randomInRange(min, max);
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      askGuess();
    });
  });
}

function askLimit() {
  rl.question('Enter the number of attempts: ', (answer) => {
    numAttempts = Number(answer);
    askRange();
  });
}

askLimit();