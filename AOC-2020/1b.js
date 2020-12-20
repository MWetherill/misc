const fs = require('fs');
const { listeners } = require('process');
const input = fs.readFileSync('1-input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

for (var i = 0; i < input.length; i++) {
  for (var j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] < 2020) {
      for (var k = i + 2; k < input.length; k++) {
        if(input[i] + input[j] + input[k] == 2020) {
          const result = input[i] * input[j] * input[k];
          console.log(result);
          return result;
        }
      }
    }
  }
}