/*
Objects::
    Arrays


*/

console.log('Hello World!')

// Array - object
// 'in' for objects and 'of' for everything else
let array = [1, 2, 3]
let array2 = [5, 5, , , 5] // place holders set undefined
let args = ['no-spaces', 'foxtrot', 'charlie', 'zulu']
let spacing = args.shift()
args.unshift('bravo')
args.push('hello')
let array3 = []
array3.length = 7


for (let num of array){
    console.log(num)
}

for (let num of array2){
    console.log(num)
}

for (let num of array3){
    console.log(num)
}

for (let arg in args){
    console.log(arg)
}
console.log(args)

console.log(`length of array is ${array.length}`)
console.log(`length of array is ${array3.length}`)
console.log(`Contents of args shifted ${spacing}`)


// Object literals
// how to destructure object
const person = {
    id: "1",
    p_name: 'Aaron',
    age: "45"
};

console.log(person)
const {y_id, y_name, y_age} = person


console.log(y_id, y_name, y_age);




