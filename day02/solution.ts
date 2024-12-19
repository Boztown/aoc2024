const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();
const inputDataLines = inputData.split("\n");

const reports = inputDataLines.map((line) => {
  return line.split(" ").map((value) => parseInt(value));
});

reports.slice(0, 50).forEach((report) => {
  if (allIncreasing(report)) {
    console.log(report, "is increasing");
  } else {
    console.log(report, "is not increasing");
  }
});

export function allIncreasing(report: number[]) {
  let increasing = true;
  for (let i = 0; i < report.length; i++) {
    const current = report[i];
    const next = report[i + 1];

    if (!next) {
      break;
    }

    if (current > next) {
      increasing = false;
      break;
    }

    const diff = Math.abs(current - next);
    if (diff === 0 || diff > 3) {
      increasing = false;
      break;
    }
  }

  return increasing;
}
