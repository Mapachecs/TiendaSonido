document.addEventListener("DOMContentLoaded", () => {
  inicializarSesionAdmin();
  cargarPedidos();
  cargarStock();
  cargarUsuarios();
  escucharFormularioProducto();
});

// Control de sesión básico y restricción de roles
function inicializarSesionAdmin() {
  const lblUsuario = document.getElementById("nombreUsuarioSesion");
  const btnCerrar = document.getElementById("btnCerrarSesion");
  const tabUsuarios = document.getElementById("liUsuariosTab");

  const usuarioActivo = JSON.parse(localStorage.getItem("usuario_activo_sonidovivo")) || JSON.parse(localStorage.getItem("sesion_activa"));

  if (lblUsuario && usuarioActivo) {
    lblUsuario.textContent = `Sesión: ${usuarioActivo.nombre} (${usuarioActivo.rol || 'Admin'})`;
  } else if (lblUsuario) {
    lblUsuario.textContent = "Administrador";
  }

  // RESTRICCIÓN: Ocultar pestaña de usuarios si es VENDEDOR
  if (usuarioActivo && (usuarioActivo.rol === "Vendedor" || usuarioActivo.rol === "vendedor")) {
    if (tabUsuarios) {
      tabUsuarios.style.display = "none"; // Oculta la pestaña del menú
    }

    // Si por alguna razón la pestaña de usuarios estaba activa, fuerza la vista a 'Pedidos'
    const paneUsuarios = document.getElementById("usuarios-pane");
    const panePedidos = document.getElementById("pedidos-pane");
    const btnTabPedidos = document.getElementById("pedidos-tab");

    if (paneUsuarios && paneUsuarios.classList.contains("active")) {
      paneUsuarios.classList.remove("show", "active");
      if (panePedidos) panePedidos.classList.add("show", "active");
      if (btnTabPedidos) btnTabPedidos.classList.add("active");
    }
  }

  if (btnCerrar) {
    btnCerrar.addEventListener("click", () => {
      localStorage.removeItem("usuario_activo_sonidovivo");
      localStorage.removeItem("sesion_activa");
      window.location.href = "login.html";
    });
  }
}

// 1. Cargar Usuarios (Solo visible para Admin, sin columna Estado)
function cargarUsuarios() {
  const guardados = localStorage.getItem("usuarios_sonidovivo");

  let usuarios = guardados ? JSON.parse(guardados) : [
    { id: 1, nombre: "Administrador", correo: "admin@sonidovivo.cl", rol: "Administrador" },
    { id: 2, nombre: "Vendedor Tienda", correo: "vendedor@sonidovivo.cl", rol: "Vendedor" },
    { id: 3, nombre: "Cliente Pruebas", correo: "cliente@gmail.com", rol: "Cliente" }
  ];

  if (!guardados) {
    localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuarios));
  }

  const tbody = document.getElementById("tablaUsuarios");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (usuarios.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted">No hay usuarios registrados</td></tr>`;
    return;
  }

  usuarios.forEach((u, index) => {
    let badgeRol = "bg-secondary";
    if (u.rol === "Administrador" || u.rol === "admin") badgeRol = "bg-danger";
    if (u.rol === "Vendedor" || u.rol === "vendedor") badgeRol = "bg-warning text-dark";
    if (u.rol === "Cliente" || u.rol === "cliente") badgeRol = "bg-info text-dark";

    // Obtener correo evitando 'undefined'
    const emailMostrar = u.correo || u.email || 'Sin correo registrado';

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="fw-bold">${u.nombre}</td>
      <td>${emailMostrar}</td>
      <td><span class="badge ${badgeRol}">${u.rol}</span></td>
      <td>
        <select class="form-select form-select-sm d-inline-block w-auto" onchange="cambiarRolUsuario(${index}, this.value)">
          <option value="Administrador" ${u.rol === 'Administrador' ? 'selected' : ''}>Administrador</option>
          <option value="Vendedor" ${u.rol === 'Vendedor' ? 'selected' : ''}>Vendedor</option>
          <option value="Cliente" ${u.rol === 'Cliente' ? 'selected' : ''}>Cliente</option>
        </select>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Función para actualizar el rol de un usuario
function cambiarRolUsuario(index, nuevoRol) {
  const guardados = localStorage.getItem("usuarios_sonidovivo");
  let usuarios = guardados ? JSON.parse(guardados) : [];

  usuarios[index].rol = nuevoRol;
  localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuarios));

  cargarUsuarios();
}

