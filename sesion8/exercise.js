//Ejercicio 1

function onlyTrue() {
    return true;
}

//Ejercicio 2

function after5Seconds() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(`Hola soy una promesa`)
        }, 5000);
    });
};

async function asyncCall() {
    const result = await after5Seconds();
    console.log(result);
}

asyncCall();


//Ejercicio 3

function* funcionGen() {
    let i = 0;

    while (true) {
        i += 2;
        
        yield i;
    }
}

let gen = funcionGen();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

