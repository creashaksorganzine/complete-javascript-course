'use strict';

// const openai = new OpenAI(prompt('Enter your OpenAI API key'));

// const prompt = 'Once upon a time';
// const model = 'davinci';
// const maxTokens = 100;
// const temperature = 0.5;

// openai
//   .complete({
//     prompt,
//     model,
//     maxTokens,
//     temperature,
//   })
//   .then(response => {
//     console.log(response.data.choices[0].text);
//   })
//   .catch(err => {
//     console.error(err);
//   });

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

// const name = 'Jonas';

// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// };

// function second(x, y) {
//   var c = 2;
//   return c;
// }

// const x = first();

// const, let, var hoisting examples
// (var is not used anymore)
// var is undefined when hoisted
console.log(me);
// console.log(job);
// console.log(birthYear);

var me = 'Jonas';
let job = 'teacher';
const birthYear = 1991;

// console.log(me);
// console.log(job);
// console.log(birthYear);

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// Functions
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShopppingCart();

var numProducts = 10;

function deleteShopppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// this keyword
console.log(this);
