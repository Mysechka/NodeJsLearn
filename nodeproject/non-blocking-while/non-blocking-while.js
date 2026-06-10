const fs = require('fs');

// const на месте let сломает код
let isRunning = true;

// Timeout должен быть изначально должен быть 10 но, лучше чтобы он был 0
setTimeout(() => (isRunning = false), 10);
process.nextTick(() => console.log('Next tick'));

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve());
    });
}

// Асинхронная функция
async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log('While loop ended'));