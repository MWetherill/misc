// TASK
// Create a function that takes two strings, a and b. Return the number of matching positions where they both contain the same exact two letters one after the other.

// For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

// EXAMPLES
// strMatchBy2char("yytaazz", "yyjaaz") ➞ 3
// strMatchBy2char("edabit", "ed") 1 ➞ 1
// strMatchBy2char("", "") ➞ 0

// NOTES
// Don't forget to return the result.

function strMatchBy2char(a, b) {

  // split the two starting sequences into arrays
	var arrA = a.split("");
  var arrB = b.split("");

  // create a two new arrays from each of the above listing the array values in pairs - the current array item and the one directly after it
  var newArrA = [];
  for (var i = 0; i < arrA.length - 1; i++) {
    newArrA.push(arrA[i] + arrA[i + 1]);
  }

  var newArrB = [];
  for (var i = 0; i < arrB.length - 1; i++) {
    newArrB.push(arrB[i] + arrB[i + 1]);
  }

  // loop through the second new array within the first comparing values, increase the count by 1 if there is a match
  var count = 0;
  for (var k = 0; k < newArrA.length; k++) {
    for (var l = 0; l < newArrB.length; l++) {
      if (newArrA[k] == newArrB[l]) {
        count++;
      }
    }
  }

  return count;
}

console.log(strMatchBy2char("yytaazz", "yyjaaz"));
console.log(strMatchBy2char("edabit", "ed"));
console.log(strMatchBy2char("", ""));