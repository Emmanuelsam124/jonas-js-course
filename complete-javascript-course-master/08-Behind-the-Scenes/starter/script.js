'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `YOu are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Emmanuel';
// calcAge(1991);

// console.log(age);

// const age = 23;

// The "this" keyword
// console.log(this);

// const calcAge = function (birthYear) {
//   const age = 2037 - birthYear;
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   const age = 2037 - birthYear;
//   console.log(this);
// };

// calcAgeArrow(1980);

// let firstName = 'JOhn';
// const jonas = {
//   firstName: 'JOnas',
//   yeyar: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   // This will cause undefined
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// console.log(jonas.greet());

// Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 6, 7, 8);
// var addArrow = (a, b) => a + b;
const jessica1 = {
  firstName: 'Emmanuel',
  lastName: 'Samuel',
  age: 27,
};

const marriedJessica = jessica1;

const jessica = {
  firstName: 'Emmanuel',
  lastName: 'Samuel',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Jessica';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// console.log('Before', jessica);
// console.log('After', jessicaCopy);

// Deep copy/clone

const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Before', jessica);
console.log('After', jessicaClone);
