// SYNC !!!!!!!!!!!!!!
// console.log('one');
// console.log('two');
// console.log('three');


// const foo = () => {
//     console.log('two');
// };

// console.log('one');
// foo();
// console.log('three');

// ASYNC !!!!!!!!!!!!!!!

// console.log('one');

// setTimeout(() => {
//     console.log('two');
// }, 1500);

// console.log('three');


// syntax is Callback, delay in milliseconds, optional params (however many we need)
// setTimeout(() => {
//     console.log('time is up');
// }, 1000);

// console.log('end');
// console.log('end');

// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// setTimeout(foo, 2000, 'potato', 'tomato');
// setTimeout(foo, 4000, 'lettuce', 'tomato');
// setTimeout(foo, 500, 'bacon', 'tomato');

// console.log('end');


// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// const interval = setInterval(foo, 1000, 'potato', 'tomato')


// setTimeout(() => {
//     clearInterval(interval)
// }, 8005)

// clearInterval(interval)

// const intervalCount = (count, delay) => {
//     const intervalObj = setInterval(() => {
//         console.log('time is up', `${count}`);
//         count--;

//         if (count === 0) {
//             console.log(`${count} is done`)
//             clearInterval(intervalObj);
//         }
//     }, delay);
// }

// intervalCount(3, 1000);