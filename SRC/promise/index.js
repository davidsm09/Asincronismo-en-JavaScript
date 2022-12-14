/*饾棨饾槀茅 饾榾饾椉饾椈 饾椆饾棶饾榾 饾椊饾椏饾椉饾椇饾棽饾榾饾棶饾榾 
.
馃獌 Un callback devuelve una funci贸n en los par谩metros, 
cuando llamamos varias veces un callback, estaremos colocando muchas lineas de c贸digo y ser铆a engorroso, 
por eso nacen las promesas, 茅stas optimizan y permiten leer mejor el c贸digo con pocas lineas.


.Las promesas son as铆ncronas, por lo que el c贸digo continuar谩 su ejecuci贸n normalmente 
y luego dir谩 si la promesa se resolvi贸 o se rechaz贸. 
Por lo que varias promesas pueden llegar a entrar en ejecuci贸n al mismo tiempo.
.
Las promesas pueden suceder:
.

Ahora
En el futuro
Nunca
.
馃洜锔? Para crear una promesa:
.
Utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. 
Este constructor recibe un 煤nico par谩metro que es una funci贸n, la cu谩l a su vez, recibe otros dos par谩metros: resolve y reject.

El par谩metro resolve se utiliza para cuando la promesa devuelve el valor correctamente.
El par谩metro reject, se usa en el que caso de que no funcione. */

const promise = new Promise((resolve, reject) => {
    resolve('hey')
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`we have ${cows} cows on the farm` );
    } else {
        reject('there is not on the farm');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));

