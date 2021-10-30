/** Oct_28: 
 *  - international version for diskhog complete
 *  - language variation
 * 
 *  - help text: default english - en-us
 *  - copy and paste new help documentation into help
 *  - make all flag commands bold. 
 *  - make bold sizes in --metric - GB KB etc.
 * 
 *  - Make user create the file for preferred language
 *  - 
 * Main: three functions; parseargs-sets global variables, populate - fill  object, show - displays formatted object data
 * 
 *  - process.exit after usage() to break out of program
 *  - usage - we can place a conditional to display given language.
 * 
 *  - -lang, --language, return to a envirnoment variable
 *      set LANG=en_US
 * 
 *  - how to read language from environment
 *      process.env - is ona object that has language key
 *      lang_var = process.env[LANG]
 *      lang_var - search for '.' any character /A-Za-z
 * 
 *  - fs.synchronous with promise calls
 *      fsPromises.readdir
 * 
 * 
 *  16Bit character hex editor - Hexed.it
 *  - FF FE - bomb - 
 * 
 *      
 *      
 * 
 * 
 */

console.log('What the up?')

//helpFile = `help_${lang}.txt `
//display helpFile

//returning substring with regex
const regex = /(\w\w_\w\w)\..*/gm
const str = `en_US.UTF-8
en_us.utf8`
const subst = `$1`

// The substituted value will be contained in the result variable
const result = str.replace(regex, subst)

console.log('Substitution result: ', result)

// reading the local environment for language
const lang = process.env[`LANG`].replace(regex, subst)
console.log(lang)


//fsPromise.readdir
import { readdir } from 'fs/promises';

try {
  const files = await readdir(path);
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
}


//fsPromise.stat - use await
const { watch } = require('fs/promises');

const ac = new AbortController();
const { signal } = ac;
setTimeout(() => ac.abort(), 10000);

(async () => {
  try {
    const watcher = watch(__filename, { signal });
    for await (const event of watcher)
      console.log(event);
  } catch (err) {
    if (err.name === 'AbortError')
      return;
    throw err;
  }
})();