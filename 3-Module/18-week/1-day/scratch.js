const cart = { apples: 5, oranges: 3, bananas: 1000 };
const stringified = JSON.stringify(cart)
// console.log(stringified, cart)
const parsed = JSON.parse(stringified)
console.log(parsed)