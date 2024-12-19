import { expect, test } from "bun:test";
import { allIncreasing } from "./solution";

test("allIncreasing", () => {
  const report1 = [1, 2, 3, 4, 5];
  expect(allIncreasing(report1)).toBe(true);

  const report2 = [1, 2, 3, 5, 4];
  expect(allIncreasing(report2)).toBe(false);

  const report3 = [1, 2, 3, 5, 6];
  expect(allIncreasing(report3)).toBe(true);

  // Levels don't differ by _at least one_
  const report4 = [1, 2, 3, 3, 3];
  expect(allIncreasing(report4)).toBe(false);

  // Increasing but jumps greater than 3
  const report5 = [1, 2, 7, 11, 14];
  expect(allIncreasing(report5)).toBe(false);
});
