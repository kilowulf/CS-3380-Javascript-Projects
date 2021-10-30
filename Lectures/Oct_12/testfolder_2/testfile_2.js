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
