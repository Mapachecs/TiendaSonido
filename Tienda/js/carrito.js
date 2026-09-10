// 1. Productos (misma semilla que index.js, por si esta página se visita
//    antes que el catálogo y "productos_sonidovivo" aún no existe)
function obtenerProductosCarrito() {
  const guardados = localStorage.getItem("productos_sonidovivo");
  if (!guardados) {
    const iniciales = [
      { id: 1, nombre: "Guitarra Eléctrica Fender Stratocaster", categoria: "Guitarras", precio: 750000, stock: 5, img: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=400&q=80" },
      { id: 2, nombre: "Teclado Roland XPS-10", categoria: "Teclados", precio: 620000, stock: 2, img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=400&q=80" },
      { id: 3, nombre: "Batería Acústica Pearl Roadshow", categoria: "Baterías", precio: 580000, stock: 0, img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=400&q=80" },
      { id: 4, nombre: "Pedal de Efectos Boss DS-1", categoria: "Accesorios", precio: 85000, stock: 12, img: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=400&q=80" }
    ];
    localStorage.setItem("productos_sonidovivo", JSON.stringify(iniciales));
    return iniciales;
  }
  return JSON.parse(guardados);
}

// 2. Carrito: leer y guardar en localStorage
function obtenerCarrito() {
  const guardado = localStorage.getItem("carrito_sonidovivo");
  return guardado ? JSON.parse(guardado) : [];
}

function guardarCarrito() {
  localStorage.setItem("carrito_sonidovivo", JSON.stringify(carrito));
}

let carrito = obtenerCarrito();

// 3. Interfaz del carrito (idéntica a la de index.js)
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

  const agrupados = carrito.reduce((acc, p) => {
    acc[p.id] = acc[p.id] ? { ...p, cant: acc[p.id].cant + 1 } : { ...p, cant: 1 };
    return acc;
  }, {});

  Object.values(agrupados).forEach(p => {
    total += p.precio * p.cant;
    listaHTML.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <h6 class="my-0 fs-6">${p.nombre} (x${p.cant})</h6>
          <small class="text-muted">$${(p.precio * p.cant).toLocaleString('es-CL')}</small>
        </div>
        <div class="d-flex align-items-center gap-1">
          <button class="btn btn-sm btn-outline-success border-0" onclick="agregarAlCarrito(${p.id})">
            <i class="bi bi-plus-lg"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger border-0" onclick="eliminarDelCarrito(${p.id})">
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
      </li>`;
  });

  totalSpan.innerText = `$${total.toLocaleString('es-CL')}`;
}

// 4. Agregar (usado por el botón "+" dentro del propio carrito) validando stock
function agregarAlCarrito(id) {
  const productos = obtenerProductosCarrito();
  const prod = productos.find(p => p.id === id);
  if (!prod || prod.stock <= 0) return alert("Producto no disponible.");

  const enCarrito = carrito.filter(p => p.id === id).length;
  if (enCarrito + 1 > prod.stock) {
    return alert(`No puedes agregar más. Solo quedan ${prod.stock} unidades en inventario.`);
  }

  carrito.push(prod);
  guardarCarrito();
  actualizarCarritoUI();
}

function eliminarDelCarrito(id) {
  const idx = carrito.findIndex(p => p.id === id);
  if (idx !== -1) carrito.splice(idx, 1);
  guardarCarrito();
  actualizarCarritoUI();
}

function vaciarCarrito() {
  if (carrito.length === 0) return;
  if (!confirm("¿Seguro que quieres vaciar el carrito?")) return;
  carrito = [];
  guardarCarrito();
  actualizarCarritoUI();
}

// 5. Finalizar Compra: requiere sesión activa, descuenta stock y registra pedido
function finalizarCompra() {
  const sesionRaw = localStorage.getItem("sesion_activa");
  if (!sesionRaw) {
    alert("Debes iniciar sesión para poder realizar una compra.");
    window.location.href = "login.html";
    return;
  }

  if (carrito.length === 0) return alert("Tu carrito está vacío.");

  const usuario = JSON.parse(sesionRaw);
  const productos = obtenerProductosCarrito();

  productos.forEach(prod => {
    const comprados = carrito.filter(item => item.id === prod.id).length;
    prod.stock -= comprados;
  });
  localStorage.setItem("productos_sonidovivo", JSON.stringify(productos));

  const pedidosGuardados = localStorage.getItem("pedidos_sonidovivo");
  let pedidos = pedidosGuardados ? JSON.parse(pedidosGuardados) : [];
  const totalPagar = carrito.reduce((acc, p) => acc + p.precio, 0);

  pedidos.push({
    id: "PED-" + Math.floor(100 + Math.random() * 900),
    cliente: usuario.nombre || usuario.correo,
    fecha: new Date().toISOString().split('T')[0],
    total: totalPagar,
    estado: "En Preparación"
  });
  localStorage.setItem("pedidos_sonidovivo", JSON.stringify(pedidos));

  alert(`¡Gracias por tu compra, ${usuario.nombre.split(' ')[0]}! Tu pedido ha sido procesado con éxito.`);
  carrito = [];
  guardarCarrito();
  actualizarCarritoUI();
}

// 6. Inicialización
document.addEventListener("DOMContentLoaded", () => {
  actualizarCarritoUI();
  document.getElementById("btnFinalizarCompra")?.addEventListener("click", finalizarCompra);
  document.getElementById("btnVaciarCarrito")?.addEventListener("click", vaciarCarrito);
});