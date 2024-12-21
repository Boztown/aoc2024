abstract class Command {
  public commandString: string;

  constructor(commandString: string) {
    this.commandString = commandString;
  }

  public abstract execute(): number;
}

class MulCommand extends Command {
  public a: number;
  public b: number;

  constructor(commandString: string) {
    super(commandString);
    const mulExtract = /\d{1,3}/g;
    const inputNumbers = commandString.match(mulExtract);
    if (inputNumbers) {
      this.a = parseInt(inputNumbers[0]);
      this.b = parseInt(inputNumbers[1]);
    } else {
      throw new Error("Invalid command string");
    }
  }

  public execute(): number {
    return this.a * this.b;
  }
}

const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();

const mulCommandRegex = /mul\(\d{0,3},\d{0,3}\)/gm;
const regexResult = inputData.match(mulCommandRegex);

if (!regexResult) {
  console.log("Nothing found");
  process.exit();
}

let total = 0;

for (const mul of regexResult) {
  const mulC = new MulCommand(mul);
  const result = mulC.execute();
  total += result;
  console.log("->", mul, "=", result);
}

console.log("------ TOTAL ------");
console.log(`     ${total}       `);
