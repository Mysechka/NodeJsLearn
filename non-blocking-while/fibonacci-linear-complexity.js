// числа фибиначи 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// индекс фибаначи 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// число фибаначи это сложение 2 предыдущих чисел
// рекурсивная функция

function info(text){
    console.log(text, performance.now().toFixed(2))
}

info('Program start')


setTimeout (() => info('timeout'), 0)
function fib(n) {
    if (n === 0 || n === 1) {
        return n
    }
    let fib1 = 0
    let fib2 = 1
    let sum
    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2
        fib1 = fib2
        fib2 = sum
    }
    return sum
}

console.log(info(fib(67)))

info('Program end')