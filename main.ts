// Charm the Commuter: Forecast a City That Isn't — one forecast line,
// written to /output/entry.txt. The forecast is the whole entry:
// a single line, at most 140 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const forecast =
  "In Snuzzlewick: light drizzle of tomato soup, 19°C, with a 90% chance your umbrella files for divorce before lunch.";

// The gate only accepts 1 to 140 characters of UTF-8 text, so check first.
if (forecast.length < 1 || forecast.length > 140) {
  throw new Error(`forecast must be 1-140 characters, got ${forecast.length}`);
}
if (forecast.includes("\n")) {
  throw new Error("forecast must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", forecast + "\n", "utf8");
console.log(forecast);
