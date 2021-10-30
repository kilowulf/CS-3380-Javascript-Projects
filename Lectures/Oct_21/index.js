/* probably use a main - diskhog
    - process.exit: hard break out of function or process
    - global variable for data tree
    - 

    main() {
        process_arg()
        populate()
        show()
    }
    
    flags:  (prof. recommends making them global)
        path - default is '.', current dir is point of ref.
               ex. '-p .. '
        metric - default false
        sort - default size
        threshold - default 1 million Bytes, 1 e6
        lang - default lang. 'english', use language code 2-letter
               language, country; ex. EN_US, EN_GB

    Continue sorting: 

    JS Object: 
        - associative array
        - hash table
        - key-value pair data structure
        - dictionary

    Map: 
        - transformation function for arrays

    Environmental Variables: 
        - i18n - internationalization
        - localization - formatting of language
        - localCompare - auto checks for local number, alpha         systemization


    help.txt - copy from diskHog docs under Help Text

        

    
*
*/
hello_str = 'Hello, World!'
console.log(hello_str)


const nums = [12,1,2,3,4,5]

letterNames = ['aaron', 'daniel', 'john', 'herald', 'stephen', 'Aeron', 'Brett']

const sizeToNums = {
    xxs: 1,     // keys are made strings
    xs: 2, 
    s: 3, 
    m: 4, 
    l: 5, 
    xl: 6, 
    xxl: 7
}



function compareBySize({size:a}, {size:b}){
    return compareNumbers(sizeToNums[a], sizeToNums[b])
}

// function descending(comparator) {
//     return -comparator()
// }

const dogs = [
    {
        name: 'Fido',
        age: 14,
        size: 'xxs',
        shots: true,

    },
    {
        name:'Benji',
        age:7,
        size:'xxl',
        shots:false
    },
    {
        name:'Shaggy',
        age:9,
        size:'m',
        shots:true
    },
    {
        name:'Rudy',
        age:34,
        size:'ll',
        shots:true
    }
    
]

function compareNumbers(a, b) {
    // must return one of three, 1,0,-1
    if (a < b) return -1
    if (a > b) return 1    
    // a must be equal to b
    return 0
  }

  function compareStringLengths(a, b) {
    // must return one of three, 1,0,-1
    if (a.length < b.length) return -1
    if (a.length == b.length) return 1    
    // a must be equal to b
    return 0
  }

  function compareLengthsThenAlpha(a, b) {
    // must return one of three, 1,0,-1
    if (a.length < b.length) return -1
    if (a.length > b.length) return 1    
    // a must be equal to b
    return a.localeCompare(b) // see string.localeCompare docs
  }

  function compareStringsAlpha(a, b) {
    // must return one of three, 1,0,-1
    let lowerA = a.toLowerCase()
    let lowerB = b.toLowerCase()      
    // a must be equal to b
    return lowerA.localeCompare(lowerB) // see string.localeCompare docs
  }

  function compareStringsAlphaDog(dogA, dogB) {
    // must return one of three, 1,0,-1
    let lowerA = dogA.name.toLowerCase()
    let lowerB = dogB.name.toLowerCase()      
    // a must be equal to b
    return lowerA.localeCompare(lowerB) // see string.localeCompare docs
  }

  function compareDogSizes(dogA, dogB) {
    // must return one of three, 1,0,-1
    if (dogA < dogB) return -1
    if (dogA > dogB) return 1    
    // a must be equal to b
    return 0
  }

  function compareDogAge(dogA, dogB) {
    // must return one of three, 1,0,-1
    let a = dogA.age
    let b = dogB.age 
    return compareNumbers(a, b)
    
  }

  function compareAge({age:a}, {age:b}) {
    // must return one of three, 1,0,-1    
    return compareNumbers(a, b)    
  }

  // rewrite of compareAge without destructuring
  function compareAge2(dogA, dogB) {
      let a = dogA.age
      let b = dogB.age
      return compareNumbers(a, b)
  }

  function compareNumbers1(a, b) {
    return a - b
  }

  

  
  

const sorted_nums = [...nums].sort(compareNumbers1) // sorted in place, no copy made
const LetterNameSortedByApha = [...letterNames].map(letterName =>letterName.toLowerCase()).sort()

const LetterNamesSortedByLength = [...letterNames].sort(compareStringLengths)

const lengthThenAlpha = [...letterNames].sort(compareLengthsThenAlpha)

const alphaThenLength = [...letterNames].sort(compareStringsAlpha).sort(compareStringLengths)

const dogsByName = [...dogs].sort(compareStringsAlphaDog)
const dogsByAge = [...dogs].sort(compareDogAge)


console.log(nums)
console.log(sorted_nums)
console.log(lengthThenAlpha)
console.log(LetterNameSortedByApha)
console.log(LetterNamesSortedByLength)
console.log(dogsByName)
console.log(dogsByAge)
console.log(dogs.sort(compareDogSizes))






