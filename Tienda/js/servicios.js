// 1. Control de sesión del cliente (idéntico al resto de páginas)
function verificarSesionCliente() {
  const sesionRaw = localStorage.getItem("sesion_activa");
  const contenedorAuth = document.getElementById("contenedorAuth");
  if (!contenedorAuth) return;

  if (sesionRaw) {
    const usuario = JSON.parse(sesionRaw);
    
    // Autocompletar datos en el formulario si el usuario está logueado
    const inputNombre = document.getElementById("nombreContacto");
    const inputEmail = document.getElementById("emailContacto");
    if (inputNombre && inputEmail) {
      inputNombre.value = usuario.nombre || "";
      inputEmail.value = usuario.email || "";
    }

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

// 2. Control del envío del formulario de contacto
function inicializarFormularioServicios() {
  const form = document.getElementById("formServiciosContacto");
  const mensajeExito = document.getElementById("contactoExito");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreContacto").value.trim();
    const email = document.getElementById("emailContacto").value.trim();
    const mensaje = document.getElementById("mensajeContacto").value.trim();

    // Guardar la consulta en localStorage (opcional, para persistir datos)
    const consultasGuardadas = JSON.parse(localStorage.getItem("consultas_contacto") || "[]");
    consultasGuardadas.push({
      nombre,
      email,
      mensaje,
      fecha: new Date().toLocaleString()
    });
    localStorage.setItem("consultas_contacto", JSON.stringify(consultasGuardadas));

    // Mostrar mensaje de confirmación
    mensajeExito.innerText = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`;
    mensajeExito.classList.remove("d-none");

    // Limpiar campo de texto del mensaje
    document.getElementById("mensajeContacto").value = "";

    // Ocultar alerta después de 4 segundos
    setTimeout(() => {
      mensajeExito.classList.add("d-none");
    }, 4000);
  });
}

// 3. Inicialización
document.addEventListener("DOMContentLoaded", () => {
  verificarSesionCliente();
  inicializarFormularioServicios();
});