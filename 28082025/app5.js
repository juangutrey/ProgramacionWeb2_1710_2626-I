let numero1 = parseInt(prompt("Ingresa un numero entero: "));
let numero2 = parseInt(prompt("Ingresa un numero entero: "));
let numero3 = parseInt(prompt("Ingresa un numero entero: "));

let numeroAlto;
let numeroMenor;

// Iguales
if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los tres números son iguales: " + numero1);

} else {
    // Numero Mayor
    if (numero1 >= numero2 && numero1 >= numero3) {
        numeroAlto = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        numeroAlto = numero2;
    } else {
        numeroAlto = numero3;
    }
    console.log("El número más alto es: " + numeroAlto);

    // Numero menor
    if (numero1 <= numero2 && numero1 <= numero3) {
        numeroMenor = numero1;
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        numeroMenor = numero2;
    } else {
        numeroMenor = numero3;
    }
    console.log("El número menor es: " + numeroMenor);

    // Solo dos numeros
    if (numero1 === numero2 && numero1 !== numero3) {
        console.log("El número 1 y el número 2 son iguales: " + numero1);
    } else if (numero1 === numero3 && numero1 !== numero2) {
        console.log("El número 1 y el número 3 son iguales: " + numero1);
    } else if (numero2 === numero3 && numero2 !== numero1) {
        console.log("El número 2 y el número 3 son iguales: " + numero2);
    }
}
