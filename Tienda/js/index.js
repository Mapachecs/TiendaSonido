// 1. Obtener productos desde localStorage o cargarlos por defecto
function obtenerProductos() {
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

let productos = obtenerProductos();
let carrito = [];

// 2. Control de sesión del cliente
function verificarSesionCliente() {
  const sesionRaw = localStorage.getItem("sesion_activa");
  const contenedorAuth = document.getElementById("contenedorAuth");
  if (!contenedorAuth) return;

  if (sesionRaw) {
    const usuario = JSON.parse(sesionRaw);
    contenedorAuth.innerHTML = `
      <span class="text-white small me-2"><i class="bi bi-person-circle me-1"></i>Hola, <b>${usuario.nombre.split(' ')[0]}</b></span>
      ${['Administrador', 'Vendedor'].includes(usuario.rol) ? `<a href="admin.html" class="btn btn-warning btn-sm me-1"><i class="bi bi-gear-fill me-1"></i>Panel</a>` : ''}
      <button class="btn btn-outline-danger btn-sm" onclick="cerrarSesion()"><i class="bi bi-box-arrow-right me-1"></i>Salir</button>`;
  } else {
    contenedorAuth.innerHTML = `<a href="login.html" class="btn btn-outline-light btn-sm"><i class="bi bi-person-fill me-1"></i>Iniciar Sesión</a>`;
  }
}

function cerrarSesion() {
  localStorage.removeItem("sesion_activa");
  window.location.reload();
}

// 3. Renderizar productos con aviso y botón de stock
function renderizarProductos(lista) {
  const contenedor = document.getElementById("contenedorProductos");
  if (!contenedor) return;
  
  if (lista.length === 0) {
    contenedor.innerHTML = `<p class="text-center text-muted col-12 py-5">No se encontraron productos.</p>`;
    return;
  }

  contenedor.innerHTML = lista.map(prod => {
    const disponible = prod.stock > 0;
    return `
      <div class="col-md-4 col-lg-3 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <img src="${prod.img}" class="card-img-top p-3" alt="${prod.nombre}" style="height: 200px; object-fit: contain;">
          <div class="card-body d-flex flex-column">
            <span class="badge bg-secondary mb-2 align-self-start">${prod.categoria}</span>
            <h5 class="card-title h6 fw-bold">${prod.nombre}</h5>
            
            <div class="mt-auto">
              <div class="mb-2">
                <span class="badge ${disponible ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger border border-danger-subtle'}">
                  <i class="bi ${disponible ? 'bi-box-seam' : 'bi-x-circle'} me-1"></i>${disponible ? `Stock: ${prod.stock} un.` : 'Sin stock disponible'}
                </span>
              </div>
              <p class="card-text text-primary fw-bold fs-5 mb-2">$${prod.precio.toLocaleString('es-CL')}</p>
              <button class="btn ${disponible ? 'btn-primary' : 'btn-secondary'} w-100 btn-sm" 
                      onclick="agregarAlCarrito(${prod.id})" ${!disponible ? 'disabled' : ''}>
                <i class="bi bi-cart-plus me-1"></i>${disponible ? 'Agregar al carrito' : 'Agotado'}
              </button>
            </div>
          </div>
        </div>
      </div>`;
  }).join("");
}

// 4. Agregar producto validando límite en inventario
function agregarAlCarrito(id) {
  productos = obtenerProductos(); // Refrescar stock actualizado por si cambió desde el panel
  const prod = productos.find(p => p.id === id);
  if (!prod || prod.stock <= 0) return alert("Producto no disponible.");

  const enCarrito = carrito.filter(p => p.id === id).length;
  if (enCarrito + 1 > prod.stock) {
    return alert(`No puedes agregar más. Solo quedan ${prod.stock} unidades en inventario.`);
  }

  carrito.push(prod);
  actualizarCarritoUI();
}

// 5. Interfaz de Carrito
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

  // Agrupar ítems repetidos
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
        <button class="btn btn-sm btn-outline-danger border-0" onclick="eliminarDelCarrito(${p.id})">
          <i class="bi bi-trash-fill"></i>
        </button>
      </li>`;
  });

  totalSpan.innerText = `$${total.toLocaleString('es-CL')}`;
}

function eliminarDelCarrito(id) {
  const idx = carrito.findIndex(p => p.id === id);
  if (idx !== -1) carrito.splice(idx, 1);
  actualizarCarritoUI();
}

// 6. Finalizar Compra: Requiere sesión activa, descuenta stock y registra pedido en el Admin
function finalizarCompra() {
  // VALIDACIÓN DE SESIÓN: Si no hay cuenta iniciada, bloquea y redirige
  const sesionRaw = localStorage.getItem("sesion_activa");
  if (!sesionRaw) {
    alert("Debes iniciar sesión para poder realizar una compra.");
    window.location.href = "login.html";
    return;
  }

  if (carrito.length === 0) return alert("Tu carrito está vacío.");

  const usuario = JSON.parse(sesionRaw);

  // Descontar el stock en localStorage
  productos.forEach(prod => {
    const comprados = carrito.filter(item => item.id === prod.id).length;
    prod.stock -= comprados;
  });
  localStorage.setItem("productos_sonidovivo", JSON.stringify(productos));

  // Registrar pedido para el panel Admin/Vendedor
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
  actualizarCarritoUI();
  renderizarProductos(productos);

  const modalElem = document.getElementById('modalCarrito');
  if (modalElem) bootstrap.Modal.getInstance(modalElem)?.hide();
}

// 7. Eventos Globales y Filtros Unificados
document.addEventListener("DOMContentLoaded", () => {
  verificarSesionCliente();
  renderizarProductos(productos);
  actualizarCarritoUI();

  document.getElementById("btnFinalizarCompra")?.addEventListener("click", finalizarCompra);

  // Filtro unificado (búsqueda por texto y categoría)
  const aplicarFiltros = () => {
    const texto = document.getElementById("inputBuscar")?.value.toLowerCase() || "";
    const cat = document.getElementById("selectCategoria")?.value || "todas";

    const filtrados = productos.filter(p => {
      const coincideNombre = p.nombre.toLowerCase().includes(texto);
      const coincideCat = cat === "todas" || p.categoria === cat;
      return coincideNombre && coincideCat;
    });

    renderizarProductos(filtrados);
  };

  document.getElementById("inputBuscar")?.addEventListener("input", aplicarFiltros);
  document.getElementById("selectCategoria")?.addEventListener("change", aplicarFiltros);
});