// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See matchstick_houses.png for visual.

// Step 0 returns 0 matchsticks.

// The input (step) will always be a non-negative integer.

// Think of the input (step) as the total number of houses that have been connected together.

// EXAMPLES
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

var result = 0;
function matchHouses(step) {

  if (step === 0) {
    return result;
  } else if (step === 1) {
    return 6;
  } else {
    return (step * 5) + 1;
  }

}

console.log(matchHouses(0));
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));