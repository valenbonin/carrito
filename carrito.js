const menus = [
    {nombre: "Inicio", url: "index.html"},
    {nombre: "¿Quienes somos?", url: "quienes.html"},
    {nombre: "Contacto", url: "contacto.html"},
    {nombre: "Carrito", url: "carrito.html"},
];

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu");
    for (const menu of menus) {
        let lista = document.createElement("li");
        lista.innerHTML = `<a href=${menu.url}>${menu.nombre}</a>`;
        enlaces.appendChild(lista);
    }
}
cargarmenu();  

let productocarritos = JSON.parse(localStorage.getItem("carrito"));

function cargarcarrito() {
    let enlaces = document.getElementById("tablacarrito");
    let total = 0;  // Para calcular el total
    let cantidadTotal = 0; // Para contar los productos

    // Limpiar la tabla antes de agregar los productos
    enlaces.innerHTML = '';

    for (const productocarrito of productocarritos) {
        let lista = document.createElement("tr");
        let precioTotalProducto = productocarrito.cantidad * productocarrito.precio;
        total += precioTotalProducto;  // Sumar al total
        cantidadTotal += productocarrito.cantidad;  // Sumar la cantidad de productos

        lista.id = `${productocarrito.id}`;
        lista.innerHTML = `
            <td><img src="${productocarrito.urlImagen}" width="50"></td>
            <td>${productocarrito.cantidad}</td>
            <td>${productocarrito.nombre}</td>
            <td>${productocarrito.precio}</td>
            <td>${precioTotalProducto}</td>
            <td><button id="btneliminar" onclick="eliminarproducto('${productocarrito.id}')">x</button></td>
        `;
        enlaces.appendChild(lista);
    }

    // Mostrar el total en un elemento de la página
    let totalElement = document.getElementById("total");
    if (totalElement) {
        totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
    }

    // Mostrar la cantidad total de productos en el icono del carrito
    let iconoCarrito = document.getElementById("iconoCarrito");
    if (iconoCarrito) {
        iconoCarrito.innerHTML = cantidadTotal;
    }

    // Agregar el botón de finalizar compra
    let finalizarCompra = document.getElementById("finalizar-compra");
    if (finalizarCompra) {
        finalizarCompra.style.display = productocarritos.length > 0 ? "block" : "none"; // Mostrar solo si hay productos en el carrito
    }
}
cargarcarrito();

function eliminarproducto(id) {
    let nodo = document.getElementById(id);
    nodo.remove();
    id = parseInt(id);
    productocarritos = productocarritos.filter(producto => producto.id !== id);
    const enJSON = JSON.stringify(productocarritos);
    localStorage.setItem("carrito", enJSON);
    cargarcarrito();  // Recalcular el carrito y el total después de eliminar
}

// Botón de finalizar compra
function finalizarCompra() {
    alert("Compra finalizada, gracias por tu compra!");
    // Aquí puedes redirigir a la página de pago o proceso de finalización
    window.location.href = "finalizar-compra.html"; // Por ejemplo
}

