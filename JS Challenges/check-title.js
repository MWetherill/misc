// Check if a string is a title string or not. A title string is one which has all the words in the string start with a upper case letter

// EXAMPLES
// checkTitle("A Mind Boggling Achievement") ➞ true
// checkTitle("A Simple Java Script Program!") ➞ true
// checkTitle("Water is transparent") ➞ false

function checkTitle(str) {
  arr = str.split(" ");
  result = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) !== arr[i].charAt(0).toUpperCase()) {
      result = false;
      break;
    }
  }
  console.log(result);
  return result;
}

checkTitle("A Mind Boggling Achievement");
checkTitle("A Simple Java Script Program!");
checkTitle("Water is transparent");