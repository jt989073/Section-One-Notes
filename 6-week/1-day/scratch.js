// sync
// console.log('one');
// console.log('two');
// console.log('three');

// const foo = () => {
//     console.log('two');
// };

// console.log('one');
// foo();
// console.log('three');

// console.log('one');

// setTimeout(() => {
//     console.log('two');
// }, 1500);

// console.log('three');

// setTimeout(() => {
//     console.log('four');
// }, 1000);

// setTimeout(() => {
//     console.log('five');
// }, 998);

// setTimeout(() => {
//     console.log('6');
// }, 1);

// syntax is setTimeout(CB function, delay, optional parameters, optional parameters, ...etc)

// const timeOut = setTimeout(
//   (num) => {
//     console.log("time is up");
//     return num + 5;
//   },
//   1000,
//   10
// );


// clearTimeout(timeOut)
// console.log("end");


// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// const interval = setInterval(foo, 0, 'potato', 'tomato');

// setTimeout(() => {
//     clearInterval(interval)
// }, 7000)

// clearInterval(interval)

const intervalCount = (count, delay) => {
    const intervalObj = setInterval(() => {
        console.log(`${count}`);
        count--;

        if (count === 0) {
            clearInterval(intervalObj);
        }
    }, delay);
}

intervalCount(3, 500);