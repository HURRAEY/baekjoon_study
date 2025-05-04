function solve(input) {

  const a = input[0][0]
  const b = input[0][1]

  const numA = Number(a)
  const numB = Number(b)



  const answer = (numA+numB);

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
  .map((row) => row.split(" "));

console.log(solve(input));
