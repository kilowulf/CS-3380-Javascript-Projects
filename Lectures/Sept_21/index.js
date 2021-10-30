// Overloading in javascript, no overloading
// stubbing - first thing in function, write name of function and name of 
// parameters
/* JQuery - first parameter acts as a get, second acts as a set. 
 - Arguments parameter in 3rd place acts like an array, index, and 
    length property. cant sort, push, pop
 - parameters are place holder variables, arguments are values passed
    to parameters

    function overloading, overriding, function defaults

    Arrow function; function value is assigned to foo so only a single assignment allowed initially.
    var arrow functions allow for reassignment overloading
    let arrow functions will give error if overload attempted
     - if a single let arrow function assignment occurs then that variable is 
       reassigned but without the let keyword, the last variable assignment 
       will hold. 

    PromiseSpike - : 
        pull-client pulls from server what it can handle(client control)
        push- server is in control of data pushing



 */


var foo = () => {
    console.log(`first foo`, x, y)
}

var foo = (x) => {
    console.log(`Second foo`, x, y)
}
let boo 
boo = () => {
    console.log(`first boo`, arguments)
}

var  foo = (x=3, y) => {
    // if (!y) y=2
    // console.log(`third foo`, x, y, arguments)
    // let params = [...arguments].sort()
    // console.log(params)
    // if (arguments.length == 2) { // falsy - undefined
    //     console.log(`SET`)
    // } else if (arguments.length == 1) {
    //     let y = 2
    //     console.log('GET')
    // } else {
    //     console.log(`ERROR`)
    // }

    console.log(x, y)
}
let bar = () => {
    console.log(`bar-arrow`, this)
}

// function bar () {
//     console.log(`bar`, this)
// }



foo(0)
foo(5, 0)
foo(5, 0, .75)
boo() // arguments will reference the global object
bar()
// TODO pass a string and process it as a char.