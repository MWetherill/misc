// TASK

// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// EXAMPLES

// const stolenItems = {
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// } ➞ 100

// const stolenItems = {
//   painting: 20000,
// } ➞ 20000

// const stolenItems = {} ➞ "Lucky you!"

// NOTES

// The item value is always positive.

// CODE

function calculateLosses(obj) {

}

// TESTS

const stolenItems1 = {
  tv: 30,
  skate: 20,
  stereo: 50,
} 

console.log(calculateLosses(stolenItems1));

const stolenItems2 = {
  painting: 20000,
}

console.log(calculateLosses(stolenItems2));

const stolenItems3 = {}

console.log(calculateLosses(stolenItems3));