/** CS 3380-001
 * Aaron Brown
 * Date: Sept. 9, 2021
 * fsCallBacksSpike project
 */

const fs = require("fs");

fs.readFile("./readme.txt", (err, data) => {
  if (err) throw err;
  let text = data.toString();
  const lines = text.split(/\r?\n/);
  let i = 1;
  const numberedLines = lines.map(
    (line) => `${(i++).toString().padStart(5, "0")} ${line}`
  );
  numberedLines.push("EOF");

  fs.writeFile("./readme.num.txt", numberedLines.join("\r\n"), (err) => {
    if (err) throw err;
    console.log("The file has been saved");
  });
});
