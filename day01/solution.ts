const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();
const inputDataLines = inputData.split("\n");

const list1: string[] = [];
const list2: string[] = [];

inputDataLines.forEach((line) => {
  const columns = line.split("   ");
  list1.push(columns[0]);
  list2.push(columns[1]);
});

console.log(list1);
