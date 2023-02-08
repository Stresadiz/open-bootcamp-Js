//operador .valueOf

let a = 2;

let b = new Number(3);

console.log(a); //2

console.log(b); // Number 3 {}

console.log(a + b); //2 + 3 = 5

console.log(b.valueOf()); //3

let str = new String("Hola, soy un string");

console.log(str);

console.log(str.valueOf()); //Hola, soy un string

//Nan (not a number) - infinity

let n = Number("adios");

console.log(n); //Nan

console.log(isNaN.n); //true

let num = 19;

let div = 0;

let div2 = null;

console.log(num.div); //infinity

console.log(num / div2); // infinity

//Number, parseInt, parseFloat

let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); //concatena

console.log(Number(numero) + num2); //realiza la suma, sino devuelve Nan si no es un numero

console.log([typeof parseInt(numero)]); //ignora los numeros detras de la coma
console.log(typeof parseFloat(numero)); //numero con decimales



//Hexadecimales (base 16)

let numHex = "0x3a5b7";

console.log(parseInt(numHex, 16)); //lo pasa a numero en base 16 239831

//Obtener max y min en javascript

let min_precision = Number.EPSILON //minima diferencia entre un numero y el siguiente, minima precision

let min_value_js = Number.MIN_VALUE;

let MAX_VALUE_JS = Number.MAX_VALUE;

console.log(min_precision);

console.log(min_value_js);

console.log(MAX_VALUE_JS);