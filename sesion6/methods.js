let array = [1, "hola", true];

console.log(array[0]);

//methods wich changes our array

//add at the final
array.push("final");

console.log(array);

//unshift, add at the start

array.unshift("inicio");

console.log(array);


//borrar elementos del array

let array2 = [1, 3, "hola", false];

//remove at the final - pop
array2.pop()
console.log(array2);

//remove at the start - shift

array2.shift();
console.log(array2);

//metodo para eliminar, moficar o agregr valores

const array3 = [1, 2, 3, 4, 5, 6];

//eliminar valores splice(indice, numerosAEliminar)
array3.splice(2, 1); 
console.log(array3);

//agregar valores splice(indice, 0, valorAgregar)
array3.splice(2, 0, "Hola");
console.log(array3);

//modificar valores
//Modificar valores splice(indice, inidiceAEliminar, valorNuevo)
array3.splice(2, 1, 3);