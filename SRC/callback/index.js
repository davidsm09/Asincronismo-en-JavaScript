//Funcion inicial. solo suma valores
function sum(num1, num2) {
    return num1 + num2;
}
//Funcion callback que recibe otra funcion en este caso recibira la funcion sum
function calc(num1, num2, callback) {
    return callback(num1, num2);
};
//El callback en este caso recibe 


//manera de invocar el callback
console.log(calc(2, 2, sum));


//SetTimeOut
//Por si misma ya es un callbasck

setTimeout(function () {
    console.log('Hola JavaScript');
}, 5000)

function gretting(name) {
    console.log(`Hola ${name}`);
}
//REcibe una funcion el tiempo de ejecucion y argumentos a utilizar!
setTimeout(gretting, 2000, 'Oscar');