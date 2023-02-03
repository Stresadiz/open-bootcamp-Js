//regexr.com is for regular expresions

let texto_largo = "Tito no es un mono cualquera. A Tito no le gusta trepar por los arboles";

console.log(texto_largo.match(/no/g)); //Return ["no, "no", "no", "no"]

console.log(texto_largo.includes("prefieres")); //return true or false if the word is in the text

console.log(texto_largo.startsWith("Tito")); //Return true or false, is case sensitive

console.log(texto_largo.endsWith(".")); //Return true or false