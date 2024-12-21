import { expect, test } from "bun:test";
import { runWithControls, runWithoutControls } from "./solution";

test("solution part one (no DO and DONT controls)", () => {
  const result = runWithoutControls();
  expect(result).toBe(173419328);
});

test("solution part two (DO and DONT controls)", () => {
  const result = runWithControls();
  expect(result).toBe(90669332);
});
