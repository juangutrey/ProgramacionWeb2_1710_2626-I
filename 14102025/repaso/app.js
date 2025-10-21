let inventario = [];
function mostrarMenu(){
    return parseInt(prompt(
        `Opciones disponibles
        1.- Agregar producto
        2.- Mostrar todos los productos
        3.- Buscar producto por nombre
        4.- Salir
        Elige una opcion:`    
    ));
}

function agregarProducto(){
    let nombre = prompt ("Ingresa el nombre del producto:");
    let cantidad = parseInt(prompt("Ingresa la cantidad del producto"));
    let precio = parseFloat(prompt("Ingresa el precio del producto"));

    if (cantidad > 0 && precio > 0){
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        }; //Para agregar 

        inventario.push(producto);
        alert("Producto agregado");
    }else{
        alert("Cantidad y precio deben de ser numeros positivos");
    }
}

function mostrarProducto(){
    if(inventario.length === 0){
        alert("Inventario vacio");
    }else{
        let mensaje = "Productos del inventario \n";
        for (let i = 0; i < inventario.length; i++){
            mensaje+= `Producto: ${i+i} \n`+
                      `Nombre: ${inventario[i].nombre}\n`+
                      `Precio: ${inventario[i].precio}\n`+
                      `Cantidad: ${inventario[i].cantidad}\n`+
                      "--------------------------------------";
        }
        alert(mensaje);
    }
}

function buscarProducto(){
    let nombre 
}