import { test } from "bun:test";
import { runSolution1 } from "./solution";

test("solution 1", async () => {
  const data = await Bun.file("input.txt").text();
  runSolution1(data);
});
