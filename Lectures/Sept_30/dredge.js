/* New Project - "diskhog"

    help file system vs. text - texts can be changed, mutated
    file system or function encapsulates the data to ensure no
    mutation, like a function usage().

    REPL - read evaluate print loop; 
    TTY - text telephone
    Globbing - '*'; series of wildcards
             - '?'; 
             - '*\....' - look for 3 chars, '...'
             - 
    dredge - parsing through directories/ file system
           - looking for large files
           - how to get list of directories in a folder
           - node fs - module to allow directory traversal.
           - fs.readDirSync
           - fs.stats object, stats.size, 
    Async - non-blocking; allows for multiple processes
    Sync  - blocking; allows only one process at a time
           

    Know file system: 
        - hierarchy (tree)- root '.',directories
          links, sub folders, files
        - links are like pointers to other file, folders
        - directory search returns dir-entry(entries), children
          to directory
        -            
        - path delimiter / used in windows
        - double escape in strings if you use \
          ex. '\\table' instead of \table
        - 

 */

console.log("Loading big file dredger");
// print out current directory
fs = require("fs");
const children = fs.readdirSync("."); // takes path, returns string array
for (let child of children) {
  console.log(children[child]);
  console.log(fs.statSync(child));
  console.log(fs.statSync(child).size);
}

// write sample object
//outer layer directories
let sampleObj = {
  A: {
    readme: "readme.txt",
    name: "a",
    size: 0,
    children: {
      get folderB() {
        sampleObj.B;
      },
      get folderC() {
        sampleObj.B.C;
      }
    }
  },
  B: {
    C: {
      readme: "readme.md"
    }
  }
};

console.log(sampleObj.A.children.folderC); // getting undefined

// Function to get current filenames
// in directory
filenames = fs.readdirSync(__dirname);

console.log("\nCurrent directory filenames:");
filenames.forEach((file) => {
  console.log(file);
});

const path = require("path");

// Function to get current filenames
// in directory with specific extension
files = fs.readdirSync(__dirname);

console.log("Filenames with the .md extension:");
files.forEach((file) => {
  if (path.extname(file) == ".md") console.log(file);
});