// 2. Cargar Pedidos
function cargarPedidos() {
  const guardados = localStorage.getItem("pedidos_sonidovivo");
  
  let pedidos = guardados ? JSON.parse(guardados) : [
    { id: "PED-101", cliente: "Carlos Pérez", fecha: "2026-09-07", total: 750000, estado: "En Preparación" },
    { id: "PED-102", cliente: "María González", fecha: "2026-09-06", total: 85000, estado: "Despachado" },
    { id: "PED-103", cliente: "Juan Tapia", fecha: "2026-09-05", total: 320000, estado: "Entregado" }
  ];

  if (!guardados) {
    localStorage.setItem("pedidos_sonidovivo", JSON.stringify(pedidos));
  }

  const tbody = document.getElementById("tablaPedidos");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (pedidos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">No hay pedidos registrados</td></tr>`;
    return;
  }

  pedidos.forEach((p, index) => {
    let badgeClass = "bg-warning text-dark";
    if (p.estado === "Despachado") badgeClass = "bg-primary";
    if (p.estado === "Entregado") badgeClass = "bg-success";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="fw-bold">${p.id}</td>
      <td>${p.cliente}</td>
      <td>${p.fecha}</td>
      <td class="fw-bold text-success">$${Number(p.total).toLocaleString('es-CL')}</td>
      <td><span class="badge ${badgeClass}">${p.estado}</span></td>
      <td>
        <select class="form-select form-select-sm d-inline-block w-auto" onchange="cambiarEstadoPedido(${index}, this.value)">
          <option value="En Preparación" ${p.estado === 'En Preparación' ? 'selected' : ''}>En Preparación</option>
          <option value="Despachado" ${p.estado === 'Despachado' ? 'selected' : ''}>Despachado</option>
          <option value="Entregado" ${p.estado === 'Entregado' ? 'selected' : ''}>Entregado</option>
        </select>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function cambiarEstadoPedido(index, nuevoEstado) {
  const guardados = localStorage.getItem("pedidos_sonidovivo");
  let pedidos = guardados ? JSON.parse(guardados) : [];

  pedidos[index].estado = nuevoEstado;
  localStorage.setItem("pedidos_sonidovivo", JSON.stringify(pedidos));
  cargarPedidos();
}

// 3. Cargar Stock
function cargarStock() {
  const guardados = localStorage.getItem("productos_sonidovivo");
  const productos = guardados ? JSON.parse(guardados) : [];

  const tbody = document.getElementById("tablaStock");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (productos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">No hay productos en inventario</td></tr>`;
    return;
  }

  productos.forEach((p, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td class="fw-bold">${p.nombre}</td>
      <td>${p.categoria}</td>
      <td>$${Number(p.precio).toLocaleString('es-CL')}</td>
      <td><span class="badge ${p.stock > 0 ? 'bg-info text-dark' : 'bg-danger'}">${p.stock} unidades</span></td>
      <td>
        <div class="btn-group gap-1">
          <button class="btn btn-sm btn-outline-secondary" onclick="modificarStock(${index})">
            <i class="bi bi-pencil-square"></i> Editar Stock
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="eliminarProducto(${index})">
            <i class="bi bi-trash"></i> Eliminar
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Escuchar evento para crear producto nuevo
function escucharFormularioProducto() {
  const form = document.getElementById("formNuevoProducto");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("prodNombre").value.trim();
    const categoria = document.getElementById("prodCategoria").value;
    const precio = parseFloat(document.getElementById("prodPrecio").value);
    const stock = parseInt(document.getElementById("prodStock").value);
    const img = document.getElementById("prodImg").value.trim() || "https://via.placeholder.com/250";

    const guardados = localStorage.getItem("productos_sonidovivo");
    let productos = guardados ? JSON.parse(guardados) : [];

    const ultimoId = productos.length > 0 
      ? Math.max(...productos.map(p => Number(p.id) || 0)) 
      : 0;

    const nuevoProducto = {
      id: ultimoId + 1,
      nombre,
      categoria,
      precio,
      stock,
      img
    };

    productos.push(nuevoProducto);
    localStorage.setItem("productos_sonidovivo", JSON.stringify(productos));

    const modalEl = document.getElementById("modalNuevoProducto");
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    form.reset();
    cargarStock();
  });
}

// Modificar stock
function modificarStock(index) {
  const guardados = localStorage.getItem("productos_sonidovivo");
  let productos = guardados ? JSON.parse(guardados) : [];

  const nuevoStock = prompt(`Ingrese el nuevo stock para "${productos[index].nombre}":`, productos[index].stock);

  if (nuevoStock !== null && !isNaN(nuevoStock) && nuevoStock >= 0) {
    productos[index].stock = parseInt(nuevoStock);
    localStorage.setItem("productos_sonidovivo", JSON.stringify(productos));
    cargarStock();
  }
}

// Eliminar producto
function eliminarProducto(index) {
  const guardados = localStorage.getItem("productos_sonidovivo");
  let productos = guardados ? JSON.parse(guardados) : [];

  const producto = productos[index];

  if (confirm(`¿Está seguro de que desea eliminar "${producto.nombre}"?`)) {
    productos.splice(index, 1);
    localStorage.setItem("productos_sonidovivo", JSON.stringify(productos));
    cargarStock();
  }
}