/*Lecture:
    Objects:
        *** remember to remove unused, commented out code

        Mutable or non-mutable:(Need to know!!)
            1. concat - no mutate - new array
            2. fill - mutates 
            3. filter - no mutate - new array
            4. reverse - mutates
            5. flat - no mutate - new array
            6. map - no mutate - new array
            7. slice - no mutate
            8. sort - mutates
            9. splices - mutates

        exercise:
            1. read a file
            2. prepend a number to end of ile
            3. write test file out

        fileSync vs. non-sync
            sync - 'blocking'; 
            not using syc - non-blocking code, Async


*/

let car = {
    name: "BMW",
    type: "4 door",
    drivetrain: "AWD"
}

for (obj in car) {
    console.log(obj)
}
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = [...array1,... array2]
console.log(array3)


// Read, append, and write from file to console
const Fs = require('fs')
const contents = Fs.readFileSync('./file.txt', 'utf-8')
console.log(contents)

// split contents into lines
const splitContents = contents.split(/\r?\n/)
console.log(splitContents)

// map to add numbers to the beginning of each line
let i = 1
const numberLines = splitContents.map(splitContents => `${i++} ${splitContents}`)
numberLines.push('EOF')
console.log(numberLines)

Fs.writeFileSync('./newFile.txt', numberLines.join('\r\n'))