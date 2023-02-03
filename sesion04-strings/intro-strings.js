let str_dual = "Hola, soy un texto";
let str_sng = 'String con comillas simples';


console.log(str_dual);
console.log(str_sng);
console.log();

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\" .";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";

let backtick = `String con backticks`;
let nombre = "Sebas";
let saludo = `Hola ${nombre}, bienvenido!`
console.log(saludo);

//plantillas HTML

let plantilla = `
<html>
    <h1>Bienvenido ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`;

//introducion de variables en HTML

let libros = [
    "Empieza por el por que",
    "El monje que vendio su Ferrari",
    "El poder del ahora"
]