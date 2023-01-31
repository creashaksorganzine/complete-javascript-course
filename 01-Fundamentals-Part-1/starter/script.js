/*let js = "amaazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Madtilida";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilida = "JM";
let $function = 27;

let person = 'jonas'
let PI = 3.1415;

//	One line notes can come after a double slash
/*	 Multiline
		notes
			come
				between
					these

console.log(PI)

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let javascripIsFun = true;
console.log(typeof true);
console.log(typeof javascripIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascripIsFun = 'YES!';
console.log(typeof javascripIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
console.log(age);
age = 31;
console.log(age);

const birthYear = 1991; // imutable variable
//birthYear = 1990;	  // this will vause an error/
//const job; will cause an error

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
7;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);

*/
/*
const age = 12;
if (age >= 18) {
  console.log("Sarah is eligible for a drivers license");
} else {
  console.log('Sarah is inelligible for a drivers license"');
}

/*
if (`${isTrue}`) {
  {
    `${valueIfTrue}`;
  }
} else {
  {
    `${valueIfFalse}`;
  }
}
*/
/*
const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (markHigherBMI) {
  (higherBMI = "Mark"), (lowerBMI = "John");
} else {
  (higherBMI = "John"), (lowerBMI = "Mark");
}

console.log(`${higherBMI}'s BMI is higher that ${lowerBMI}'s`);
console.log(`John's BMI is ${BMIJohn}, & Marks BMI is ${BMIMark}`);
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher that John's (${BMIJohn})`);
} else {
  console.log(`John"s BMI (${BMIJohn}) is higher that Mark's (${BMIMark})`);
}

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, ''', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

const age = 18;
if (age === 18) console.log("You just became and adult :D");
console.log(18 === 18);
console.log(18 === 19);
console.log("18" == 18);
console.log("18" === 18);

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}
if (favorite !== 23) console.log("Why no 23?");
*/

/*
let firstName = "Sarah";
let hasDriversLicense = false;
let hasGoodVision = false;

if ((hasDriversLicense = true) && (hasGoodVision = true));
{
  elligibleDrivesLicense = true;

  if (
    (elligibleDrivesLicense = false) &&
    (hasDriversLicense = true) &&
    (hasGoodVision = false)
  );
  {
    badDriver = "need corrective lenses";
  }

  if ((elligibleDrivesLicense = true)) {
    console.log(`${firstName} can legally drive`);
  } else {
    console.log(`${firstName} cannot legally drive because they ${badDriver}`);
  }
}
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Somone else should drive");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Somone else should drive");
}

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// let dolphins;
// let koalas;
// let gameOne;
// let gameTwo;
// let gameThree;
let dolphinsWins = 0;
let koalasWins = 0;
let ties = 0;

//three games highest average score wins
dolphinsOne = 96;
dolphinsTwo = 108;
dolphinsThree = 89;

koalasOne = 88;
koalasTwo = 91;
koalasThree = 110;

dolphinsAverage = Math.round(
  (dolphinsOne + dolphinsTwo + dolphinsThree) / 3
).toFixed(0);
koalasAverage = Math.round((koalasOne + koalasTwo + koalasThree) / 3).toFixed(
  0
);

if (dolphinsOne > koalasOne) {
  (gameOne = `Dolphins ${dolphinsOne}, ${koalasOne}`) && dolphinsWins++;
} else if (dolphinsOne < koalasOne) {
  (gameOne = `Koalas ${koalasOne}, ${dolphinsOne}`) && koalasWins++;
} else if ((dolphinsOne = koalasOne)) {
  (gameOne = `Tie game`) && ties++;
}

if (dolphinsTwo > koalasTwo) {
  (gameTwo = `Dolphins ${dolphinsTwo}, ${koalasTwo}`) && dolphinsWins++;
} else if (dolphinsTwo < koalasTwo) {
  (gameTwo = `Koalas + ${koalasTwo}, ${dolphinsTwo}`) && koalasWins++;
} else if ((dolphinsTwo = koalasTwo)) {
  (gameTwo = `Tie game`) && ties++;
}

if (dolphinsThree > koalasThree) {
  (gameThree = `Dolphins + ${dolphinsThree}, ${koalasThree}`) && dolphinsWins++;
} else if (dolphinsThree < koalasThree) {
  (gameThree = `Koalas+ ${koalasThree}, ${dolphinsThree}`) && koalasWins++;
} else if ((dolphinsThree = koalasThree)) {
  (gameThree = `Tie game`) && ties++;
}

if (dolphinsWins > koalasWins) {
  console.log(
    `Tornament game wins Dolphins ${dolphinsWins}, Koalas ${koalasWins}`
  );
} else if (dolphinsWins < koalasWins) {
  console.log(
    `Tornament game wins Koalas ${koalasWins}, Dolphins ${dolphinsWins}`
  );
}
console.log(
  `Game one ${gameOne}; game two ${gameTwo}; game three ${gameThree}`
);

console.log(`Averages: ${dolphinsAverage} Dolphins, ${koalasAverage} Koalas`);

if (dolphinsAverage > koalasAverage) {
  (tournamentWinner = "Dolphins") &&
    (tournamentLoser = "Koalas") &&
    (tournamentWinnerAverage = dolphinsAverage) &&
    (tournamentLoserAverage = koalasAverage);
} else if (dolphinsAverage < koalasAverage) {
  (tournamentWinner = "Koalas") &&
    (tournamentLoser = "Dolphins") &&
    (tournamentWinnerAverage = koalasAverage) &&
    (tournamentLoserAverage = dolphinsAverage);
} else if ((dolphinsAverage = koalasAverage)) {
  eliminationRound = true && console.log(`Elimination round schedule pending`);
}

if ((eliminationRound = false)) {
  console.log(`W: ${tournamentWinner}`);
  console.log(`L: ${tournamentLoser}`);

  tournamentDelta = tournamentWinnerAverage - tournamentLoserAverage;

  console.log(
    `The tournament winner is ${tournamentWinner} with ${tournamentDelta} average points over the ${tournamentLoser}`
  );
}
