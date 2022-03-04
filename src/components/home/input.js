let input = require("fs")
  .readFileSync("../../assets/input.txt")
  .toString()
  .split("\n");

let secterKeyword = {};

for (let i = 0; i < input.length; i++) {
  if (i === 0 || input[i][0] !== input[i - 1][0]) {
    secterKeyword[input[i][0]] = [input[i]];
  }
  secterKeyword[input[i][0]].push(input[i]);
}

console.log(secterKeyword);
