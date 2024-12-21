const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();

const mulCommandRegex = /mul\(\d{0,3},\d{0,3}\)/gm;
const regexResult = inputData.match(mulCommandRegex);

if (!regexResult) {
  console.log("Nothing found");
  process.exit();
}

for (const mul of regexResult) {
  console.log("->", mul);
}
