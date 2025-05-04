function solve() {
  let answer;
  return answer;
}
  
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/hurraey/code/baekjoon/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));

console.log(solve());
