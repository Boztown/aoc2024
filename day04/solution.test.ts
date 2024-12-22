import { expect, test } from "bun:test";
import { runSolution01 } from "./solution";

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
