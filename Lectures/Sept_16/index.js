/*IIFE: Immediately invoked function expression
    - runs as soon as its defined
    - also known as Self-Executing Anonymous Function

    2 components
        - anonymous function with lexical scope enclosed within group operator ()
        - () at end creates the immediately invoked function
*/
(() => {
  console.log("This is an IIFE too");
})();

(function () {
  let hello = "Hello World!"; // variable discarded after function execution
  console.log(hello);
})();

let world = (function () {
  return "This is my World!"; // assign a a variable and return a value
})();

console.log(world);

/* CS3380 ASI + blooper:
    Automatic Semicolon insertion:(ASI)
        [,(,+,-,/ - watchout if code starts with this
        break, continue, throw, return - watch out if code ends with these

        practice / example code

        let s = "hello crazy world!";
        /[a - z]/g.exec(s);

        let a = b + c;
        (d + e).print();
        let b = "four";
        [a, b] = [b, a];

        let itemsPassed = 0;
        top: for (let i = 0; i < items.length; i++) {
                 if (!tests[i].pass(items[i])) {
                continue;
                top;
                  }
              itemsPassed++;
            }

        function objA(a) {
            return { a };
        }

        function undef() {
             return; // undefined 
        }
        console.log(objA(2));
        console.log(undef());        
    
 */

/* CS3380 Status Reports can Suck:: 
        progressSpike.js code:: 
            considerable more cpu time to print to window vs. write to text file.
        
 * 
 */

//progressSpike.js code
// function reportMillionThings(batchSize) {
//   const label = `chunking every ${batchSize}`;
//   const start = new Date().getTime();

//   for (let i = 0; i <= 1e5; i++) {
//     i = (i * 2) / 2;

//     if (i % batchSize === 0) console.log(`${i.toLocaleString()} of 100,000`);
//   }

//   return `Chunking every ${batchSize} took ${new Date().getTime() - start}`;
// }

// const y = [];
// for (let i = 0; i <= 5; i++) {
//   y.push(reportMillionThings(10 ** i));
// }
// console.log(y);

/*CS3380 JS is Pass by what?:: 
    Parameter passing in javascript done how?
        n passed as 1 into function foo but not changed to 5 
            number passed by value, primitives passed by value
        objA was not ammended or changed with new assignment
            not passed by reference, objects are passed by address
        objB age property was changed to 50 from 3 
            not passed by reference, objects are passed by address
            passed by address is also known as passed by "sharing" *****

 * 
 */

function foo(num, objA, objB) {
  num = 5;
  objA = { pet: "Sally" };
  objB.age = 50;
}

let n = 1;
let kid1 = { name: "Fred", age: 2 };
let kid1Copy = kid1;

let kid2 = { name: "Martha", age: 3 };
let kid2Copy = kid2;

foo(0, kid1, kid2);

console.log(n);
console.log(kid1, kid1 === kid1Copy);
console.log(kid2, kid2 === kid2Copy);

/* REGEX Tools:: 
        REGEX101 - https://regex101.com/ 
        - make sure to switch language to ECMAscript
        \b - border, boundaries
         + - infinite number of
         () - wrap to create group
         $1 search and replace with; needs group
         [BCDEFGHIJKLMNOPQRSTUVWXYZ] - search consonants
 */

/*CS3380 object destructuring primo example:: 
        - crtl h - shortcut to find and replace multiple entries

 */
function printDirEntries({ name, size, children }) {
  // preorder
  if (children) {
    console.log(size, name);
    children.forEach(printDirEntries);
  } else console.log(size, name);
}

person = {
  name: "Jerry",
  size: 23,
  children: [
    {
      name: "sarah",
      size: 23
    },
    {
      name: "Daniel",
      size: 98
    },
    {
      name: "Steve",
      size: 09
    }
  ]
};

printDirEntries(person);

/* CS3380 REGEX 2:: 
    - strings are immutable so when we,
      text = 'foo'; a memory location with string foo is created
      text += 'bar'; new string is created 'foobar' and assigned to text
      string 'foo' however is still in memory and not changed

    - replace(), replaces first occurrence unless a global flag
    - replaceAll(), replaces all occurrences
    - replace() returns a string

    exercises in replit website:
      - spread operator; ...rest 
 */
// console.log("pig latin");
// const fs = require("fs");

// const args = process.argv;
// const textIn = args.pop();
// const textOut =
//   "What is so important about this crazy REGEX stuff? I think that its a bunch of horse malarki";

// let text = fs.readFileSync(textIn, "utf8");
// function titleCase($0, $1, $2, $3) {
//   return "dog";
// }

// const vowelRegex = / /;
// const lowerCaseConsonantRegex = / /;
// const upperCaseConsonantRegex = / /;

// text = text.replace(vowelRegex);
// text = text.replace(lowerCaseConsonantRegex);
// text = text.replace(upperCaseConsonantRegex, titleCase);
// fs.writeFileSync(textOut, text);

/*CS3380 Specific / Generic Naming & Organization:: 

 */

const grades = [23, 99, 101, 93, 92, 84, 78];
const gradesArgs = process.argv.slice(2).map(Number);

function gradeAvg() {
  return gradesArgs.reduce((a, b) => a + b / gradesArgs.length);
}

function avg(arr) {
  return arr.reduce((a, b) => a + b / gradesArgs.length);
}

function main() {
  console.log(`The average grade is ${avg(gradesArgs)}`);
}

main();
