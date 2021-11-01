/**
 *  Summation of all filesizes for a directory
 * - what does metric supposed to do other than default display KB, B,..
 * - what does threshold supposed to do other than default display all files
 * */

//imports
const fs = require('fs')
const filesize = require('filesize')
const path = require('path')

// process.env[`LANG`] = 'es_ra.UTF-8'

// Global flags
// let run = false
// let lang = process.env['LANG'] ?? 'en_US'
// process.env['lang'] = 'en_US'
let lang =
  process.env['lang'].slice(0, process.env['lang'].indexOf('.')) === 'en_US'
    ? process.env['lang'].slice(0, process.env['lang'].indexOf('.'))
    : lang

// let lang = 'en_US'
let dirPath = '.'
// let helpFile = `help_${lang}.txt`
let metric = false
let alpha = false
let size = false
let threshold = false
let min = 1
let execute = true

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

// sorting methods: alpha, size
const show = (dirEntry) => {
  let langTag = lang.split('_').join('-')
  if (size) {
    // show sorting by sizes
    dirEntry.children.sort((a, b) => {
      if (a.size > b.size) return -1
      if (a.size < b.size) return 1
      return 0
    })
  } else if (alpha) {
    // show sorting by alpha
    dirEntry.children.sort((a, b) => {
      return a.name
        .toLowerCase()
        .slice(a.name.lastIndexOf('/') + 1)
        .localeCompare(b.name.toLowerCase().slice(b.name.lastIndexOf('/') + 1))
    })
  }

  if (threshold) {
    // show only files or folders with size of min bits or greater
    dirEntry.children = dirEntry.children.filter(
      (child) => child.size >= min.toLocaleString(langTag)
    )
  }

  if (metric) {
    // show file sizes in metric
    console.log(
      `(${filesize(dirEntry.size)}) ${dirEntry.name.slice(
        dirEntry.name.indexOf('/') + 1
      )}`
    )
    console.group()
    if (dirEntry.children) {
      for (let child of dirEntry.children) {
        show(child)
      }
      console.groupEnd()
    }
  } else {
    // show file sizes in bits
    console.log(
      `(${dirEntry.size.toLocaleString(langTag)}) ${dirEntry.name.slice(
        dirEntry.name.indexOf('/') + 1
      )}`
    )
    console.group()
    if (dirEntry.children) {
      for (let child of dirEntry.children) {
        show(child)
      }
      console.groupEnd()
    }
  }
}

// structured object for building out filesystem
let rootObj = {
  name: dirPath,
  size: 0,
  children: [],
}
// console.log(lang)

async function showHelp() {
  // run = true // this is to prevent the program from running the populate / show functions
  helpFile = `help_${lang}.txt`
  const filePath = path.resolve(__dirname, helpFile)
  const text = await fs.promises.readFile(filePath, 'utf8')
  console.log(text)
  process.exit()
}

// parses passed terminal arguments for flags
async function parseArgs() {
  let args = process.argv.slice(2)

  args.forEach((arg, i) => {
    const nextArg = args[i + 1]

    switch (
      arg // The order of the cases should match the help.
    ) {
      case '-p': // The same order helps your eye catch duplicate cases and missing cases.
      case '--path':
        rootObj.name = nextArg
        break

      case '-lang':
      case '--language':
        lang = nextArg // null coalescing operator ??
        // console.log(`-lang: ${lang}`)
        // process.env['LANG'] = `${lang}.UTF-8` //'es_es.UTF-8'
        // console.log(process.env['LANG'])

        // country codes:
        // https://www.andiamo.co.uk/resources/iso-language-codes/

        break

      case '-h':
      case '--help':
        // process.env['LANG'] = 'se_SE.UTF-8' //'es_es.UTF-8'
        // Lang = process.env.LANG.slice(0, process.env.LANG.indexOf('.'))
        // console.log(process.env.LANG)
        // console.log(typeof process.env.LANG)
        // console
        execute = false
        showHelp() // await

        break

      case '-t':
      case '--threshold':
        // only returns files or folders with size of 1 million bits or greater
        threshold = true
        min = Number(nextArg) === NaN ? 1 : nextArg
        break

      case '-m':
      case '--metric':
        // return file sizes displayed as KB MB GB and TB
        metric = true
        break

      case '-s':
      case '--sort':
        let sort = nextArg !== '-' ? nextArg : 'alpha'
        if (sort === 'alpha') {
          alpha = true
        } else {
          size = true
        }

        break
    }
  })
}

// driver function
const main = async () => {
  await parseArgs()
  if (execute) {
    populate(rootObj)
    show(rootObj)
  }
}

;(async () => {
  await main()
})()
