const menus = [{nombre: "Inicio", url: "index.html"},
            {nombre: "¿Quienes somos?", url: "quienes.html"},
            {nombre: "Contacto", url: "contacto.html"},
            {nombre: "Carrito", url: "carrito.html"},
]

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu")
    for (const menu of menus) {
        let lista = document.createElement("li")
        lista.innerHTML =`<a href=${menu.url}>${menu.nombre}</a>`;
        enlaces.appendChild(lista);
    }
}
cargarmenu() 

const productos = [
    { 
      id: 1,
      nombre: "Carta de amor a los muertos",
      urlImagen: "lavadora.jpg",
      precio: 50000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 15
    },
    {
      id: 2,
      nombre: "Still whit you",
      urlImagen: "refrigerador.jpg",
      precio: 90000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 8
    },
    {
      id: 3,
      nombre: "Todo este tiempo",
      urlImagen: "microondas.jpg",
      precio: 25000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 25
    },
    {
      id: 4,
      nombre: "Boulevard",
      urlImagen: "aspiradora.jpg",
      precio: 60000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 12
    },
    {
      id: 5,
      nombre: "La familia robinson",
      urlImagen: "televisor.jpg",
      precio: 120000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 7
    },
    {
      id: 6,
      nombre: "Al final mueren los dos",
      urlImagen: "cafetera.jpg",
      precio: 15000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 30
    },
    {
      id: 7,
      nombre: "Nosotros en la luna",
      urlImagen: "plancha.jpg",
      precio: 8000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 20
    },
    {
      id: 8,
      nombre: "La vida invisible de Addie Larue",
      urlImagen: "horno.jpg",
      precio: 45000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 10
    },
    {
      id: 9,
      nombre: "Todo lo que somos juntos",
      urlImagen: "licuadora.jpg",
      precio: 12000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 18
    },
    {
      id: 10,
      nombre: "Todo lo que nunca fuimos",
      urlImagen: "ventilador.jpg",
      precio: 5000,
      descripcion: "Libro usado, como nuevo y sin marcas.",
      stock: 40
    }
  ];
  
  function cargarproductos() {
    let enlaces = document.getElementById("boxproductos")
    for (const producto of productos) {
        let lista = document.createElement("div")
        lista.innerHTML =`  <h3>${producto.nombre}</h3>
                            <img src=${producto.urlImagen} alt="" width="100">
                            <p>${producto.precio}</p>
                            <button onclick="verdetalle('${producto.id}')">Detalles</button>
                        `;
        enlaces.appendChild(lista);
    }
}
cargarproductos()

function verdetalle(idproducto) {
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  const enJSON    = JSON.stringify(buscarProducto);
  localStorage.setItem("detalleproducto", enJSON)
  window.location.href="detalle.html"
}

