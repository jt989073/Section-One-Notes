// const { expect } = require('chai');

// const chai = require('chai');
// const spies = require('chai-spies');

// chai.use(spies);

// const [bubbleSort] = require("../bubble-sort.js");
// const [selectionSort, selectionSortInPlace] = require("../selection-sort.js");
// const [insertionSort, insertionSortInPlace] = require("../insertion-sort.js");

// describe ('Basic Sorting Algorithms', function () {

//   let arr;
//   let consoleSpy;

//   beforeEach(function () {

//     consoleSpy = chai.spy.on(console, 'log');

//     arr = [2,4,6,8,1,3,5,7,9];
//   });

//   afterEach(() => {
//     chai.spy.restore(console, 'log');
//   });

//   it('performs a bubble sort', function () {

//     bubbleSort(arr);

//     expect(consoleSpy).on.nth(1).be.called.with('2,4,6,1,8,3,5,7,9');
//     expect(consoleSpy).on.nth(2).be.called.with('2,4,6,1,3,8,5,7,9');
//     expect(consoleSpy).on.nth(3).be.called.with('2,4,6,1,3,5,8,7,9');
//     expect(consoleSpy).on.nth(4).be.called.with('2,4,6,1,3,5,7,8,9');
//     expect(consoleSpy).on.nth(5).be.called.with('2,4,1,6,3,5,7,8,9');
//     expect(consoleSpy).on.nth(6).be.called.with('2,4,1,3,6,5,7,8,9');
//     expect(consoleSpy).on.nth(7).be.called.with('2,4,1,3,5,6,7,8,9');
//     expect(consoleSpy).on.nth(8).be.called.with('2,1,4,3,5,6,7,8,9');
//     expect(consoleSpy).on.nth(9).be.called.with('2,1,3,4,5,6,7,8,9');
//     expect(consoleSpy).on.nth(10).be.called.with('1,2,3,4,5,6,7,8,9');

//   });

//   it('performs a out-of-place insertion sort', function () {

//     let newArr = insertionSort(arr);

//     expect(consoleSpy).on.nth(1).be.called.with('');
//     expect(consoleSpy).on.nth(2).be.called.with('9');
//     expect(consoleSpy).on.nth(3).be.called.with('7,9');
//     expect(consoleSpy).on.nth(4).be.called.with('5,7,9');
//     expect(consoleSpy).on.nth(5).be.called.with('3,5,7,9');
//     expect(consoleSpy).on.nth(6).be.called.with('1,3,5,7,9');
//     expect(consoleSpy).on.nth(7).be.called.with('1,3,5,7,8,9');
//     expect(consoleSpy).on.nth(8).be.called.with('1,3,5,6,7,8,9');
//     expect(consoleSpy).on.nth(9).be.called.with('1,3,4,5,6,7,8,9');

//     expect(newArr).to.deep.equal([1,2,3,4,5,6,7,8,9]);
//     expect(arr).to.deep.equal([2,4,6,8,1,3,5,7,9]);

//   });

//   it('performs an in-place insertion sort', function () {

//     insertionSortInPlace(arr);

//     expect(consoleSpy).on.nth(1).be.called.with('2,4,6,8,1,3,5,7,9');
//     expect(consoleSpy).on.nth(2).be.called.with('2,4,6,8,1,3,5,7,9');
//     expect(consoleSpy).on.nth(3).be.called.with('2,4,6,8,1,3,5,7,9');
//     expect(consoleSpy).on.nth(4).be.called.with('2,4,6,8,1,3,5,7,9');
//     expect(consoleSpy).on.nth(5).be.called.with('1,2,4,6,8,3,5,7,9');
//     expect(consoleSpy).on.nth(6).be.called.with('1,2,3,4,6,8,5,7,9');
//     expect(consoleSpy).on.nth(7).be.called.with('1,2,3,4,5,6,8,7,9');
//     expect(consoleSpy).on.nth(8).be.called.with('1,2,3,4,5,6,7,8,9');

//     expect(arr).to.deep.equal([1,2,3,4,5,6,7,8,9]);

//   });

//   it('performs a out-of-place selection sort', function () {

//     let newArr = selectionSort(arr);

//     expect(consoleSpy).on.nth(1).be.called.with('');
//     expect(consoleSpy).on.nth(2).be.called.with('1');
//     expect(consoleSpy).on.nth(3).be.called.with('1,2');
//     expect(consoleSpy).on.nth(4).be.called.with('1,2,3');
//     expect(consoleSpy).on.nth(5).be.called.with('1,2,3,4');
//     expect(consoleSpy).on.nth(6).be.called.with('1,2,3,4,5');
//     expect(consoleSpy).on.nth(7).be.called.with('1,2,3,4,5,6');
//     expect(consoleSpy).on.nth(8).be.called.with('1,2,3,4,5,6,7');
//     expect(consoleSpy).on.nth(9).be.called.with('1,2,3,4,5,6,7,8');

//     expect(newArr).to.deep.equal([1,2,3,4,5,6,7,8,9]);
//     expect(arr).to.deep.equal([2,4,6,8,1,3,5,7,9]);

//   });

//   it('performs an in-place selection sort', function () {

//     selectionSortInPlace(arr);

//     expect(consoleSpy).on.nth(1).be.called.with('2,4,6,8,1,3,5,7,9');
//     expect(consoleSpy).on.nth(2).be.called.with('1,2,4,6,8,3,5,7,9');
//     expect(consoleSpy).on.nth(3).be.called.with('1,2,4,6,8,3,5,7,9');
//     expect(consoleSpy).on.nth(4).be.called.with('1,2,3,4,6,8,5,7,9');
//     expect(consoleSpy).on.nth(5).be.called.with('1,2,3,4,6,8,5,7,9');
//     expect(consoleSpy).on.nth(6).be.called.with('1,2,3,4,5,6,8,7,9');
//     expect(consoleSpy).on.nth(7).be.called.with('1,2,3,4,5,6,8,7,9');
//     expect(consoleSpy).on.nth(8).be.called.with('1,2,3,4,5,6,7,8,9');
//     expect(consoleSpy).on.nth(9).be.called.with('1,2,3,4,5,6,7,8,9');

//     expect(arr).to.deep.equal([1,2,3,4,5,6,7,8,9]);

//   });


// });

