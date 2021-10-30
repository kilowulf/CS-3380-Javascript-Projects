/* global scope - undeclared variables
   undeclared variables are assigned to the global object window

   expression vs. statement vs. expression statements::
   expression - gives a value

   statement - instruction, go do something
   let name = 'string'

   expression statement - go do something and give me a value
   name = 'aaron'
   window.name
*/

function showPoint(x, y) {
  // let x = pt.x
  // let y = pt.y
  console.log(x, y);
}

const pt = { x: 50, y: 75 };

showPoint(pt.x, pt.y);

// filesyncspike

const Fs = require("fs");
const args = process.argv.slice(2);
const [src, dest] = args;
const text = Fs.readFileSync(src, "UTF8");
const lines = text.split(/\r?\n/);
let i = 1;
let j = String(i).padStart(5, "0");
let l = parseInt(j);
const numberedLines = lines.map((line) => `${l++} ${line}`);
numberedLines.push("EOF");

Fs.writeFileSync(dest, numberedLines.join("\r\n"));

const k = 3;
console.log(String(k).padStart(6, "0"));
console.log(typeof k);

let n = 5;

console.log(n, typeof n);
n = new Number(5);
console.log(n, typeof n);

// Question for next class - submission link for our SyncSpike project
