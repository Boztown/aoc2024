const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();
const inputDataLines = inputData.trimEnd().split("\n");
const reports = inputDataLines.map((line) => {
  return line.split(" ").map((value) => parseInt(value));
});
console.log("Total Reports:", reports.length);

export function solutionPartOne() {
  const safeReports = [...reports].filter(isSafe);
  console.log("SAFE REPORTS:", safeReports.length);
  return safeReports.length;
}
// solutionPartOne();

export function solutionPartTwo() {
  const safeReportsWithDampener = [...reports].filter(isSafeWithDampener);
  console.log("SAFE REPORTS WITH DAMPENER:", safeReportsWithDampener.length);
  return safeReportsWithDampener.length;
}
// solutionPartTwo();

export function isSafe(report: number[]) {
  const result = safeGradualChange(report);
  return result.safe;
}

export function isSafeWithDampener(report: number[]) {
  let isSafe = false;
  const result = safeGradualChange(report);

  if (result.safe) {
    isSafe = true;
  } else {
    for (let i = 0; i < report.length; i++) {
      const newReport = [...report];
      newReport.splice(i, 1);
      const newResult = safeGradualChange(newReport);
      if (newResult.safe) {
        isSafe = true;
        break;
      }
    }
  }

  if (!isSafe) {
    console.log("Unfixable report:", report);
  }

  return isSafe;
}

export function safeGradualChange(report: number[]) {
  let prevDirection = undefined;
  const badLevelIndexes = [];
  // console.log("Report:", report);
  for (let i = 0; i < report.length; i++) {
    // console.log("Current:", report[i]);
    const current = report[i];
    let next = report[i + 1];

    if (!next) {
      break;
    }

    // console.log("Current:", current, "Next:", next);

    const diff = next - current;
    const currentDirection = Math.sign(diff);

    if (prevDirection === undefined) {
      prevDirection = currentDirection;
    }

    if (prevDirection !== currentDirection) {
      badLevelIndexes.push(i);
    } else if (Math.abs(diff) > 3 || Math.abs(diff) === 0) {
      badLevelIndexes.push(i);
    }

    prevDirection = currentDirection;
  }

  return { safe: badLevelIndexes.length === 0, badLevelIndexes };
}
