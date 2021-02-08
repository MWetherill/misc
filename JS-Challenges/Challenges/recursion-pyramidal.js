// BAXKGROUND

// How many unique squares are there in a 4 x 4 grid?
// Ask the students how many squares are there in a 4x4 grid of squares. Many will answer 16. Tell them that there are more than that.
// After they have had a chance to think about and have yelled out some more answers ask them how many squares there are in a 1x1 grid (1) and in a 2x2 grid (the 4 small squares and the 1 big square = 5) and a 3x3 grid (9 small squares, 4 of the 2x2, and 1 big one = 14).

// So the total for a 4x4 is 16 + 9 + 4 + 1 = 30. The total for any nxn square is n squared + n-1 squared + n-2 sqaured, etc. down to 1 when n=1.

// TASK

// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

// EXAMPLES

// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55

// NOTES

// Input is a positive integer.
// Square pyramidal number.

// CODE

function numberSquares(n) {
  
}

// TESTS

console.log(numberSquares(0));
console.log(numberSquares(2));
console.log(numberSquares(4));
console.log(numberSquares(5));