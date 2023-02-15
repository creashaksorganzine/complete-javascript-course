"use strict";

const time = document.getElementById("time");
const date = new Date();

function pad2(number) {
  return (number < 10 ? "0" : "") + number;
}

function upDateTime() {
  const year = date.getFullYear();
  const month = pad2(date.getMonth());
  const day = pad2(date.getDay());
  const hrs = pad2(date.getHours());
  const min = pad2(date.getMinutes());
  const sec = pad2(date.getSeconds());
  time.innerText = `${year}${month}${day} - ${hrs}:${min}:${sec}`;
}

setInterval(upDateTime, 1000);
