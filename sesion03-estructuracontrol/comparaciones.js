// Comparaciones

//Igualdad
if (5 == 5) {
    console.log("5 es igual a 5");
}

if (5 === 5) {
    console.log("5 es muy igual a 5");
}

let a = 5;

let b = "5";

// == solo compara valor
// === compara el valor y el tipo

if (a == 5) {
    console.log("A s igual a B, debil");
    //compara el valor
}

if (a === b) {
    console.log("A es igual a B, fuerte");
    //compara el valor y el tipo
}

let c = 4;
let d = 10;

if (c != d) {
    console.log("C es diferente a D, Debil");
    //compara que sean diferentes solo en valor
}

if (c !== d) {
    console.log("C es diferente a D, fuerte");
    //compara que sean diferentes en valor o en tipo
}

//mayores y menores

let max = 10;
let min = 5;

if (max > min) {
    console.log("Max es mayor que min");
}

if (max >= min) {
    console.log("Max es mayor o igual a Min");
}

if (max < min) {
    console.log("Max es menor que min");
}

if (max <= min) {
    console.log("Max es menor o igual que Min");
}