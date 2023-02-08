//principales operaciones aritmeticas

let a = 3.5;

let b = 4.8;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

//representacion de los numeros en cadenas

console.log(typeof a);


//convertir a string
let a_s = a.toString();

console.log(a_s);

//redondeo

let c = 3.3;

let d = c * 3;

console.log(d);

//.tofixed () parametro para indicar cantidad de decimales - de num a string

console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let f = 34567890;

console.log(f.toFixed(2)); // .00

//.toPrecision(x) - limita el numero de cifras significativas / devuelve cientificamente

let e = 2134.12345432;

console.log(e.toPrecision(7));

console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(7)); //string