import { expect, test } from "bun:test";
import { safeGradualChange } from "./solution";

test("safeGradualChange - increasing", () => {
  const report1 = [1, 2, 3, 4, 5];
  const increaseComparator = (a: number, b: number) => a > b;
  expect(safeGradualChange(report1, increaseComparator)).toBe(true);

  const report2 = [1, 2, 3, 5, 4];
  expect(safeGradualChange(report2, increaseComparator)).toBe(false);

  const report3 = [1, 2, 3, 5, 6];
  expect(safeGradualChange(report3, increaseComparator)).toBe(true);

  // Levels don't differ by _at least one_
  const report4 = [1, 2, 3, 3, 3];
  expect(safeGradualChange(report4, increaseComparator)).toBe(false);

  // Increasing but jumps greater than 3
  const report5 = [1, 2, 7, 11, 14];
  expect(safeGradualChange(report5, increaseComparator)).toBe(false);
});
