let optUser = promt(`
    Selecciona una opcion
    1.- Libros
    2.- Pelicula
    3.- Juegos
    `)
switch(optUser){
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("FIFA");
        break;
}