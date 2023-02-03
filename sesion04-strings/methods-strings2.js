//

let input = "Escorpio";

let db = "escorpio";

console.log(input === db); //tihis will be false

console.log(input.toLowerCase() === db.toLowerCase()); // This will be true

//

input = input.toLowerCase();

db = db.toLowerCase();

input = input.toUpperCase();

db = db.toUpperCase();

//concat

let str_1 = "Hola souy la primera cadena de texto";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(str_2)); //concat 2 strings

console.log(str_1.concat(" ", str_2, " ", "Mas cosas")); //multiple concat, this method is more practice

console.log(str_1 + " " + str_2); //concat whit + operator 

console.log(`${str_1} ${str_2}`); //backticks method

//Delete spaces

let str3 = "Hola soy un string con espacios al final   ";

console.log(str3.length);

//trim()

console.log(str3.trim().length); //Borramos los espacios al final

console.log(str3.trimStart().length); //Delete the spaces of the start

console.log(str3.trimEnd().length); //Delete spaces at final


//Obtain char in determinate index

let str_4 = "Hola soy el string numero 4"; // ["H", "o", "l", "a", etc]

console.log(str_4.charAt(5)); //5 is the index or position

console.log(str_4[5]); // s is the letter

//Obtain position of word in string

let str_5 = "Hola soy Seba y esto es una string, el string es sobre mi nombre = Seba";

console.log(str_5.indexOf("Seba")); //This return 9, 9 is the first char of the word, -1 is not found

console.log(str_5.charAt(9)); //Return S of Seba

console.log(str_5.lastIndexOf("Seba")); //Return last instance of the word





