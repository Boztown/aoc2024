const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();

const mulCommandRegex = /mul\(\d{0,3},\d{0,3}\)/gm;
const regexResult = inputData.match(mulCommandRegex);

if (!regexResult) {
  console.log("Nothing found");
  process.exit();
}

let total = 0;

for (const mul of regexResult) {
  const mulExtract = /\d{1,3}/g;
  const inputNumbers = mul.match(mulExtract);
  if (inputNumbers) {
    const result = parseInt(inputNumbers[0]) * parseInt(inputNumbers[1]);
    total += result;
    console.log("->", mul, "=", result);
  }
}

console.log("------ TOTAL ------");
console.log(`     ${total}       `);
