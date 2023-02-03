//Loops

//For loops

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

//for (inicializacion, condicion, actualizacion){}

//for (let i = 0; i < 3; i++) {
//    console.log(i);
//}

let array = [1, 4, 6, 7, 10, 12];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//for of

for (let valor of array) {
    console.log(valor);
}

//for each

/* lista.foreach(valor => {
    console.log(valor);
)}*/


//for in

let persona = {
    nombre  : "Seba",
    apellido : "Luna",
    edad : "20",
    isDev : true,
}

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

