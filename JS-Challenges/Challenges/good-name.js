// TASK

// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.

// Return your result as per the following rules:
// score <= 60:   "NOT TOO GOOD"
// 61 <= score <= 300:  "PRETTY GOOD"
// 301 <= score <= 599:  "VERY GOOD"
// score >= 600:  "THE BEST"

// EXAMPLES

// nameScore("Mubashir") ➞ "THE BEST"
// nameScore("YOU") ➞ "VERY GOOD"
// nameScore("MATT") ➞ "THE BEST"
// nameScore("PUBG") ➞ "NOT TOO GOOD"

// SCORES //

const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}


// CODE

function nameScore(name) {
  
}

// TESTS
console.log(nameScore("Mubashir")); 
console.log(nameScore("YOU")); 
console.log(nameScore("MATT")); 
console.log(nameScore("PUBG"));