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
      throw new Error(`Invalid command string: ${commandString}`);
    }
  }

  public execute(): number {
    return this.a * this.b;
  }
}

const inputFile = Bun.file("input.txt");
const inputData = await inputFile.text();

export function parseCommandList() {
  const regex = /mul\(\d{0,3},\d{0,3}\)|do\(\)|don't\(\)/gm;
  return inputData.match(regex)!;
}

function runWithoutControls() {
  const commandList = parseCommandList();
  let total = 0;

  for (const cmd of commandList) {
    if (cmd.includes("mul")) {
      const mulC = new MulCommand(cmd);
      const result = mulC.execute();
      total += result;
    }
  }

  console.log("Without Controls:", total);
}

function runWithControls() {
  const commandList = parseCommandList();
  let total = 0;
  let enabled = true;

  for (const cmd of commandList) {
    if (cmd.includes("mul") && enabled) {
      const mulC = new MulCommand(cmd);
      const result = mulC.execute();
      total += result;
    }

    if (cmd.includes("do()")) {
      enabled = true;
    }

    if (cmd.includes("don't()")) {
      enabled = false;
    }
  }

  console.log("With Controls:", total);
}

runWithoutControls();
runWithControls();
