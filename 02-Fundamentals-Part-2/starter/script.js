/*
"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio'
// const private = 534;
// const if = 23;

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0); //fuzz

const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);


// Function declaration
function clacAge1(birthYear) {
  return 2037 - birthYear;
}

// Function expression
const age1 = clacAge1(1991);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// // Function declaration
// function clacAge1(birthYear) {
//   return 2037 - birthYear;
// }

// // Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// function currentYear() {
//   new Date().getFullYear();
// }

// const currentYear = new Date().getFullYear();
// console.log(new Date().getFullYear());
// console.log(yearsUntilRetirement(1991));
*/

// const birthYear = 1987;
// const retirementAge = 65;
// const firstName = "Kali";

// const age = currentYear - birthYear;
// const yearsUntilRetirement = retirementAge - age;
// return yearsUntilRetirement;

// console.log(birthYear, retirementAge, firstName);
/*
const yearsUntilRetirement = (birthYear, retirementAge, firstName) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const yearsUntilRetirement = retirementAge - age;
  const retirementYear = birthYear + retirementAge;
  const namedYearUntilRetirement = `${firstName}+${yearsUntilRetirement}`;
  return (
    namedYearUntilRetirement,
    `${firstName} wants to retire at ${retirementAge} years old, in the year ${retirementYear}, which is in ${yearsUntilRetirement} years`
  );
};
console.log(yearsUntilRetirement(1967, 65, "Mary"));
console.log(yearsUntilRetirement(1999, 65, "Thomas"));

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));
*/
/*
// const yearsUntilRetirement = (birthYear, retirementAge, firstName) => {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - birthYear;
//   const yearsUntilRetirement = retirementAge - age;
//   const retirementYear = birthYear + retirementAge;
//   const namedYearUntilRetirement = `yearsUntilRetirement = ${firstName}${yearsUntilRetirement}`;
//   const retirementStatement = `${firstName} wants to retire at ${retirementAge} years old, in the year ${retirementYear}, which is in ${yearsUntilRetirement} years`;
//   return (
//     namedYearUntilRetirement, namedYearUntilRetirement + retirementStatement
//   );
// };
// console.log(yearsUntilRetirement(1967, 65, "Mary"));
// console.log(yearsUntilRetirement(1999, 65, "Thomas"));

/*
const yearsUntilRetirement = (birthYear, retirementAge, firstName) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const yearsUntilRetirement = retirementAge - age;
  const retirementYear = birthYear + retirementAge;
  if (yearsUntilRetirement > 0) {
    return `${firstName} wants to retire at ${retirementAge} years old, in the year ${retirementYear}, which is in ${yearsUntilRetirement} years`;
  } else if (yearsUntilRetirement < 0) {
    return `${firstName} reached ${retirementAge} years old in the year ${retirementYear}, which was ${
      yearsUntilRetirement * -1
    } years ago`;
  } else {
    return `Retire`;
  }
};

console.log(yearsUntilRetirement(1999, 65, "Thomas"));
console.log(yearsUntilRetirement(1987, 65, "Bob"));
console.log(yearsUntilRetirement(1958, 65, "Mary"));

// return `${firstName} turns ${age} this year and may now retire`;
*/

///////////////////////////////////////
// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
*/

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

function checkWinner(t1, avg1, t2, avg2) {
  if (avg1 > avg2 && avg1 > avg2 * 2) {
    winner = t1;
    winnerAvg = avg1;
    loser = t2;
    loserAvg = avg2;
    return `${winner} winner with and average score of ${winnerAvg} beating ${loser} with a score of ${loserAvg}`;
  } else if (avg2 > avg1 && avg2 > avg1 * 2) {
    winner = t2;
    winnerAvg = avg2;
    loser = t1;
    loserAvg = avg1;
    return `${winner} winner with and average score of ${winnerAvg} beating ${loser} with a score of ${loserAvg}`;
  } else return `Double Score Rule: ${t1} ${avg1}, ${t2} ${avg2}`;
}

// long-form

// avgDolphins = calcAverage(44, 23, 71);
// avgKoalas = calcAverage(65, 54, 49);
// console.log(avgKoalas);
// console.log(avgDolphins);
// console.log(checkWinner("Dolphins", avgDolphins, "Koalas", avgKoalas));

// avgKoalas = calcAverage(23, 34, 27);
// avgDolphins = calcAverage(85, 54, 41);
// console.log(avgKoalas);
// console.log(avgDolphins);
// console.log(checkWinner("Dolphins", avgDolphins, "Koalas", avgKoalas));

console.log(
  checkWinner("Dolphins", calcAverage(65, 54, 49), "Koalas", (44, 23, 71))
);

console.log(
  checkWinner("Dolphins", calcAverage(85, 54, 41), "Koalas", (23, 34, 27))
);

console.log(
  checkWinner("Avalanche", calcAverage(10, 10, 10), "Red Wings", (4, 5, 4))
);

console.log(
  checkWinner("team1", calcAverage(3, 1, 5), "team2", calcAverage(1, 2, 3))
);
