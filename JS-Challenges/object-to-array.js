// TASK
// Write a function that converts an object into an array of keys and values.

// EXAMPLES

// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(obj) {

  var keys = Object.keys(obj);
  var values = Object.values(obj);

  var arr = [];
  for (var i = 0; i < keys.length; i++) {
    arr[i] = [keys[i], values[i]];
  }

  return arr;

};

console.log(objectToArray({
  D: 1,
  B: 2,
  C: 3
}));

console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}));