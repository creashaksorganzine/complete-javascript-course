"use strict";
/*
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

// const birthYear = 1987;
// const retirementAge = 65;
// const firstName = "Kali";

// const age = currentYear - birthYear;
// const yearsUntilRetirement = retirementAge - age;
// return yearsUntilRetirement;

// console.log(birthYear, retirementAge, firstName);

// const yearsUntilRetirement = (birthYear, retirementAge, firstName) => {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - birthYear;
//   const yearsUntilRetirement = retirementAge - age;
//   const retirementYear = birthYear + retirementAge;
//   const namedYearUntilRetirement = `${firstName}+${yearsUntilRetirement}`;
//   return (
//     namedYearUntilRetirement,
//     `${firstName} wants to retire at ${retirementAge} years old, in the year ${retirementYear}, which is in ${yearsUntilRetirement} years`
//   );
// };
// console.log(yearsUntilRetirement(1967, 65, "Mary"));
// console.log(yearsUntilRetirement(1999, 65, "Thomas"));

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
    return `Retire dude, it is your time`;
  }
};

console.log(yearsUntilRetirement(1999, 65, "Thomas"));
console.log(yearsUntilRetirement(1987, 65, "Bob"));
console.log(yearsUntilRetirement(1958, 65, "Mary"));

// return `${firstName} turns ${age} this year and may now retire`;

///////////////////////////////////////
// Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.


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

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//            [  0       1     2  ]

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas, length);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

const friends = ["Michael", "Steven", "Peter"];

// add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(friends.length);

friends.unshift("John");
console.log(friends);
console.log(friends.length);

// remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

///////////////////////////////////////
// Coding Challenge #2


Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills' containing the test data below.

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.

4. BONUS: Create an array 'total' containing the total values, so the bill + tip.


// if (billValue < 50) {
//   console.log(`${tip}%`);
// } else if (50 <= billValue && billValue < 300) {
//   tip = 15;
//   console.log(`${tip}%`);
// } else if (300 <= billValue) {
//   tip = 20;
//   console.log(`${tip}%`);
// }

bills = [125, 555, 44];
tipRate = [0, 15, 20];

billValue = bills[0];
console.log(billValue);

tip = billValue < 50 ? tiprate[0] : tipRate[1];
tip = billValue >= 300 ? tipRate[2] : tip;

tipRate = tip / 100;
tipValue = tipRate * billValue;
console.log(`${tip}% divided by 100% is ${tipRate}`);
tipValue = billValue * tipRate;
console.log(`$${billValue} multiplied by ${tipRate} is $${tipValue}`);
finalBill = tipValue + billValue;
console.log(
  `Total bill with tip is $${finalBill}. With a check due of $${billValue}`
);

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// object literal
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request. What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedman";
console.log(jonas);

// Challenge
// Jonas has three friends, and his best friend is called "Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`
);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge(1991));
console.log(jonas.age);
// console.log(jonas["calcAge"](1991));
// do not repeat yourself
console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3


Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀

// mark;
// John;
// bmi = mass / height ** 2;

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher that John's (${BMIJohn})`);
// } else {
//   console.log(`John"s BMI (${BMIJohn}) is higher that Mark's (${BMIMark})`);
// }


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI is ${mark.bmi} is higher than ${john.fullName}'s BMI of ${john.bmi}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI is ${john.bmi} is higher than ${mark.fullName}'s BMI of ${mark.bmi}`
  );
} else if ((john.bmi = mark.bmi)) {
  console.log(
    `${john.fullName} and ${mark.fullName} have the same BMI, ${john.fullName} ${john.bmi} and ${mark.fullName} ${mark.bmi}.`
  );
} else {
  console.log(`Error`);
}
*/

// this is the same as the loop but manually
/*console.log(`Lifting weights repetition 1` );
console.log(`Lifting weights repetition 2` );
console.log(`Lifting weights repetition 3` );
console.log(`Lifting weights repetition 4` );
console.log(`Lifting weights repetition 5` );
console.log(`Lifting weights repetition 6` );
console.log(`Lifting weights repetition 7` );
console.log(`Lifting weights repetition 8` );
console.log(`Lifting weights repetition 9` );
console.log(`Lifting weights repetition 10`);
*/

// loops - keeps running while condition is true
// reps + 1 = reps++

// for (let reps = 1; reps <= 10; reps++) {
//   console.log(`Lifting weights repetition ${reps}`);
// }
// console.log(reps);
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

function printArrayAddTypes() {
  for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
  }
}

printArrayAddTypes();
console.log(types);

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

// function printArrayAddTypes() {
//   for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
//   }
// }

// printArrayAddTypes();
// console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break statement
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
*/
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`While: Lifting weight repetition ${rep}`);
  rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
/*
GOOD LUCK 😀
*/

let billValue;
let tipValue;
let finalBill;
let i = 0;

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

// This was my answer
// while (i <= bills.length - 1) {
//   tipValue = calcTip(bills[i]);
//   billValue = bills[i] + tipValue;
//   tips.push(tipValue);
//   totals.push(billValue);
//   console.log(
//     `${i + 1} - bill: $${bills[i]}, tip: $${tipValue}, total: $${billValue}`
//   );
//   i++;
// }

// This is the book answer
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// bonus

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));
