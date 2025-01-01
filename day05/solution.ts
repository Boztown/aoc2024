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

  const goodUpdates = updates.filter((update) => {
    let isValid = true;

    // Only keep rules what correspond to a number in the update
    const applicableRules = rules.filter(
      (r) => update.includes(r[0]) || update.includes(r[0])
    );

    // console.log("Applicable Rules:", applicableRules.length);

    for (const rule of applicableRules) {
      const a = update.indexOf(rule[0]);
      const b = update.indexOf(rule[1]);

      if (a === -1 || b === -1) {
        continue;
      }

      if (b < a) {
        console.log("Move it with rule:", rule, update);
        isValid = false;
      }
    }

    return isValid;
  });

  console.log("Good Updates:", goodUpdates.length);

  for (const g of goodUpdates) {
    if (g.length % 2 === 0) {
      console.log("FOUND EVEN!", g);
      throw "!";
    }
  }

  const middlesColumnValues = goodUpdates.map((update) => {
    console.log("UPDATE:", update);
    const middleIndex = Math.floor(update.length / 2);
    console.log("MIDDLE:", update[middleIndex]);
    return update[middleIndex];
  });

  console.log("Middles...");
  console.log(middlesColumnValues);

  const total = middlesColumnValues.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  console.log("TOTAL", total);

  return total;
}
