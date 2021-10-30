/*traditional function - has this keyword
                       - arguments returned

  anonymous function - no this keyword binding
                    - no arguments, no length() return
* 
    sort methods: 
        stable sort - order is kept in tie cases
        
*/

hello_str = "Hello, World!";
console.log(hello_str);

const nums = [12, 1, 2, 3, 4, 5];

letterNames = [
  "aaron",
  "daniel",
  "john",
  "herald",
  "stephen",
  "Aeron",
  "Brett"
];

const dogs = [
  {
    name: "Fido",
    age: 14,
    size: 34,
    shots: true
  },
  {
    name: "Benji",
    age: 7,
    size: 44,
    shots: false
  },
  {
    name: "Sport",
    age: 3,
    size: 78,
    shots: true
  },
  {
    name: "Hurk",
    age: 13,
    size: 2,
    shots: false
  }
];

function compareNumbers(a, b) {
  // must return one of three, 1,0,-1
  if (a < b) return -1;
  if (a > b) return 1;
  // a must be equal to b
  return 0;
}

function compareStringLengths(a, b) {
  // must return one of three, 1,0,-1
  if (a.length < b.length) return -1;
  if (a.length == b.length) return 1;
  // a must be equal to b
  return 0;
}

function compareLengthsThenAlpha(a, b) {
  // must return one of three, 1,0,-1
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;
  // a must be equal to b
  return a.localeCompare(b); // see string.localeCompare docs
}

function compareStringsAlpha(a, b) {
  // must return one of three, 1,0,-1
  let lowerA = a.toLowerCase();
  let lowerB = b.toLowerCase();
  // a must be equal to b
  return lowerA.localeCompare(lowerB); // see string.localeCompare docs
}

function compareStringsAlphaDog(dogA, dogB) {
  // must return one of three, 1,0,-1
  let lowerA = dogA.name.toLowerCase();
  let lowerB = dogB.name.toLowerCase();
  // a must be equal to b
  return lowerA.localeCompare(lowerB); // see string.localeCompare docs
}

function compareDogSizes({ size: a }, { size: b }) {
  // must return one of three, 1,0,-1
  if (a < b) return -1;
  if (a > b) return 1;
  // a must be equal to b
  return 0;
}

function compareDogAge(dogA, dogB) {
  // must return one of three, 1,0,-1
  let a = dogA.age;
  let b = dogB.age;
  return compareNumbers(a, b);
}

function compareAge({ age: a }, { age: b }) {
  // must return one of three, 1,0,-1
  return compareNumbers(a, b);
}

function compareNumbers1(a, b) {
  return a - b;
}

const sorted_nums = [...nums].sort(compareNumbers1); // sorted in place, no copy made
const LetterNameSortedByAlpha = [...letterNames]
  .map((letterName) => letterName.toLowerCase())
  .sort();

const LetterNamesSortedByLength = [...letterNames].sort(compareStringLengths);

const lengthThenAlpha = [...letterNames].sort(compareLengthsThenAlpha);

const alphaThenLength = [...letterNames]
  .sort(compareStringsAlpha)
  .sort(compareStringLengths);

const dogsByName = [...dogs].sort(compareStringsAlphaDog);
const dogsByAge = [...dogs].sort(compareDogAge);

const dogsBySize = [...dogs].sort(compareDogSizes);

console.log(sorted_nums);
console.log(lengthThenAlpha);
console.log(LetterNameSortedByAlpha);
console.log(LetterNamesSortedByLength);

const arr = ["john", "hello"];
const newArr = [arr.join(" ")];
console.log(arr);
console.log(newArr);
const newDogObj = Object.assign({}, dogsByAge);
console.log(newDogObj);
const newDogArr = Object.entries(newDogObj);
console.log(newDogArr);
console.log(dogsBySize);
console.log(dogsByName);
console.log(dogsByAge);
