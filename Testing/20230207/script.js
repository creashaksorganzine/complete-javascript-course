const currentYear = new Date().getFullYear();
console.log(currentYear);
/*
const object = {
  property1: `one `,
  property2: `two `,
  property3: `three `,
  birthYear: 1984,
  funCtion: function () {
    this.OBJ = this.property1 + this.property2 + this.property3;
    return this.bmi;
  },
  // calcAge: function () {
  // this.age = currentYear - this.birthYear;
  age: function () {
    this.age = currentYear - this.birthYear;
  },
};

object.funCtion();
object.age();
console.log(object.OBJ);
console.log(object.age);

// if
let isTrue;
let valueIfTrue;
let valueIfFalse;

if (`${isTrue}`) {
  {
    `${valueIfTrue}`;
  }
} else {
  {
    `${valueIfFalse}`;
  }
}

let century;
if (currentYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

*/

Array();

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

const insertname = {
  fullName: "x",
  mass: 1984,
  height: 1776,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
insertname.calcBMI();
console.log(mark.bmi, john.bmi, insertname.bmi);

// while loop
// x = 12;
// while (x >= 0) {
//   if (x <= 5) {
//     x--;
//     continue;
//   }
//   console.log(x);
//   x--;
// }

// y = 0;
// while (y <= 10) {
//   if (y <= 0) {
//     x++;
//   }
//   console.log(y);
//   y++;
// }

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}

/*
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
