function saludar (){
    console.log("Hola mundo desde una funcion");
}
// console.log(saludar());
// console.log(saludar);
// saludar;
// saludar();
// saludar("Saludar");
// console.log(function saludar());
// console.log(function saludar);

function saludo(nombreUsuario) {
    alert("Tu nombre es: " + nombreUsuario);
}

// Llamada a la función
let usuario = prompt("Escribe tu nombre");
saludo(usuario);