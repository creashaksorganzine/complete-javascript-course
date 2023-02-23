'use strict';

// console.log(array);
// const addScore = function (x) {
//   x;
// };

// let number = Math.round(Math.random() * 1);
// console.log(number);
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
//Practice

// array of arrays "multidimensional array"
// let garage = [
//   ['Mustang', 'F-150', 'Explorer'],
//   [('Corvette', 'Silverado', 'Equinox')],
//   [('Camry', 'Highlander', 'Tacoma')],
// ];

// console.log(garage[0][0]);

// for (let i = 0; i < garage.length; i++) {
//   for (let j = 0; j < garage[i].length; j++) {
//     console.log(i, j, garage[i][j]);
//   }
// }

// ******* index.js *******

// multidimensional array = Holds a matrix of elements.
//                                              An array of arrays

// const randArray = function (reps, upperLimit) {
//   let x = reps;
//   let y = upperLimit;
//   let array = [];
//   for (let i = 0; i < x; i++) {
//     for (let i = 0; i < x; i++) {
//       let number = Math.round(Math.random() * y);
//       array.push(number);
//     }
//   }
//   console.log(array);
// };

// randArray(5, 1);

// let garage = [
//   ['Mustang', 'F-150', 'Explorer'],
//   ['Corvette', 'Silverado', 'Equinox'],
//   ['Camry', 'Highlander', 'Tacoma'],
// ];

// console.log(garage);

// const listArray = function (x, y) {
//   for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < x[i].length; j++) {
//       console.log(i, j, x[i][j]);
//     }
//   }
// };

// garage[0].push('F-250');
// garage[1].push('Tahoe');
// garage[2].push('Prius', '4Runner');
// console.log(garage[0]);
// listArray(garage);
// garage.push(['a', 'b', 'c']);
// console.log(randArray(garage, 5, 1));

// let array = [];

// randArray(5, 1);

// const ship0 = randArray(5, 10);
// const ship1 = randArray(5, 10);

// const testArray = randArray(5, 1);
// console.log(testArray);

// const randArray = function (reps, upperLimit) {
//   let x = reps;
//   let y = upperLimit;
//   let array = [];
//   for (let i = 0; i < x; i++) {
//     let number = Math.round(Math.random() * y);
//     array.push(number);
//   }
//   console.log(array);
// };

// const test = [randArray(5, 1)];

// console.log(test);

// const testArray = [];
// console.log(testArray);

// testArray.push(1);
// console.log(testArray);

// testArray.push(5);
// console.log(testArray);

// testArray[0].push(10);
// console.log(testArray[0]);

// const t = 160;
// const d = 103.5;
// const l = t - d;
// let array = [];
// console.log(l);
// const off = 34.24;
// let work = 0;
// work + 8;
// const days = function (x, y) {
//   for (let i = 0; i < x; i++) {
//     work = work + 8;
//     console.log(work);
//     array.push(work);
//   }
// };
// days(5);
// console.log(array);

// const thing = function (x) {
//   for (let i = 0; i < x; i++) {
//     return `${i}`;
//   }
// };

// console.log(`test me ${thing(10)};`);
