/*Asynchronuos:
    networking and file system operations have longest waiting time.
    - simultaneously executed tasks 
    - callbacks used in this technique
    - lambda
 Synchronuous:
    - single task execution 

 Callbacks:
    - callback is a function passed as an argument to another function.
    - 
    
    difference between the arrow function and standard function:
    - 

    Objects:(javascript, Json)
    - 

*/


// reading a json object
let fs = require('fs');

data = fs.readFile('./data.json', 'utf-8', (err, data) => {
    let parseData = JSON.parse(data);
    console.log(parseData);
});


// using a parseInt
let str = "12 apples"
console.log(parseInt(str))  // stops at first non-number character
                            // ignores whitespace
                            // returns NaN when character is 
                            // non-number
console.log(parseFloat(str))
let dataType = typeof(parseInt(str))
console.log(dataType);

let x = {
    name: 'Frost',
    age: 33
}
let x2 = JSON.stringify(x)
let x3 = JSON.parse(x2)
let x4 = x3


console.log(x, x3)
console.log(x == x3) // not equal
console.log(x2 === x3)
console.log(x4 === x3)  // true


// getting arguments
console.log(process.argv)
// run in terminal then enter arguments after node index,js
// node index.js false, 34, true, 
// arguments returned are all string
// underscore will create a variable

// best way to grab data from terminal
const args = process.argv.slice(2) // starts at index 2
let numOfFilesToSearch = args[0]
let includeExecution = args[1]
let logInfo = args[2]
let resultFile = args[3]
console.log(numOfFilesToSearch, includeExecution, logInfo, resultFile)

                    
                            