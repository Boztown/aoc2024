const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();
const inputDataLines = inputData.split("\n");

const list1: string[] = [];
const list2: string[] = [];

inputDataLines.forEach((line) => {
  const columns = line.split("   ");
  if (columns[0]) {
    list1.push(columns[0]);
  }
  if (columns[1]) {
    list2.push(columns[1]);
  }
});

const list1Sorted = [...list1].sort();
const list2Sorted = [...list2].sort();

let totalDistance = 0;

list1Sorted.forEach((list1Item, index) => {
  const list2Item = list2Sorted[index];
  const distance = Math.abs(parseInt(list1Item) - parseInt(list2Item));
  console.log(`Distance between ${list1Item} and ${list2Item} is ${distance}`);
  totalDistance += distance;
});

console.log("------------------------------");
console.log(`Total distance is ${totalDistance}`);
