// 1. Productos iniciales por defecto si la memoria está vacía
const productosIniciales = [
  { id: 1, nombre: "Guitarra Eléctrica Fender Stratocaster", categoria: "Guitarras", precio: 750000, stock: 5, img: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=400&q=80" },
  { id: 2, nombre: "Teclado Roland XPS-10", categoria: "Teclados", precio: 620000, stock: 2, img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=400&q=80" },
  { id: 3, nombre: "Batería Acústica Pearl Roadshow", categoria: "Baterías", precio: 580000, stock: 0, img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=400&q=80" },
  { id: 4, nombre: "Pedal de Efectos Boss DS-1", categoria: "Accesorios", precio: 85000, stock: 12, img: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=400&q=80" }
];

// Obtener la lista unificada de productos desde localStorage
function obtenerProductos() {
  const guardados = localStorage.getItem("productos_sonidovivo");
  if (!guardados) {
    localStorage.setItem("productos_sonidovivo", JSON.stringify(productosIniciales));
    return productosIniciales;
  }
  return JSON.parse(guardados);
}

let productos = obtenerProductos();
let carrito = [];

// 2. Verificar y renderizar sesión activa en la tienda
function verificarSesionCliente() {
  const sesionRaw = localStorage.getItem("sesion_activa");
  const contenedorAuth = document.getElementById("contenedorAuth");

  if (!contenedorAuth) return;

  if (sesionRaw) {
    const usuario = JSON.parse(sesionRaw);

    contenedorAuth.innerHTML = `
      <span class="text-white small me-2">
        <i class="bi bi-person-circle me-1"></i>Hola, <b>${usuario.nombre.split(' ')[0]}</b>
      </span>
      ${usuario.rol === 'Administrador' || usuario.rol === 'Vendedor' ? 
        `<a href="admin.html" class="btn btn-warning btn-sm me-1"><i class="bi bi-gear-fill me-1"></i>Panel</a>` : ''}
      <button class="btn btn-outline-danger btn-sm" id="btnCerrarSesionTienda">
        <i class="bi bi-box-arrow-right me-1"></i>Salir
      </button>
    `;

    document.getElementById("btnCerrarSesionTienda").addEventListener("click", () => {
      localStorage.removeItem("sesion_activa");
      window.location.reload();
    });

  } else {
    contenedorAuth.innerHTML = `
      <a href="login.html" class="btn btn-outline-light btn-sm">
        <i class="bi bi-person-fill me-1"></i>Iniciar Sesión
      </a>
    `;
  }
}

// 3. Renderizar tarjetas de productos en el HTML
function renderizarProductos(lista) {
  const contenedor = document.getElementById("contenedorProductos");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = `<p class="text-center text-muted col-12 py-5">No se encontraron productos.</p>`;
    return;
  }

  lista.forEach(prod => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card h-100 shadow-sm border-0">
        <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
        <div class="card-body d-flex flex-column">
          <span class="badge bg-secondary mb-2 align-self-start badge-categoria">${prod.categoria}</span>
          <h5 class="card-title h6">${prod.nombre}</h5>
          <p class="card-text text-primary fw-bold fs-5 mt-auto">$${prod.precio.toLocaleString('es-CL')}</p>
          <button class="btn btn-outline-primary btn-sm w-100 mt-2" onclick="agregarAlCarrito(${prod.id})">
            <i class="bi bi-cart-plus me-1"></i>Agregar al carrito
          </button>
        </div>
      </div>
    `;
    contenedor.appendChild(col);
  });
}

// 4. Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    carrito.push(producto);
    actualizarCarritoUI();
  }
}

// 5. Actualizar interfaz del carrito y total
function actualizarCarritoUI() {
  const countElem = document.getElementById("cart-count");
  const listaHTML = document.getElementById("listaCarrito");
  const totalSpan = document.getElementById("totalCarrito");

  if (countElem) countElem.innerText = carrito.length;
  
  if (!listaHTML || !totalSpan) return;

  if (carrito.length === 0) {
    listaHTML.innerHTML = `<li class="list-group-item text-muted text-center py-3">El carrito está vacío.</li>`;
    totalSpan.innerText = "$0";
    return;
  }

  listaHTML.innerHTML = "";
  let total = 0;

  carrito.forEach((prod, index) => {
    total += prod.precio;
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <div>
        <h6 class="my-0 fs-6">${prod.nombre}</h6>
        <small class="text-muted">$${prod.precio.toLocaleString('es-CL')}</small>
      </div>
      <button class="btn btn-sm btn-outline-danger border-0" onclick="eliminarDelCarrito(${index})">
        <i class="bi bi-trash-fill"></i>
      </button>
    `;
    listaHTML.appendChild(li);
  });

  totalSpan.innerText = `$${total.toLocaleString('es-CL')}`;
}

// 6. Eliminar ítem del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarritoUI();
}

// 6.1. Finalizar Compra y vaciar el carrito
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de comprar.");
    return;
  }

  alert("¡Gracias por tu compra! Tu pedido ha sido procesado con éxito.");
  
  // Vaciar el arreglo del carrito
  carrito = [];
  
  // Refrescar la vista del carrito
  actualizarCarritoUI();

  // Si tienes un Modal de Bootstrap para el carrito, lo podemos cerrar opcionalmente:
  const modalElem = document.getElementById('modalCarrito');
  if (modalElem) {
    const modal = bootstrap.Modal.getInstance(modalElem);
    if (modal) modal.hide();
  }
}

// 7. Inicializar eventos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  verificarSesionCliente();
  renderizarProductos(productos);
  actualizarCarritoUI();

  // Escuchar el botón de Finalizar Compra
  const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");
  if (btnFinalizarCompra) {
    btnFinalizarCompra.addEventListener("click", finalizarCompra);
  }

  // Escuchar búsqueda dinámica
  const inputBuscar = document.getElementById("inputBuscar");
  if (inputBuscar) {
    inputBuscar.addEventListener("input", (e) => {
      const texto = e.target.value.toLowerCase();
      const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
      renderizarProductos(filtrados);
    });
  }

  // Escuchar filtro por categoría
  const selectCategoria = document.getElementById("selectCategoria");
  if (selectCategoria) {
    selectCategoria.addEventListener("change", (e) => {
      const cat = e.target.value;
      if (cat === "todas") {
        renderizarProductos(productos);
      } else {
        const filtrados = productos.filter(p => p.categoria === cat);
        renderizarProductos(filtrados);
      }
    });
  }
});