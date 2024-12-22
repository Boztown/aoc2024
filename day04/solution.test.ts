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

test("example data", () => {
  const result = runSolution01(exampleData);
  expect(result).toBeUndefined();
});
