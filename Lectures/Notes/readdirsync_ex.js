// method 1 - returns full path for all files/folders
const fs = require("fs");
const path = require("path");
const filesize = require("filesize");

// const getAllFiles = function (dirPath, arrayOfFiles) {
//   files = fs.readdirSync(dirPath);

//   arrayOfFiles = arrayOfFiles || [];

//   files.forEach(function (file) {
//     if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//       arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
//     } else {
//       arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
//     }
//   });

//   return arrayOfFiles;
// };

// const result = getAllFiles(".");
// console.log(result);

// List all files in a directory in Node.js recursively in a synchronous fashion

/* Prepend the given path segment */
const prependPathSegment = (pathSegment) => (location) =>
  path.join(pathSegment, location);

/* fs.readdir but with relative paths */
const readdirPreserveRelativePath = (location) =>
  fs.readdirSync(location).map(prependPathSegment(location));

/* Recursive fs.readdir but with relative paths */
const readdirRecursive = (location) =>
  readdirPreserveRelativePath(location).reduce(
    (result, currentValue) =>
      fs.statSync(currentValue).isDirectory()
        ? result.concat(readdirRecursive(currentValue))
        : result.concat(currentValue),
    []
  );

// returns an array
const result = readdirRecursive(".");
console.log(result);

console.log(filesize(result));

const show = (result) => {
  for (file in result) {
    console.log(result[file]);
  }
};

show(result);

// method 3

// Return a list of files of the specified fileTypes in the provided dir,
// with the file path relative to the given dir
// dir: path of the directory you want to search the files for
// fileTypes: array of file types you are search files, ex: ['.txt', '.jpg']
