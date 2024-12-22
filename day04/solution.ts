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
  let totalMatches = 0;
  m.iteratePoints((point) => {
    const subM = m.getSurroudingMatrix(point, 1);
    const lines = subM.getAllLinesFromPoint({
      point: { x: 1, y: 1 },
      count: 2,
    });
    const diagonal1 = [
      lines.UpLeft[1],
      subM.get({ x: 1, y: 1 }),
      lines.DownRight[1],
    ];
    const diagonal2 = [
      lines.UpRight[1],
      subM.get({ x: 1, y: 1 }),
      lines.DownLeft[1],
    ];

    const x1 =
      diagonal1.join("") === "MAS" || diagonal1.reverse().join("") === "MAS";
    const x2 =
      diagonal2.join("") === "MAS" || diagonal2.reverse().join("") === "MAS";

    if (x1 && x2) {
      totalMatches++;
    }
  });

  return totalMatches;
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
