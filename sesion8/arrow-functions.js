// funciones tipo flecha

const array = [1, 2, 3, 4, 5, 6, 7,];

const array2 = array.map(function (valor) {
    return valor * 2;
})

console.log(array2); // 


const array3 = array.map((valor) => valor * 2);

//las funciones flecha se guardan normalmente en constantes

const dobleValor = valro => {
    return valor * 2;
};

//const dobleValor = valor => valor * 2;

//las funciiones tipo fleccha si se han inicializado recien en ese momento se puede empezar a acceder a ellas
//las funciones que estan en un const sin nombre son anonimas
console.log(doble(6));



function doble(valor) {
    return valor * 2;
}