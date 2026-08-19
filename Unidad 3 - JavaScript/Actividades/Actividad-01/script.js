// Declaro variables
// String
let string = "Hola Mundo!";

// Number
let number = 42;

// Boolean
let boolean = true;

// Array
let array = [1, 2, 3, 4, 5];

// Object
let object = {
    nombre: "Juan",
    edad: 30
};
// Muestro los valores y los tipos de las variables
console.log("Valor:", string, "Tipo:", typeof string);
console.log("Valor:", number, "Tipo:", typeof number);
console.log("Valor:", boolean, "Tipo:", typeof boolean);
console.log("Valor:", array, "Tipo:", typeof array);
console.log("Valor:", object, "Tipo:", typeof object);

// Declaro constante
const PI = 3.14159; 
console.log(PI);

// Esto genera error porque PI es una constante
// PI = 3.14; 

const primerNum = 10;
const segundoNum = 5;

// Suma
const suma = primerNum + segundoNum;
console.log("Suma:", suma);

// Resta
const resta = primerNum - segundoNum;
console.log("Resta:", resta);

// Multiplicación
const multiplicacion = primerNum * segundoNum;
console.log("Multiplicación:", multiplicacion);

// División
const division = primerNum / segundoNum;
console.log("División:", division);

// Módulo
const modulo = primerNum % segundoNum;
console.log("Módulo:", modulo);

// Igualdad
console.log(5==5); // true
console.log(5=="5"); // true

// Diferencia
console.log(5!=5); // false
console.log(5!=6); // true

// Igualdad estricta
console.log(5===5); // true
console.log(5==="5"); // false

// Diferencia estricta
console.log(5!==5); // false
console.log(5!==6); // true

// Verificación de paridad utilizando el operador módulo
if (primerNum % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

// Muestro indices y valores del array utilizando forEach
array.forEach((num, i)=>{
    console.log(`Índice: ${i}, Valor: ${num}`);
});

// Imprimo los números del 1 al 5 utilizando un bucle while
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
