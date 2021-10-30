console.log('Hello World!')
/*Stubbing: 
    MVP - min. viable product
    happy path
    default
    visibility
    start wih end in mind
    10 flags we need to do, pick easiest

    Discord - walking a binary tree

    post order/ pre order processing only
    DiskHog Quiz key on discord? not sure
    pick lowest hanging fruit first
*/

console.log('Loading big file dredger');
// print out current directory
fs = require("fs");
const children = fs.readdirSync('.') // takes path, returns string array
for (let child of children) {
  console.log(child)
  console.log(fs.statSync(child))
  console.log(fs.statSync(child).size)
}

//folder file system object
// can remove left and right nodes with null
let root = {
    value: 'A',
    left: {
        value: 'B',
        left: null,
        right: null
    },
    right: {
        value:'C',
        left: {
            value: 'D',
            left: null,
            right: null
        },
    },
}

// multi-processing
let dirEntry = {
    name: 'A',
    children: [
        {name: 'B'},
        {name: 'D',
            children: [
                {name: 'C',
                 children: [],
                }
            ]
         },
        {name: 'E'},
        {name: 'F',
            children: [
                {name:'G'},
                {name:'H'}
            ]
        }
    ]        
}

const show = (node) => {
    console.log(node.value)// pre order console value first
    console.group()
    if (node.left) show(node.left)      
    if (node.right) show(node.right)
    // console.log(node.value) // post order console value last
    console.groupEnd()   
}

const showdir = (dirEntry) => {
    console.log(dirEntry.name)

    console.group()
    if (dirEntry.children) {
        for (let child of dirEntry.children) {
            showdir(child)
        }
    }
    console.groupEnd()
}

// second show
const show2 = (node) => {
    if (node == null) // base case
    console.log(node,value)
    console.group()
    if (node.right) show2(node.left)
    if (node.left) show2(node.right)
    console.groupEnd()
}

let file = {
    name:'D',
    size:32
}

let dir = dirEntry.children[1].children[0]
dir.push(file)
console.log(JSON.stringify(dir, null, 2))

root = {
    name:'.',
    size:0,
    children: []

}

const populate =(dirObj) => {
    let childNames = fs.readdirsync(dirObj.name)
    for (let childName of childNames) {
        const fullName = `${dirObj.name}/${childName}`
        const stats = fs.statSync(fullName)
        let child = {
            name: fullName,
            size: stats.size
        }
        // child.name = fullName
        // child.size = stats.size
        if (stats.isDirectory()) {
            child.children = []
            populate(child)
        }
        dirObj.children.push(child)

    }
}

const populate2 =(dirObj) => {
    
    for (let childName of fs.readdirsync(dirObj.name)) {
        const name = `${dirObj.name}/${childName}`
        const stats = fs.statSync(name)
        const size = stats.size
        let child = {name, size}
        // child.name = fullName
        // child.size = stats.size
        if (stats.isDirectory()) {
            child.children = []
            populate2(child)
        }
        dirObj.children.push(child)
    }
}

// filesize: size of a directo




showdir(dirEntry)
show(root)




// Function to get current filenames
// in directory
// filenames = fs.readdirSync(__dirname);
  
// console.log("\nCurrent directory filenames:");
// filenames.forEach(file => {
//   console.log(file);
// });

// const path = require('path');
  
// // Function to get current filenames
// // in directory with specific extension
// files = fs.readdirSync(__dirname);
  
// console.log("\Filenames with the .md extension:");
// files.forEach(file => {
//   if (path.extname(file) == ".md")
//     console.log(file);
// })