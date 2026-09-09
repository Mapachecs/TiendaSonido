// nosotros.js
// Lógica mínima para esta página: solo lo necesario para que el navbar
// (sesión de usuario) funcione igual que en el resto del sitio.

// 1. Control de sesión del cliente (idéntico al de index.js)
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

// 2. Inicialización
document.addEventListener("DOMContentLoaded", () => {
  verificarSesionCliente();
});
