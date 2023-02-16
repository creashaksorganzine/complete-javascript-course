// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const clacAge = birthYear => 2037 - birthYear;

console.log(clacAge(1990));
*/

// Running Clock
function pad2(number) {
  return (number < 10 ? '0' : '') + number;
}

const display = document.getElementById('time');

function upDateTime() {
  const date = new Date();

  const hrs = pad2(date.getHours());
  const min = pad2(date.getMinutes());
  const sec = pad2(date.getSeconds());
  const year = date.getFullYear();
  const month = pad2(date.getMonth() + 1);
  const day = pad2(date.getDate());

  display.innerText = `${year}${month}${day} - ${hrs}:${min}:${sec}`;
}
setInterval(upDateTime, 1000);

const longDate = document.getElementById('longDate');

function currentDateLong() {
  const date = new Date();
  const dayOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const monthOfTheYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dow = dayOfWeek[date.getDay() - 1];
  const dom = date.getDate();
  const moy = monthOfTheYear[date.getMonth()];
  const year = date.getFullYear();
  longDate.innerText = `${dow}, ${moy} ${dom}, ${year}`;
}

setInterval(currentDateLong(), 1000);

// setInterval(updateLongDate, 1000);
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is thise: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 16, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between the highest and lowest temp
// - How to compute mac and min temperatures?
// - What's a sonsor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should not receive 2 arrays of tmps

//  1) Understanding the problem
// - With 2 arrays, should we implement the functionality twice? NO! Just merge two arrays
// Merge 2 arrays
// what I found: thirdArray = firstArray.concat(secondArray);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// const amplitudeNew = calcTempAmplitudeNew(temperatures);
console.log(amplitudeNew);

*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  console.log(measurement);
  // console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error10(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A IDENTIFY
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
// const amplitudeBug = calcTempAmplitudeBug(temperatures);
console.log(amplitudeBug);
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// const temp1 = [17, 21, 23];
// const temp2 = [12, 5, -5, 0, 4];

// const printForecast = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     const temp = array[i];
//     const days = i + 1;
//     console.log(`${temp}°C in ${days} days`);
//   }
// };

// Course answer
// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}°C in  ${i + 1} days ...`;
//   }
//   console.log('...' + str);
// };

// /*
// // const printForecast = function (array) {
// //   const date = new Date();

// //   const dayOfWeek = [
// //     'Monday',
// //     'Tuesday',
// //     'Wednesday',
// //     'Thursday',
// //     'Friday',
// //     'Saturday',
// //     'Sunday',
// //   ];
// //   const monthOfTheYear = [
// //     'January',
// //     'February',
// //     'March',
// //     'April',
// //     'May',
// //     'June',
// //     'July',
// //     'August',
// //     'September',
// //     'October',
// //     'November',
// //     'December',
// //   ];

// //   console.log(dayOfWeek[date.getDay() - 1]);

// //   // const dow = dayOfWeek;
// //   // const moy = monthOfTheYear;
// //   console.log(
// //     `It is ${dayOfWeek[date.getDay() - 1]}, ${
// //       monthOfTheYear[date.getMonth()]
// //     } ${date.getDate()} and here is today's ${array.length} day forcast}`
// //   );
// //   for (let i = 0; i < array.length; i++) {
// //     const temp = array[i];
// //     const days = i + 1;
// //     console.log(`${temp}°C in ${days} days `);
// //     // ${dow} ${moy}
// //   }
// // };
// */
// printForecast(temp1);
// console.log('');
// printForecast(temp2);

/*

const printForecast = function (array) {
  const date = new Date();
  const dayOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const monthOfTheYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  console.log(
    `It is ${dayOfWeek[date.getDay() - 1]}, ${
      monthOfTheYear[date.getMonth()]
    } ${date.getDate()} and here is today's ${array.length} day forcast}`
  );
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    const days = array.length;
    const daysTill = i + days;
    const dow = dayOfWeek[date.getDay() + i];
    console.log(temp, i, days, daysTill, dow);
    if (i !== 0) {
      console.log(
        `The high will be ${temp} degrees on ${dow} which is in ${daysTill} days`
      );
    } else {
      console.log(`The high will be ${temp} degrees tomorrow`);
    }
  }
};
// console.log(new Date().getDay());
// console.log(printForecast(temp1));
console.log(printForecast(temp2));
// printForecast([30, 40]);

const dayOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const n = arr.length;
printForecast(arr);

// let val = arr[((i % n) + n) % n]; //???
for (var i = 0, len = arr.length; i < len; i++) {
  var str = arr[i];
  for (var j = 1; j < 3; j++) str += ',' + arr[(i + j) % len]; // you could push to an array as well
  alert(str);
}

// or

for (var i = 0, len = arr.length; i < len; i++)
  alert(
    arr.slice(i, i + 3).concat(arr.slice(0, Math.max(i + 3 - len, 0)).join(','))
  );
??????? */
