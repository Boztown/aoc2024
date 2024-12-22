import { Matrix } from "./matrix";

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

function parseToArray(data: string): string[][] {
  return data
    .trim()
    .split("\n")
    .map((line) => line.split(""));
}

const m = new Matrix(parseToArray(exampleData));
console.log(
  m.getLineFromPoint({
    point: { x: 0, y: 0 },
    count: 5,
    direction: "DownRight",
  })
);
