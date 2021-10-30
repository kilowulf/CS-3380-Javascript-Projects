/*Callback spike

writeFile: 
    fs.writeFile(file, data[,options], callback)
        default - utf-8
        integer - default octal - 0o666
    regular expressions
    ^a$ - search for first single a on a line with no other characters
    ^a{1,3} - search for a's occuring from 1 to 3 instances
    . - wildcard for any character

    * know difference of a greedy or lazy string match

    use regex101 - smithbob_340934_208948490_BobsScreenshot.png
        
*/

const fs = require("fs");

fs.readFile("./readme.txt", (err, data) => {
  if (err) throw err;
  let text = data.toString();
  const lines = text.split(/\r?\n/);
  let i = 1;
  const numberedLines = lines.map((line) => `${i++} ${line}`);
  numberedLines.push("EOF");

  fs.writeFile("./readme.nm.txt", numberedLines.join("\r\n"), (err) => {
    if (err) throw err;
    console.log("The file has been saved");
  });
});
