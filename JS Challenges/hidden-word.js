// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// EXAMPLES
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

function detectWord(str) {

  var arr = str.split("");

  var wordArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toLowerCase()) {
      wordArr.push(arr[i]);
    }
  }

  word = wordArr.join("");

  console.log(word);
  return word;

}

detectWord("UcUNFYGaFYFYGtNUH");
detectWord("bEEFGBuFBRrHgUHlNFYaYr");
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");
detectWord("JHJHbeJHJHJHAaRFGFGDFDRrHGHGHGHGHGdKJHKJKJ");