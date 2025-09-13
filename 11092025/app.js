// arreglo vacio
let nombre = [];

//funcion para agregar el nombre al arreglo
function agregarNombre(){

    let nombre = prompt("Ingresa el nombre: ");

    if (nombre){
        nombres.push(nombre);
        alert(`Nombre es ${nombre} agregado exitosamente`);

    }else{
        alert(`El nombre esta vacio. `);
    }
}
function mostrarNombres(){
    if(nombres.length === 0){
    alert(`No hay nombres almacenados`);
    }else{
    //     let mensaje = "Nombres almacenados: \n ";
    //     nombres.forEach((nombre, index)=>{
    //         mensaje+= `${index + 1}. ${nombre}\n`;
    //     });
    alert(mensaje);
    }
}