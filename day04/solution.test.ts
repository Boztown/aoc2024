import { expect, test } from "bun:test";
import { runSolution01, runSolution02 } from "./solution";

const exampleData = `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`;

test("solution 01 - example data", () => {
  const result = runSolution01(exampleData);
  expect(result).toBe(18);
});

test("solution 01 - input data", async () => {
  const inputFile = Bun.file("input.txt");
  const inputData = await inputFile.text();
  const result = runSolution01(inputData);
  expect(result).toBe(2543);
});

const exampleData02 = `
.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........
`;

test("solution 02 - example data", () => {
  const result = runSolution02(exampleData02);
  expect(result).toBe(9);
});
