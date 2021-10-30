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

function showPoint(x, y){
    // let x = pt.x
    // let y = pt.y
    console.log(x, y)

}

const pt = {x:50, y:75}

showPoint(pt.x, pt.y)

// filesyncspike

const Fs = require('fs')
const args = process.argv.slice(2)
const [src, dest] = args
const text = Fs.readFileSync(src, 'UTF8')
const lines = text.split(/\r?\n/)
let i = 1
const numberedLines = lines.map(line => `${i++} ${line}`)
numberedLines.push('EOF')

Fs.writeFileSync(dest, numberedLines.join('\r\n'))

const j = 3
console.log(String(i).padStart(6, '0'))


let n = 5

console.log(n, typeof n)
n = new Number(5)
console.log(n, typeof n)