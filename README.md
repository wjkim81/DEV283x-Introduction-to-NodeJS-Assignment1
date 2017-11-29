# DEV283x-Introduction-to-NodeJS-Assignment1

1. Create package.json file

$ npm init

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

2. Install csvtojson

$ npm install csvtojson

3. Install jsonfile

$ npm i jsonfile

4. Write my code:  csvtojson.js

I used csvtojson package to convert csv format to json format
To writing json object to file, I used jsonfile package.

5. My program usage is as following
[usage] process.argv[0] process.argv[1] <input: csv file> <output: json file>
