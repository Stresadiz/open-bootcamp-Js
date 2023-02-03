//break and continue

let array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < array.length; i++) {
    
    if (array[i] = 3) {
        continue;
        //Salta a la siguinte iteraccion
    }
    
    console.log(array[i]);
    
    if (array[i] > 5) {
        break;
        //Salir del bucle
    }
}

//Alcance de un bucle

//let is only for blocks
//var is for global code
//const cant be repeated inner the block was be declared