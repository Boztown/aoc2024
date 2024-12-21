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
    // console.log("safe");
    isSafe = true;
  } else {
    // console.log("");
    // console.log(report);
    // console.log(result);
    const { badLevelIndexes } = result;
    // We'll always try removing the last one because the `badLevelIndexes` will
    // never contain it. Ideally it would.
    badLevelIndexes.push(report.length - 1);
    // console.log("Bad Level Indexes:", badLevelIndexes);
    for (const index of badLevelIndexes) {
      const newReport = [...report];
      newReport.splice(index, 1);
      // console.log("Re-running");
      const newResult = safeGradualChange(newReport);
      if (newResult.safe) {
        // console.log("Safe Dampened Report:", newReport);
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
