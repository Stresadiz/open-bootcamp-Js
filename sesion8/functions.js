//funciones javascript
const nom = "Seba";

saludar(nom);

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
};

// Despedir

let nom2 = "Juan";

despedir(nom2);

function despedir(nombre) {
    nombre = "Diego";

    console.log(`Adios ${nombre}`);
};

//No altera la variable en un dato tipo primitivo

let persona = {
    nombre: "Juan",
    apellido: "Gonzalez"
};

saludarPersona(persona); //Hola Juan gonzalez // Hola juan Villar

function saludarPersona(objeto) {
    objeto.apellido = "Villar";
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`); 
    //nos cambie el apellido del objeto original
}

saludar(); //Hola undefined

 // saludarPersona(); //Error

 function imprimeNumero(numero = 7) {
    console.log(numero);
    //valor por defecto = 7
 }

imprimeNumero(7); //7
imprimeNumero(); //undefined //7
imprimeNumero(9); //9

function imprimir(...parametros) {
    console.log(parametros);

    //imprime con cantidad de parameteos que querramos
}

imprimir(1, 2, 3, "Hola");

function suma(...nums) {
    //console.log(typeof nums[2]) // 3;
    //console.log(...nums); // 1 2 3 4
    //nums.reduce((a, b) => a + b);
    return nums.reduce((a, b) => a + b);
}

//reduce() :   
//          reduce(function(a,b){return a + b});
//          reduce((a, b) => a + b) arrow function

const s = suma(1, 2, 3, 4);

console.log(s); // 1 + 2 + 3 + 4 = 10


/*


        Ambito Global


*/

function multiplicar(a = 0, b = 0) {
    return a * b;

    /*


        Ambito de la funcion


    */
}

console.log(multiplicar(4, 9)); //36