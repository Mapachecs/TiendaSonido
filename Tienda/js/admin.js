// 1. Verificar Seguridad y Autenticación (Sección 0.2)
document.addEventListener("DOMContentLoaded", () => {
  const sesionRaw = localStorage.getItem("sesion_activa");
  
  // Si no hay sesión, rechazar acceso
  if (!sesionRaw) {
    alert("Acceso denegado. Debe iniciar sesión primero.");
    window.location.href = "login.html";
    return;
  }

  const usuarioSesion = JSON.parse(sesionRaw);

  // Si un Cliente intenta entrar directo a admin.html, redirigirlo a la tienda
  if (usuarioSesion.rol === "Cliente") {
    alert("No tiene permisos para acceder al Panel de Administración.");
    window.location.href = "index.html";
    return;
  }

  // Mostrar datos del usuario activo
  document.getElementById("nombreUsuarioSesion").innerHTML = 
    `<i class="bi bi-person-circle me-1"></i><b>${usuarioSesion.nombre}</b> (${usuarioSesion.rol})`;

  // Ocultar pestaña de Gestión de Usuarios si es Rol Vendedor
  if (usuarioSesion.rol === "Vendedor") {
    const usuariosTab = document.getElementById("liUsuariosTab");
    if (usuariosTab) usuariosTab.style.display = "none";
  }

  // Cargar datos
  cargarPedidos();
  cargarStock();
  cargarUsuarios();
});

// 2. Cerrar Sesión
document.getElementById("btnCerrarSesion").addEventListener("click", () => {
  localStorage.removeItem("sesion_activa");
  window.location.href = "login.html";
});

// 3. Simulación de Datos de Pedidos
function cargarPedidos() {
  const pedidos = [
    { id: "PED-101", cliente: "Carlos Pérez", fecha: "2026-09-07", total: 750000, estado: "En Preparación" },
    { id: "PED-102", cliente: "María González", fecha: "2026-09-06", total: 85000, estado: "Despachado" }
  ];

  const tbody = document.getElementById("tablaPedidos");
  tbody.innerHTML = "";

  pedidos.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="fw-bold">${p.id}</td>
      <td>${p.cliente}</td>
      <td>${p.fecha}</td>
      <td class="fw-bold text-success">$${p.total.toLocaleString('es-CL')}</td>
      <td><span class="badge ${p.estado === 'Despachado' ? 'bg-success' : 'bg-warning text-dark'}">${p.estado}</span></td>
      <td>
        <button class="btn btn-sm btn-outline-primary" onclick="alert('Cambiando estado del pedido ${p.id}')">
          Actualizar
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Cargar la lista unificada de productos desde localStorage
function cargarStock() {
  const guardados = localStorage.getItem("productos_sonidovivo");
  const productos = guardados ? JSON.parse(guardados) : [];

  const tbody = document.getElementById("tablaStock");
  if (!tbody) return;
  tbody.innerHTML = "";

  productos.forEach((p, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td class="fw-bold">${p.nombre}</td>
      <td>${p.categoria}</td>
      <td>$${p.precio.toLocaleString('es-CL')}</td>
      <td><span class="badge ${p.stock > 0 ? 'bg-info text-dark' : 'bg-danger'}">${p.stock} unidades</span></td>
      <td>
        <button class="btn btn-sm btn-outline-secondary" onclick="modificarStock(${index})">
          <i class="bi bi-pencil-square"></i> Editar Stock
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Función para permitir al vendedor/admin cambiar el stock en tiempo real
function modificarStock(index) {
  const guardados = localStorage.getItem("productos_sonidovivo");
  let productos = JSON.parse(guardados);

  const nuevoStock = prompt(`Ingrese la nueva cantidad de stock para "${productos[index].nombre}":`, productos[index].stock);
  
  if (nuevoStock !== null && !isNaN(nuevoStock) && nuevoStock.trim() !== "") {
    productos[index].stock = parseInt(nuevoStock);
    localStorage.setItem("productos_sonidovivo", JSON.stringify(productos));
    alert("Stock actualizado con éxito.");
    cargarStock(); // Recargar la tabla
  }
}

// 5. Cargar lista de Usuarios para el Administrador
function cargarUsuarios() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios_sonidovivo")) || [];
  const tbody = document.getElementById("tablaUsuarios");
  tbody.innerHTML = "";

  usuarios.forEach((u, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="fw-bold">${u.nombre}</td>
      <td>${u.email}</td>
      <td><span class="badge ${u.rol === 'Administrador' ? 'bg-danger' : u.rol === 'Vendedor' ? 'bg-primary' : 'bg-secondary'}">${u.rol}</span></td>
      <td><span class="badge bg-success">Activo</span></td>
      <td>
        <select class="form-select form-select-sm d-inline-block w-auto" onchange="cambiarRol(${index}, this.value)">
          <option value="Cliente" ${u.rol === 'Cliente' ? 'selected' : ''}>Cliente</option>
          <option value="Vendedor" ${u.rol === 'Vendedor' ? 'selected' : ''}>Vendedor</option>
          <option value="Administrador" ${u.rol === 'Administrador' ? 'selected' : ''}>Administrador</option>
        </select>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 6. Cambiar Rol de usuario en tiempo real (Pauta 0.2)
function cambiarRol(index, nuevoRol) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios_sonidovivo")) || [];
  usuarios[index].rol = nuevoRol;
  localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuarios));
  alert(`Rol actualizado a: ${nuevoRol}`);
  cargarUsuarios();
}