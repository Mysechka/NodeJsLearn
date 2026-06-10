// 3 функиция это 10
function thirdFunction() {
    return 10;
}
// 2 функция это якобы "ссылка" на 3 функцию
function secondFunction() {
    return thirdFunction();
}
// 1 функция это вторая функция
function firstFunction() {
    return secondFunction();
}
// Итого вывод 1 функции которая 2 которая 3 которая 10
console.log(firstFunction()); // вывод 10 