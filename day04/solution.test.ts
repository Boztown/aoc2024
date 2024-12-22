import { test } from "bun:test";

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

type Grid = string[][];
type FixedLengthArray<T, L extends number> = [T, ...T[]] & { length: L };
type Matrix<T, R extends number, C extends number> = FixedLengthArray<
  FixedLengthArray<T, C>,
  R
>;

const testFixedArray: Matrix<string | undefined, 3, 3> = [
  [undefined, "X", "M"],
  [undefined, "A", "M"],
  [undefined, "S", "X"],
];

function parseToGrid(data: string): Grid {
  return data
    .trim()
    .split("\n")
    .map((line) => line.split(""));
}

function printGrid(grid: Grid) {
  grid.forEach((line) => console.log(line));
}

function p(s: string | undefined) {
  if (s === undefined) {
    return "⊗";
  } else {
    return s;
  }
}

function scanGrid(grid: Grid) {
  const pairingMap = [
    ["X", "M"],
    ["M", "A"],
    ["A", "S"],
  ];

  for (let y = 0; y < grid.length; y++) {
    const previousRow = grid[y - 1];
    const currentRow = grid[y];
    const nextRow = grid[y + 1];

    for (let x = 0; x < currentRow.length; x++) {
      const currentValue = currentRow[x];
      const leftValue = currentRow[x - 1];
      const rightValue = currentRow[x + 1];
      const aboveValue = previousRow ? previousRow[x] : undefined;
      const aboveLeftValue = previousRow ? previousRow[x - 1] : undefined;
      const aboveRightValue = previousRow ? previousRow[x + 1] : undefined;
      const belowValue = nextRow ? nextRow[x] : undefined;
      const belowLeftValue = nextRow ? nextRow[x - 1] : undefined;
      const belowRightValue = nextRow ? nextRow[x + 1] : undefined;

      const pairing = pairingMap.find((pair) => pair[0] === currentValue);

      console.log("");
      console.log(
        `${p(aboveLeftValue)}   ${p(aboveValue)}   ${p(aboveRightValue)}`
      );
      console.log(`  ↖ ↑ ↗  `);
      console.log(`${p(leftValue)} ← ${p(currentValue)} → ${p(rightValue)}`);
      console.log(`  ↙ ↓ ↘  `);
      console.log(
        `${p(belowLeftValue)}   ${p(belowValue)}   ${p(belowRightValue)}`
      );
      console.log("");
    }
  }
  printGrid(grid);
}

test("example data", () => {
  const parsed = parseToGrid(exampleData);
  // parsed.forEach((l) => console.log(l));
  scanGrid(parsed);
});
