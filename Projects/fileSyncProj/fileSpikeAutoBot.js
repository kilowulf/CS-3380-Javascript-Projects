// console.log(`Starting AutoBot Test...`);
// child = require("child_process");
// import * as child from "child_process";

// need to make sample input file, make manual answer file(expected output)
// run the students fileSpike to get output and compare it to expected answer

//child.execSync("dir");
//child.execSync("node fsSyncSpike readme.txt readme.num.txt"); // synchronous , good when you don't want other processes occurring simultaneously
// open / get output file as string or buffer, if student output is same as expected , pass else fail
// need names of input and output files
// read input into a buffer
//
// fs = require("fs");
// let src = "./readMe2.txt";
// const text = fs.readFileSync(src, "UTF8");
//console.log(text);

console.log("Startng Autobot Grader");
const child_process = require("child_process");
const fs = require("fs");
const answer = fs.readFileSync("readme.num.txt").toString();
// Run the student's file spike, get the output from it
child_process.execSync("node fsSyncSpike.js readme.txt readme.num.txt");
const result = fs.readFileSync("readme.txt").toString();
if (result === answer) console.log("PASS");
else console.log("FAIL");
