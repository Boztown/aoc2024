import { Matrix } from "./matrix";

const word = "XMAS".split("");
const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();

export function runSolution01(data: string) {
  const m = new Matrix(parseToArray(data));
  let foundWords = 0;
  m.iteratePoints((point) => {
    // console.log(`callback:`, point);
    const lines = m.getAllLinesFromPoint({
      point,
      count: 4,
    });
    // pp(lines);
    lines.forEach((line) => {
      console.log("Line:", line, "Word:", word);
      const lineString = line.join("");
      if (lineString === word.join("")) {
        console.log(`Found word from:`, point);
        foundWords++;
      }
      if (lineString === word.reverse().join("")) {
        console.log(`Found REVERSED from:`, point);
        foundWords++;
      }
    });
  });

  console.log(`Found words:`, foundWords);
}

runSolution01(inputData);

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
