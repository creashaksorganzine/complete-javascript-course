// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const clacAge = birthYear => 2037 - birthYear;

console.log(clacAge(1990));
*/

const display = document.getElementById('time');

function pad2(number) {
  return (number < 10 ? '0' : '') + number;
}

function upDateTime() {
  const date = new Date();

  const hrs = pad2(date.getHours());
  const min = pad2(date.getMinutes());
  const sec = pad2(date.getSeconds());
  const year = date.getFullYear();
  const month = pad2(date.getMonth());
  const day = pad2(date.getDay());

  display.innerText = `${year} ${month} ${day} ${hrs} : ${min} : ${sec}`;
}
setInterval(upDateTime, 1000);
