import { Matrix } from "./matrix";

const word = "XMAS".split("");

export function runSolution01(data: string) {
  const m = new Matrix(parseToArray(data));
  let foundWords = 0;
  m.iteratePoints((point) => {
    const lines = m.getAllLinesFromPoint({
      point,
      count: 4,
    });
    Object.entries(lines).forEach((line) => {
      const lineString = line[1].join("");

      if (lineString === word.join("")) {
        foundWords++;
      }
    });
  });

  console.log(`Found words:`, foundWords);
  return foundWords;
}

export function runSolution02(data: string) {
  const m = new Matrix(parseToArray(data));
  console.log(m.getSurroudingMatrix({ x: 4, y: 0 }, 2));
}

function parseToArray(data: string): string[][] {
  return data
    .trim()
    .split("\n")
    .map((line) => line.split(""));
}

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
