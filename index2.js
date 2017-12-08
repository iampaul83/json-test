const debug = require('debug')('json-test')
const fs = require('fs') 

debug('start')

let data = fs.readFileSync('file-18mb.json')

debug('read file into memory')

data = data.toString('utf8')

debug('convert binary to string')

data = JSON.parse(data)

debug('parse json')

const regex = /^(D|AP|NP|LN)\d{8}[a-zA-Z0-9]{6}$/

for (let i = 0; i < data.length; i++) {
    const recordID = data[i]
    if (typeof recordID !== 'string' || regex.test(recordID) === false) {
        throw new Error('not valid record id')
    }
}

debug('validate record id')
