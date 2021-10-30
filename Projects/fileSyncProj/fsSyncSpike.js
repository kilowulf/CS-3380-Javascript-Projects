/** CS 3380-001
 * Aaron Brown
 * Date: Sept. 8, 2021
 * fsSyncSpike project
 */

const fs = require("fs");
const args = process.argv.slice(2);
const [src, dst] = args;
const text = fs.readFileSync(src, "UTF8");
const lines = text.split(/\r?\n/);
let i = 1;
const numberedLines = lines.map(
  (line) => `${(i++).toString().padStart(5, "0")} ${line}`
);
numberedLines.push("EOF");

fs.writeFileSync(dst, numberedLines.join("\r\n"));
