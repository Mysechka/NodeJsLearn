const fs = require('fs')

let name = 'John'
let age = 19

fs.writeFile('./database.txt',  `${name}, ${age}`, () => {
    console.log('File written');
})