import { readFileSync } from "fs";

export const rawData = readFileSync("src/Cales_trim_down.csv", {
  encoding: "utf-8",
});
