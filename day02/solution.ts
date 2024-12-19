const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();
const inputDataLines = inputData.split("\n");

const reports = inputDataLines.map((line) => {
  return line.split(" ").map((value) => parseInt(value));
});

console.log(reports);
