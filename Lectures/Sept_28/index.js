console.log("Hello word!")
/* Video: NodeJs
    on() - callback will be called multiple times
    once() - executes once, 
    
    3 streams: 
        stdin - keyboard
        stdout - terminal, display
        stderror - error stream

    operating system knows how to handle stdout, stdin, stderr
        ex. node <file,js> > <file.txt> - command line to direct stdout to a file
        - >> append also will work with redirect, it will add copy to existing data
        - || pipe operator, 

    child_process.exec - opens another shell, similar to spawn command



 */

const cp = require("child_process")

cp.exec('dir', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data)
})

// cp.exec('node readStream', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// })

const questionApp = cp.spawn("node", ["questions.js"])

questionApp.stdin.write("Alex \n");
questionApp.stdin.write("John \n");
questionApp.stdin.write("Dave \n");


questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log('questionapp proccess app closed')
});

// redirect a file
console.log('Starting a autobot grader');

const child_process = require('child_process');
const fs = require('fs');
const answer = fs.readFileSync('readmenum.txt');
// console.log(answer)


console.log(child_process.execSync('node index.js readme.txt readmenum.txt').toString());

const result = fs.readFileSync('readmenum.txt').toString()
if (result === answer) console.log('PASS');
else console.log('FAIL')







// console.error('this is an error');
// cp.exec('cls');
// process.stdin.write('clear')  // returns a write EPIPE error
