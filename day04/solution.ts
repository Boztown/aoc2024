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

// console.log(
//   m.getLineFromPoint({
//     point: { x: 0, y: 0 },
//     lineLength: 5,
//     direction: "DownRight",
//   })
// );

pp(
  m.getAllLinesFromPoint({
    point: { x: 3, y: 0 },
    count: 4,
  })
);

function pp(s: (string | undefined)[][]) {
  const prettier = s.map((line) => {
    return line.map((char) => {
      if (char === undefined) {
        return "-";
      } else {
        return char;
      }
    });
  });
  prettier.forEach((line) => console.log(line));
}
