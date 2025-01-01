import { expect, test } from "bun:test";
import { runSolution1 } from "./solution";

test("solution 1", async () => {
  const data = await Bun.file("input.txt").text();
  const result = runSolution1(data);
  expect(result).toBe(6384);
});
