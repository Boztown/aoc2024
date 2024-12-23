type Rule = [number, number];

function parseRules(data: string) {
  const output: Rule[] = [];
  const lines = data.split("\n");
  for (const line of lines) {
    if (line == "") {
      break;
    }

    const parsed = line.split("|").map((val) => parseInt(val)) as Rule;
    output.push(parsed);
  }

  return output;
}

function parseUpdates(data: string) {
  const output: number[][] = [];
  const lines = data.split("\n");
  for (const line of lines) {
    if (!line.includes("|") && line.length) {
      const p = line.split(",").map((l) => parseInt(l));
      output.push(p);
    }
  }
  return output;
}

export function runSolution1(data: string) {
  const rules = parseRules(data);
  const updates = parseUpdates(data);

  for (const update of updates.slice(0, 5)) {
    // Only keep rules what correspond to a number in the update
    const applicableRules = rules.filter(
      (r) => update.includes(r[0]) || update.includes(r[0])
    );

    console.log("Applicable Rules:", applicableRules.length);

    for (const rule of applicableRules) {
      const a = update.indexOf(rule[0]);
      const b = update.indexOf(rule[1]);

      if (a === -1 || b === -1) {
        continue;
      }

      if (b < a) {
        console.log("Move it with rule:", rule);
        console.log("Before:", update);
        console.log(`Moving ${rule[0]} and ${rule[1]}`);
        update[a] = rule[1];
        update[b] = rule[0];
        console.log("After:", update);
      }
    }
    // Find index of...
  }
}
