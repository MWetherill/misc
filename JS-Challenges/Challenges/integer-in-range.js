// TASK

// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

// EXAMPLES

// intWithinBounds(3, 1, 9) ➞ true
// intWithinBounds(6, 1, 6) ➞ false
// intWithinBounds(4.5, 3, 8) ➞ true

// NOTES

// The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
// Bounds will be always given as integers.

function intWithinBounds(n, lower, upper) {

  return (n >= lower && n < upper) ? "true" : "false";

}


console.log(intWithinBounds(3, 1, 9));
console.log(intWithinBounds(6, 1, 6));
console.log(intWithinBounds(4.5, 3, 8));