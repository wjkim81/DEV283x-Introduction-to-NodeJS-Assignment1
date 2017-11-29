# DEV283x-Introduction-to-NodeJS-Assignment1

1. Create package.json file

$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (week1-assignment-csv-to-json-converter) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/wjkim/Documents/workspace/javascript/DEV283x-Introduction-to-NodeJS/Week1-Assignment-CSV-to-JSON-Converter/package.json:

{
  "name": "week1-assignment-csv-to-json-converter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) yes

2. Install csvtojson

$ npm install csvtojson
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN week1-assignment-csv-to-json-converter@1.0.0 No description
npm WARN week1-assignment-csv-to-json-converter@1.0.0 No repository field.

+ csvtojson@1.1.9
added 5 packages in 5.65s
[wjkim@wjkim-mac] /Users/wjkim/Documents/workspace/javascript/DEV283x-Introduction-to-NodeJS/Week1-Assignment-CSV-to-JSON-Converter
$ cat package
cat: package: No such file or directory
[wjkim@wjkim-mac] /Users/wjkim/Documents/workspace/javascript/DEV283x-Introduction-to-NodeJS/Week1-Assignment-CSV-to-JSON-Converter
$ cat package.json 
{
  "name": "week1-assignment-csv-to-json-converter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "csvtojson": "^1.1.9"
  }
}


3. Install jsonfile

$ npm i jsonfile
npm WARN week1-assignment-csv-to-json-converter@1.0.0 No description
npm WARN week1-assignment-csv-to-json-converter@1.0.0 No repository field.

+ jsonfile@4.0.0
added 2 packages in 1.209s

4. csvtojson.js
if (process.argv.length != 4) {
console.error('[usage] process.argv[0] process.argv[1] <input: csv file> <output: json file>')
process.exit(1)
}

var csvFilePathIn = process.argv[2]
var jsonFilePathOut = process.argv[3]

const csv = require('csvtojson')
const jsonfile = require('jsonfile')

let buff = ''
let c = 0

csv()
.fromFile(csvFilePathIn, (err, result)=>{
if (err) {
console.log(`Got error in csvtojson ${err}`)
}
else {
console.log(result)
jsonfile.writeFileSync(jsonFilePathOut, result)
console.log(`Converted from ${csvFilePathIn} to ${jsonFilePathOut}`)
}
})
.on('error', (error) => {
console.error(`Got error: ${error}`)
})


5. My program usage is as following
[usage] process.argv[0] process.argv[1] <input: csv file> <output: json file>
