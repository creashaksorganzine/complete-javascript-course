'use strict';

// Running Clock Serial
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

// Long Date

// const longDate = document.getElementById('longDate');

// function currentDateLong() {
//   const date = new Date();
//   const dayOfWeek = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ];
//   const monthOfTheYear = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const dow = dayOfWeek[date.getDay() - 1];
//   const dom = date.getDate();
//   const moy = monthOfTheYear[date.getMonth()];
//   const year = date.getFullYear();
//   longDate.innerText = `${dow}, ${moy} ${dom}, ${year}`;
// }

// setInterval(currentDateLong(), 1000);

// Guess My Number Page

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// define random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let guess = null;
let score = 20;
let highScore = 0;
// Functions
// const noNumber = function (guess) {
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number!';
//   }
// };
// const correctNumber = function (guess, secretNumber) {
//   if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//   }
// };
// const tooHigh = function (guess, secretNumber) {
//   if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'Too High!';
//   }
// };
// const tooLow = function (guess, secretNumber) {
//   if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too Low!';
//   }
// };
// const greaterThanTwenty = function (guess, secretNumber) {
//   if (guess > 20) {
//     document.querySelector('.message').textContent = 'Over 20';
//   }
// };
// const lessThanZero = function (guess, secretNumber) {
//   if (guess < 0) {
//     document.querySelector('.message').textContent = 'Under 1';
//   }
// };
// const youLose = function (score) {
//   if (score <= 0) {
//     document.querySelector('.score').textContent = 'You Lose!';
//   }
// };
// const updateScore = function () {
//   document.querySelector('.message').textContent = score;
// };

// Check Button
/**/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#d65d0e';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose!';
      document.querySelector('.score').textContent = 0;
    }

    // guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

console.log(secretNumber);
// my function attempt ???
// if (noNumber(guess, secretNumber)) {
// } else if (correctNumber(guess, secretNumber)) {
// } else if (tooHigh(guess, secretNumber)) {
// } else if (tooHigh(guess, secretNumber)) {
// } else if (greaterThanTwenty(guess, secretNumber)) {
// } else lessThanZero(guess, secretNumber);
// if (youLose(score));
// updateScore();
/**/

// game reset
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;
  console.log(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#3c3836';
  document.querySelector('.number').style.width = '15rem';
  console.log(secretNumber);
});
