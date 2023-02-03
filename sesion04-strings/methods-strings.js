let str = "Hola soy un string";
console.log(str.length);

//substrings
let slice_str = str.slice(0, 5);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

//deprecado
let substr_str = str.substr(5, 10);
console.log(substr_str);

//remplazar contenido de string

let cadena = "Hello my name is Seba";
console.log(cadena.replace("Seba", "Aurelio"));


//Solo actua por la primera instancia

let texto_largo = "Tito no es un mono cualquera. A Tito no le gusta trepar por los arboles";

console.log(texto_largo.replace("no", "5"));


//Para remplazar todos, la escribimos como una expresion regular y a partir de ahi, le agregamos la g de global
console.log(texto_largo.replace(/no/g, "5"));
