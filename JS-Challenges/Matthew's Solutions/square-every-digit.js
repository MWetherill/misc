// TASK
// Create a function that squares every digit of a number.

// EXAMPLES
// squareDigits(9119) ➞ 811181
// squareDigits(2483) ➞ 416649
// squareDigits(3212) ➞ 9414

// NOTES
// The function receives an integer and must return an integer.

// CODE
function squareDigits(num) {
  var numArr  = num.toString().split("");
  var squareArr = [];
  for (var i = 0; i < numArr.length; i++) {
    var e = parseInt(numArr[i]);
    squareArr.push(e * e);
  }
  return squareArr.join("");
}


// TEST
console.log(squareDigits(9119));
console.log(squareDigits(2483));
console.log(squareDigits(3212));