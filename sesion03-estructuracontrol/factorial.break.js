let factorial = 1;
let i = 1;

while (i < 10) {
    factorial = factorial * i;
    console.log(factorial);
    
    i++;

    if (i > 9) {
        break;
    }
}