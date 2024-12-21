import { test } from "bun:test";
import { parseAndBuildCommandList } from "./solution";

test("solution part one", () => {
  const result = parseAndBuildCommandList();
  console.log(result);
});
