# M1W6D3

## Readings(25 min)

## Node/Readline

### Node Runtime Environment

- Node is a runtime for JavaScript that runs on servers/computers with
**full user-level system access**.

- This is in contrast to javascript in the browser which is sandboxed for
  security reasons(so webpages cannot do anything malicious on your system).

- This allows us to write software that runs natively on your computer such as a
  desktop app or server for a web app. Utilities such as readline which interact
  with the file system can only be utilized in node, not the browser.


```js
// import the readline module into our file
const readline = require('readline')

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const answers = {}

// ask the user a question
// Main thread is freed up while we wait for user input. HandleResponeOne will
// be executed when the user has submitted their response.

rl.question("What's up, doc? ", handleResponseOne)

// first calback
function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + ' is up.')
  // save firstAnswer to answer object
  answers.up = firstAnswer
  rl.question("What's down, clown? ", handleResponseTwo)
}

// second callback (passed to `rl.question()` in handleResponseOne)
function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + ' is down.')
  answers.down = secondAnswer
  rl.question("What's left, James? ", handleResponseThree)
}

// third callback (passed to `rl.question()` in handleResponseTwo)
function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + ' is left.')
  answers.left = thirdAnswer
  // close the interface
  rl.close()
  console.log(answers)
}
```