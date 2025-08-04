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
console.log(this);

const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  const age = 2037 - birthYear;
  console.log(this);
};

calcAgeArrow(1980);
