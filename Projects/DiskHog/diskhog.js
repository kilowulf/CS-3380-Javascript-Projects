/**
 *  Summation of all filesizes for a directory
 * - what does metric supposed to do other than default display KB, B,..
 * - what does threshold supposed to do other than default display all files
 * */

//imports
const fs = require('fs')
const filesize = require('filesize')
const path = require('path')



// Global flags
let run = false

//populates data object with stream data, still working on displaying bit size of directories
const populate = (dirObj) => {
  const stats = fs.statSync(dirObj.name)

  // if NOT a directory
  if (!stats.isDirectory())
    // we are a file, set our size and then return it for our parent to use
    return (dirObj.size = stats.size) //filesize

  // we are a directory
  for (let childName of fs.readdirSync(dirObj.name)) {
    const name = `${dirObj.name}/${childName}`

    let child = {
      name,
      size: 0,
      children: [],
    }

    // accumulate the size of all of our children
    dirObj.size += populate(child)

    // record the child
    dirObj.children.push(child)
  }

  // directory, return our total size
  return dirObj.size
}

// sorting methods: alpha, size and

// show method formats for display
const show = (dirEntry) => {
  console.log(`(${filesize(dirEntry.size)}) ${dirEntry.name}`)
  console.group()
  if (dirEntry.children) {
    for (let child of dirEntry.children) {
      show(child)
    }
  }
  console.groupEnd()
}

// show for sorting by alphabetical order
const show_alpha = (dirEntry) => {
  dirEntry.children.sort((a, b) => {
    return b.name
      .toLowerCase()
      .slice(b.name.lastIndexOf('/') + 2)
      .localeCompare(a.name.toLowerCase().slice(a.name.lastIndexOf('/') + 2))
  })

  // console.log(filesize(dirEntry.size), dirEntry.name)
  console.log(`(${filesize(dirEntry.size)}) ${dirEntry.name}`)
  console.group()
  if (dirEntry.children) {
    for (let child of dirEntry.children) {
      show_alpha(child)
    }
  }
  console.groupEnd()
}

// show sorting by sizes
const show_size = (dirEntry) => {
  dirEntry.children.sort((a, b) => {
    if (a.size > b.size) return -1
    if (a.size < b.size) return 1
    return 0
  })

  console.log(`(${filesize(dirEntry.size)}) ${dirEntry.name}`)
  console.group()
  if (dirEntry.children) {
    for (let child of dirEntry.children) {
      show_size(child)
    }
    console.groupEnd()
  }
}

// structured object for building out filesystem
let dirPath = '.'
rootObj = {
  name: dirPath,
  size: 0,
  children: [],
}

// called to display help text
function usage() {
  let helpFile = 'help.txt'
  console.log(fs.readFileSync(helpFile, 'utf8'))

  process.exit(0)
}

// parses passed terminal arguments for flags
function parseArgs() {
  let args = process.argv.slice(2)  

  args.forEach((arg, i) => {
    switch (
      arg // The order of the cases should match the help.
    ) {
      case '-p': // The same order helps your eye catch duplicate cases and missing cases.

      case '--path':
        let path = args[i + 1]
        console.log(path)

        break

      case '-t':

      case '--threshold min':
        // only returns files or folders with size of 1 million bits or greater

        break

      case '-m':

      case '--metric':
        // return file sizes displayed as KB MB GB and TB

        break

      case '-s':

      case '--sort':
        let sort = args[i + 1] !== '-' ? args[i + 1] : 'alpha'
        if (sort === 'alpha') {
          populate(rootObj)
          show_alpha(rootObj)
          run = true
        } else {
          populate(rootObj)
          show_size(rootObj)
          run = true
        }

        break

      case '-h':

      case '--help':
        usage()
        break
    }
  })
}

// driver function
const main = () => {
  parseArgs()
  if (run === false) {
    populate(rootObj)
    show(rootObj)
  }
}
main()
