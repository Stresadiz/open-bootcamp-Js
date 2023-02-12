//sobrecarga y carga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log("Hola! soy la funcion hola");
}

saludar();

// primero entra en la funcion saludar
// luego salta a ejecutar hola, sale de la funcion hola y sale de la funcion global

//1. global()
//2. saludar() global()
//3. hola() saludar() global()
//4. saludar() global()
//5. global()

