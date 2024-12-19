const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();
const inputDataLines = inputData.split("\n");

const list1: number[] = [];
const list2: number[] = [];

inputDataLines.forEach((line) => {
  const columns = line.split("   ");
  if (columns[0]) {
    list1.push(parseInt(columns[0]));
  }
  if (columns[1]) {
    list2.push(parseInt(columns[1]));
  }
});

const list1Sorted = [...list1].sort();
const list2Sorted = [...list2].sort();

function findTotalDistance() {
  let totalDistance = 0;

  list1Sorted.forEach((list1Item, index) => {
    const list2Item = list2Sorted[index];
    const distance = Math.abs(list1Item - list2Item);
    console.log(
      `Distance between ${list1Item} and ${list2Item} is ${distance}`
    );
    totalDistance += distance;
  });

  console.log("------------------------------");
  console.log(`Total distance is ${totalDistance}`);
}

findTotalDistance();

function findListSimilarity() {
  let similarityScore = 0;

  list1Sorted.forEach((list1Item) => {
    const matches = list2Sorted.filter((list2Item) => list2Item === list1Item);
    similarityScore += list1Item * matches.length;
  });

  console.log("------------------------------");
  console.log(`Similarity score is ${similarityScore}`);
}

findListSimilarity();
