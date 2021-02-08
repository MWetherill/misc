// TASK
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// EXAMPLES
// mostExpensiveItem({
//   piano: 2000,
// }) ➞ "piano"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
// }) ➞ "tv"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }) ➞ "stereo"

// NOTES
// There will only be one most valuable item (no ties).
// The object will always contain at least one item (no empty objects).

// CODE

function mostExpensiveItem(obj) {
  
  // get an array of the values
  var arrVals = Object.values(obj);
  // find the highest value
  highVal = Math.max(...arrVals);

  // find the matching key in the origial object
  var matchedKey =  Object.keys(obj).find(key => obj[key] === highVal);

  return matchedKey;

}

// TESTS

console.log(mostExpensiveItem({
  piano: 2000,
}));

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
}));

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
}));