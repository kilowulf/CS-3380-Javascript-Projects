/** CS 3380-001
 * Aaron Brown
 * Date: Sept. 9, 2021
 * fsPromiseSpike project
 */

const fs = require("fs");
const fsPromises = require("fs").promises;

fsPromises
  .readFile("./readme.txt", "utf8")
  .then((data) => {
    let text = data.toString();
    const lines = text.split(/\r?\n/);
    let i = 1;
    const numberedLines = lines.map(
      (line) => `${(i++).toString().padStart(5, "0")} ${line}`
    );
    numberedLines.push("EOF");

    fsPromises
      .writeFile("./readme.num.txt", numberedLines.join("\r\n"))
      .then()
      .catch((err) => {
        if (err) throw err;
        console.log("The file was not saved");
      });
  })
  .catch((err) => {
    if (err) throw err;
    console.log("The file has been saved");
  });
