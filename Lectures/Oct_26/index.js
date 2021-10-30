/** When sorting - use comparator
 *  - comparator takes two of whatever datatype; num, string, object
 *  - comparator returns a number
 * 
 *  - extract primitive value for comparison.
 * 
 *  - 
 *  High Order functions: 
 *  - function that takes as a argument, another function
 * 
 * Randomize: 
 *  - random
 *  - random - 0.5 // return negative 
 * 
 * Sorted : size, alpha, default is size
 *  - use,
 *          if (sort === unsorted)
 *                  
 *              else if (sort === size){
 *                      sort.size}
 *              else if (sort === alpha){
 *                      sort.alpha}
 */


console.log("Hello world!")

const nums = [12,1,2,3,4,5]

letterNames = ['aaron', 'daniel', 'john', 'herald', 'stephen', 'Aeron', 'Brett']


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
        name:'Jojo',
        age:7,
        size:'xxl',
        shots:false
    },
    {
        name:'Zoreo',
        age:7,
        size:'xxl',
        shots:false
    },
]

function compareNumbers(a, b) {
    // must return one of three, 1,0,-1
    if (a < b) return -1
    if (a > b) return 1    
    // a must be equal to b
    return 0 // return 
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
    if (a < b) return -1
    if (a > b) return 1    
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


// Done On Class Oct. 26
function compareNumDesc (a, b){
    if (a > b) return -1
    if (a < b) return 1    
    // a must be equal to b
    return 0

}

function compareStrsDesc (a, b){    
    return compareStringsAlpha(b, a)
    // return -compareStringsAlpha(a, b)
    // will also reverse sort
}

// prototyping a function to take and execute another function
function descending(comparator) {
    return function(a, b){
        return -comparator(a, b)
    }}

function compareObjName({name: a}, {name: b}) {
    
    return a.toLowerCase().localeCompare(b.toLowerCase()) // see string.
  }

// high order 
const byOldestFirst = () => {
    descending(compareAge)
}


function main(){
    const seats = [12,1,2,9,7,5,10,4,3,6,8,11]

    const greekLetterNames = ['alpha', 'beta', 'hepis', 'fargo', 'theta', 'zeta']

    console.log(seats.sort(compareNumDesc))
    console.log(seats.sort(descending(compareNumbers)))

    console.log(greekLetterNames.sort(compareStrsDesc))

    console.log(greekLetterNames.sort(descending(compareStringsAlpha)))

    console.log(dogs.sort(compareObjName))

    console.log(Math.random() * (- 0.5))
    console.log(Math.random() - 0.5)

    console.log(dogs.sort(byOldestFirst))

}
main()