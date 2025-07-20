"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// FUNCTIONS

// function logger() {}

// Funccytion expression
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// console.log(calcAge(1997));
// const friends = ["Michael", "Steven", "John"];

// // AD ELEMENTS
// // push and unshift
// friends.push("Uwem");
// // REMOVE ELEMENTS - POP
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// console.log(friends.includes("Steven"));

// JS OBJECTS
// const userName = {
//   name: "Emmanuel",
//   friends: ["Michael", "JOhn", "Emmanuel"],
// };

// console.log(
//   `${userName.name} has ${userName.friends.length} friends, and his best friend is called ${userName.friends[0]}`
// );

// const emmanuel = {
//   firstName: "Emmanuel",
//   lastName: "Samuel",
//   birthYear: "1997",
//   job: "teacher",
//   friends: ["Michael", "JOhn", "Emmanuel"],
//   hasDriversLicence: false,

//   // calcAge: function (birthYear) {
//   //   return 2025 - birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicence ? "a" : "no"} driver's license`;
//   },
// };

// console.log(emmanuel.calcAge());
// console.log(emmanuel.getSummary());
/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 100,
//   height: 2.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(
//   `${john.fullName}'s BMI (${john.calcBMI().toFixed(2)}) is ${
//     john.calcBMI().toFixed(2) > mark.calcBMI().toFixed(2) ? "higher" : "lower"
//   } than ${mark.fullName}'s (${mark.calcBMI().toFixed(2)})`
// );

// LOOPS
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);

  // tips.push(calcTip(bills[i]))
  // totals.push()
}

console.log(`Tips: ${tips}`);
console.log(`Bills: ${bills}`);
