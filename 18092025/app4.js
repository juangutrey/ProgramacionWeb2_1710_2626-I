var productos = [
  {nombre: 'Camisa', precio: 300},
  {nombre: 'Pantalón', precio: 500},
  {nombre: 'Zapatos', precio: 800},
  {nombre: 'Sombrero', precio: 200}
];

var carrito = [];
var opcion;

do {
  opcion = prompt(
    "Seleccione un producto para agregar al carrito:\n\n" +
    productos.map((p, i) => (i+1) + ". " + p.nombre + " - $" + p.precio).join("\n") +
    "\n5. Ver Carrito y Total\n6. Salir"
  );

  if (opcion >= 1 && opcion <= 4) {
    let producto = productos[opcion - 1];
    carrito.push(producto);
    alert(producto.nombre + " agregado al carrito.");
  } else if (opcion == 5) {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
    } else {
      let lista = carrito.map((p, i) => (i+1) + ". " + p.nombre + " - $" + p.precio).join("\n");
      let total = carrito.reduce((suma, p) => suma + p.precio, 0);
      alert("Carrito:\n\n" + lista + "\n\nTotal: $" + total);
    }
  } else if (opcion != 6) {
    alert("Opción no válida.");
  }

} while (opcion != 6);

alert("Gracias por su compra.");