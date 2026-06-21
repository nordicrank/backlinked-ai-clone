import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "dist");

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const entries = [
  "index.html",
  "support.js",
  "assets",
  "screenshots",
  "uploads",
  ".thumbnail",
  "NordicRank Homepage.html",
  "NordicRank Homepage.dc.html",
  "NordicRank Homepage v2.dc.html",
  "NordicRank Homepage v3.dc.html",
  "NordicRank Homepage (standalone source).dc.html",
  "nordicrank-homepage-content-plan.md"
];

for (const entry of entries) {
  const source = path.join(root, entry);
  if (!fs.existsSync(source)) continue;

  fs.cpSync(source, path.join(outDir, entry), { recursive: true });
}
