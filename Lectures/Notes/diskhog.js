const fs = require("fs");
const { print } = require("./modules/print");

function filterPath(old_path) {
  const path = old_path.replace("//", "/");
  return path;
}

function findSiblings(siblings, node, index, n, old_path) {
  if (index < n) {
    const path = filterPath(`${old_path}/${siblings[index]}`);
    node = new Object({
      path: path,
      name: siblings[index],
      leftChild: null,
      rightSib: null,
      isDir: false,
      stats: null
    });
    node.rightSib = findSiblings(
      siblings,
      siblings[index + 1],
      index + 1,
      n,
      old_path
    );
    //see if sibling has children
    node.stats = fs.statSync(node.path);
    node.isDir = fs.statSync(node.path).isDirectory();
    if (node.isDir) {
      let grandchildren = fs.readdirSync(node.path);
      node.leftChild = findChildren(
        grandchildren,
        node,
        0,
        grandchildren.length,
        node.path
      );
    }
    return node;
  }
  return null;
}

function findChildren(children, node, index, n, old_path) {
  if (index < n) {
    //build first child
    const filtered_path = filterPath(`${old_path}/${children[0]}`);
    let node = {
      path: filtered_path,
      name: children[0],
      rightSib: null,
      leftChild: null,
      isDir: false,
      stats: null
    };
    node.stats = fs.statSync(node.path);
    node.isDir = fs.statSync(node.path).isDirectory();
    //   check to see if child has more children
    if (node.isDir) {
      let grandchildren = fs.readdirSync(node.path);
      node.leftChild = findChildren(
        grandchildren,
        node,
        0,
        grandchildren.length,
        node.path
      );
    }
    //find Sibilings
    children.shift();
    node.rightSib = findSiblings(children, node, 0, children.length, old_path);
    return node;
  }
  return null;
}

function main() {
  //read children of path
  let children = fs.readdirSync(process.argv[2]);
  let root = {
    path: process.argv[2],
    name: process.argv[2],
    rightSib: null,
    leftChild: null,
    isDir: false,
    stats: null
  };
  root.stats = fs.statSync(root.path);
  root.isDir = fs.statSync(root.path).isDirectory();
  root.leftChild = findChildren(
    children,
    root,
    0,
    children.length,
    process.argv[2]
  );
  print(root, "");
}
main();
