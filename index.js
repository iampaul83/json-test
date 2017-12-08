const debug = require('debug')('json-test')
const fs = require('fs') 

debug('start')

let data = fs.readFileSync('file-18mb.json')

debug('read file into memory')

data = data.toString('utf8')

debug('convert binary to string')

data = JSON.parse(data)

debug('parse json')

for (let i = 0; i < data.length; i++) {
    const recordID = data[i]
    if (typeof recordID !== 'string') {
        throw new Error('record id is not string')
    }
}

debug('validate record id')
