// TASK
// Create a function that counts the integer's number of digits.

// EXAMPLES
// count(318) ➞ 3
// count(-92563) ➞ 5
// count(4666) ➞ 4
// count(-314890) ➞ 6
// count(654321) ➞ 6
// count(638476) ➞ 6

function count(num) {
  var arr = num.toString().split("");

  var count = 0;
  for (var i = 0; i < arr.length; i ++) {
    arr[i] = Number.parseInt(arr[i]);
    if (Number.isInteger(arr[i])) {
      count = count + 1;
    }
  }

  return count;
}

console.log(count(318));
console.log(count(-92563));
// console.log(count(4666));
// console.log(count(-314890));
// console.log(count(654321));
// console.log(count(638476));