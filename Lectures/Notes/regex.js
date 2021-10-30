// /a-z0-9/ - searches and returns alphanumeric values of lowercase
// /b[a-e]/ - returns values starting with b, with following values between a and e, [] is a character set
// /^A-Z/gi - returns values that do not match capitalized values of A to Z, global and
//            at beginning of a string case insensitive flags
// /[^a-z]/ - returns values that dont match a-z within character sets or strings
// /\w/ - javascript returns a search match for all alphanumeric values, same as /A-Za-z0-9_/
// /\W\ - opposite of \w, returns everything that is not alphanumeric
// /a+/ - '+' sign searches for one or more occurrences of a
// /a*/ - searches for zero or more occurrences of a
// /at$/ - searches for 'at' at end of strings
// /\d/ - shortcut to search for digit values
// /\D/ - shortcut to search for non-digit values
// /\s/ - search for whitespace, tabs, carriage returns, new line, form feed
//        similiar to [ \r\t\f\n\v]
// /\S/ - search for non-whitespace, similar to [^ \r\t\f\n\v]
// /a{3,5}h/ - quantity specifiers x{a, b}y where a is upper number range, b is lower number range
//              ex. search for string where a occurs 3 to 5 times and ends with h.
//              ex. a{3, } three or more occurrences
//              ex. a{3} search for 3 occurrences only
// /Aa?ron/ -  tells search that preceding value is optional, if value isn't there return, if it is still return
// /(?=...)/ - positive look ahead, ... is the required part not to be matched
// /(?!...)/ - negative look ahead, ... is the pattern you do not want
// example of using look aheads
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // checks password for greater than 5 characters long and has 2 consecutive digits
let result = pwRegex.test(sampleWord);

// use regular expression to check for either franklin or Eleanor Roosevelt
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);

// capture groups; constructed by enclosing regex patterns in parentheticals; these return arrays
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // search for string that consists of only same number repeated 3 times seperated by single whitespace
let result = reRegex.test(repeatNum);

// replace() method with regex
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // 3 capture groups will search for each string, one, two, three
let replaceText = "$3 $2 $1"; // replaces one two three, with three two one
let result = str.replace(fixRegex, replaceText);

// remove whitespace from start to end
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
