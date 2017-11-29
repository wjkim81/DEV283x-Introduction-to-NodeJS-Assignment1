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

