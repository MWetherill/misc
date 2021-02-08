// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

function filterArray(arr) {
  var intArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      intArr.push(arr[i]);
    }
  }
  console.log(intArr);
  return intArr;
}


filterArray([1, 2, "a", "b"]);
filterArray([1, "a", "b", 0, 15]);
filterArray([1, 2, "aasf", "1", "123", 123]);