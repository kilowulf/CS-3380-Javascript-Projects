/* started on test.js - fileSpikeAutoBot.js 
    synchronous - blocking,
    asynchronous - non blocking
 */
console.log("Startng Autobot Grader");
const child_process = require("child_process");
const fs = require("fs");
const answer = fs.readFileSync("readme.num.txt").toString();
// Run the student's file spike, get the output from it
child_process.execSync("node fileSyncSpike.js readme.txt readme.num.txt");
const result = fs.readFileSync("readme.num.txt").toString();
if (result === answer) console.log("PASS");
else console.log(result);
