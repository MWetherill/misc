// TASK

// A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.
// If we have cities A, B and C, possible paths would be:
// A -> B -> C
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B
// ... which gives us 6 as the possible number of paths.

// EXAMPLES

// paths(4) ➞ 24
// paths(1) ➞ 1
// paths(9) ➞ 362880

// NOTES

// This challenge is describing a factorial.
// Try this with recursion as well as a loop

// CODE

function paths(n) {
  
}

// TESTS

console.log(paths(4));
console.log(paths(1));
console.log(paths(9));