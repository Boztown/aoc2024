const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();
const inputDataLines = inputData.trimEnd().split("\n");

const reports = inputDataLines.map((line) => {
  return line.split(" ").map((value) => parseInt(value));
});

const safeReports = reports.filter(isSafe);
console.log("SAFE REPORTS:", safeReports.length);

function isSafe(report: number[]) {
  return (
    safeGradualChange(report, (a, b) => a < b) ||
    safeGradualChange(report, (a, b) => a > b)
  );
}

export function safeGradualChange(
  report: number[],
  comparator: (a: number, b: number) => boolean
) {
  let stableChange = true;
  for (let i = 0; i < report.length; i++) {
    const current = report[i];
    const next = report[i + 1];

    if (!next) {
      break;
    }

    if (comparator(current, next)) {
      stableChange = false;
      break;
    }

    const diff = Math.abs(current - next);
    if (diff === 0 || diff > 3) {
      stableChange = false;
      break;
    }
  }

  return stableChange;
}
