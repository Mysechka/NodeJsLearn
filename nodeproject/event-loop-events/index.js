const fs = require('fs')
const dns = require('dns')

function info(text){
    console.log(text, performance.now().toFixed(2))
}

console.log('Program start')

// Timeouts
setTimeout(() => info('Timeout 1'))
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'))
    info('Timeout 2')
}, 100)

// Close events
fs.writeFile('./test.txt', 'Hello node.js', () => info('File written'))

// Promises
Promise.resolve().then(() => info('Promise 1'))

// Next tick
process.nextTick(() => info('Next tick 1'))

//set immediate
setImmediate(() => info('Immediate 1'))

// Intervals
let intervalcount = 0
const intervalid = setInterval(() => {
    info(`Interval ${intervalcount += 1}`)
    if (intervalcount === 2) clearInterval(intervalid)
}, 50)

// i/o events
dns.lookup('localhost', (err, address, family) => {
    info('DNS 1 localhost')
    Promise.resolve().then(() => info('Promise 2'))
    process.nextTick(() => info('Next tick 3 '))
})

console.log('Program end')

