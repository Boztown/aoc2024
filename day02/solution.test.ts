import { expect, test } from "bun:test";
import {
  isSafe,
  isSafeWithDampener,
  safeGradualChange,
  solutionPartOne,
  solutionPartTwo,
} from "./solution";

test("solution part one", () => {
  const result = solutionPartOne();
  expect(result).toBe(369);
});

test.only("solution part two", () => {
  const result = solutionPartTwo();
  expect(result).toBe(369);
});

test("safeGradualChange - increasing", () => {
  const report1 = [1, 2, 3, 4, 5];
  expect(safeGradualChange(report1).safe).toBe(true);

  const report2 = [1, 2, 3, 5, 4];
  expect(safeGradualChange(report2).safe).toBe(false);

  const report3 = [1, 2, 3, 5, 6];
  expect(safeGradualChange(report3).safe).toBe(true);

  // Levels don't differ by _at least one_
  const report4 = [1, 2, 3, 3, 3];
  expect(safeGradualChange(report4).safe).toBe(false);

  // Increasing but jumps greater than 3
  const report5 = [1, 2, 7, 11, 14];
  expect(safeGradualChange(report5).safe).toBe(false);
});

test("part two (dampening) example", () => {
  const report1 = [7, 6, 4, 2, 1];
  expect(isSafeWithDampener(report1)).toBe(true);

  const report2 = [1, 2, 7, 8, 9];
  expect(isSafeWithDampener(report2)).toBe(false);

  const report3 = [9, 7, 6, 2, 1];
  expect(isSafeWithDampener(report3)).toBe(false);

  const report4 = [1, 3, 2, 4, 5];
  expect(isSafeWithDampener(report4)).toBe(true);

  const report5 = [8, 6, 4, 4, 1];
  expect(isSafeWithDampener(report5)).toBe(true);

  const report6 = [1, 3, 6, 7, 9];
  expect(isSafeWithDampener(report6)).toBe(true);

  const report7 = [1, 10, 11, 12, 13];
  expect(isSafeWithDampener(report7)).toBe(true);

  const report8 = [18, 16, 15, 14, 12, 9];
  expect(isSafeWithDampener(report8)).toBe(true);

  const report9 = [51, 52, 55, 58, 60, 61, 62, 61];
  expect(isSafeWithDampener(report9)).toBe(true);

  const report9a = [51, 52, 55, 58, 60, 61, 62];
  expect(isSafe(report9a)).toBe(true);
});

test("baddie", () => {
  const report9 = [70, 52, 55, 58, 60, 61, 62];
  expect(isSafeWithDampener(report9)).toBe(true);
});
