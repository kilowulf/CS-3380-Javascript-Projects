/*

*/
fs = require("fs");
filesize = require("filesize");

// second show
// can remove left and right nodes with null
let root1 = {
  name: "A",
  size: 390,
  children: [
    {
      name: "B",
      size: 284,
      children: [
        {
          name: "B",
          size: 100,
          children: []
        },
        {
          name: "D",
          size: 50,
          children: [
            {
              name: "C",
              size: 50,
              children: []
            },
            {
              name: "E",
              size: 56,
              children: []
            }
          ]
        },
        {
          name: "F",
          size: 454,
          children: []
        }
      ]
    },
    {
      name: "G",
      size: 233,
      children: [
        {
          name: "H",
          size: 998,
          children: []
        }
      ]
    }
  ]
};

// multi-processing
let dirEntry = {
  name: "A",
  size: 1243,
  children: [
    { name: "B", size: 233 },
    { name: "D", size: 239, children: [{ name: "C", children: [] }] },
    { name: "E", size: 908 },
    { name: "F", size: 344, children: [{ name: "G" }, { name: "H" }] }
  ]
};
// note f2 will search term and change all instances  spelling

const populate = (dirObj) => {
  for (let childName of fs.readdirSync(dirObj.name)) {
    const name = `${dirObj.name}/${childName}`;
    const stats = fs.statSync(name);
    const size = filesize(stats.size);
    let child = {
      name,
      size,
      children: []
    };
    if (stats.isDirectory()) {
      child.children = [];
      populate(child);
    }
    dirObj.children.push(child);
  }
};

const show2 = (node) => {
  if (node == null)
    // base case
    console.log(node.value);
  console.group();
  if (node.left) show2(node.left);
  if (node.right) show2(node.right);
  console.groupEnd();
};

// show method
const show = (dirEntry) => {
  console.log(dirEntry.size, dirEntry.name);
  console.group();
  if (dirEntry.children) {
    for (let child of dirEntry.children) {
      show(child);
    }
  }
  console.groupEnd();
};

let file = {
  name: "J",
  size: 32
};

root2 = {
  name: ".",
  size: 0,
  children: []
};

//console.log(root1);
let dir = root1.children[0].children[0].children;
dir.push(file);
console.log(dir);
console.log(JSON.stringify(dir, null, 2));

populate(root2);
show(root2);

// filesystem - readdirsync - helps to read directories
