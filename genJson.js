const fs = require('fs') 

let arrayOfRecordIds = []

for (let i = 0; i < 1000000; i++) {
    arrayOfRecordIds.push('D20171208m9cBNr')
}

arrayOfRecordIds = JSON.stringify(arrayOfRecordIds)

fs.writeFileSync('test.json', arrayOfRecordIds)