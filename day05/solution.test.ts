import { expect, test } from "bun:test";
import { runSolution1 } from "./solution";

test("solution 1", async () => {
  const data = await Bun.file("input.txt").text();
  const result = runSolution1(data);
  // Current result of 1860 is wrong
  expect(result).toBeUndefined();
});
