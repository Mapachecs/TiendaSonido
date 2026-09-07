// 1. Usuarios obligatorios por defecto para pruebas de roles
const usuariosPorDefecto = [
  { nombre: "Dueño Administrador", email: "admin@sonidovivo.cl", pass: "123", rol: "Administrador" },
  { nombre: "Vendedor Tienda", email: "vendedor@sonidovivo.cl", pass: "123", rol: "Vendedor" },
  { nombre: "Cliente Pruebas", email: "cliente@correo.com", pass: "123", rol: "Cliente" }
];

// 2. Obtener usuarios asegurando la presencia de las cuentas por defecto
function obtenerUsuarios() {
  const guardados = localStorage.getItem("usuarios_sonidovivo");
  
  if (!guardados) {
    localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuariosPorDefecto));
    return usuariosPorDefecto;
  }
  
  const usuariosGuardados = JSON.parse(guardados);

  // Unificar cuentas por defecto con nuevos usuarios registrados
  usuariosPorDefecto.forEach(defecto => {
    if (!usuariosGuardados.some(u => u.email === defecto.email)) {
      usuariosGuardados.push(defecto);
    }
  });

  return usuariosGuardados;
}

// 3. Control del Formulario de Login (Sin alertas interrupciones)
document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const pass = document.getElementById("loginPassword").value;
  const errorBox = document.getElementById("loginError");
  
  const usuarios = obtenerUsuarios();
  const usuarioEncontrado = usuarios.find(u => u.email.toLowerCase() === email && u.pass === pass);

  if (usuarioEncontrado) {
    // Guardar la sesión activa del usuario
    localStorage.setItem("sesion_activa", JSON.stringify(usuarioEncontrado));
    
    // Redirección directa e inmediata según el Rol
    if (usuarioEncontrado.rol === "Administrador" || usuarioEncontrado.rol === "Vendedor") {
      window.location.href = "admin.html"; // Redirige al panel
    } else {
      window.location.href = "index.html"; // Redirige al catálogo general
    }
  } else {
    errorBox.innerText = "Correo o contraseña incorrectos.";
    errorBox.classList.remove("d-none");
  }
});

// 4. Control del Formulario de Registro de Clientes
document.getElementById("formRegister").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById("regNombre").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const pass = document.getElementById("regPassword").value;
  const successBox = document.getElementById("regSuccess");
  
  let usuarios = obtenerUsuarios();

  if (usuarios.some(u => u.email.toLowerCase() === email)) {
    alert("Este correo ya se encuentra registrado.");
    return;
  }

  const nuevoCliente = { nombre, email, pass, rol: "Cliente" };
  usuarios.push(nuevoCliente);
  
  localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuarios));
  
  successBox.innerText = "¡Cuenta creada con éxito! Ya puedes iniciar sesión.";
  successBox.classList.remove("d-none");
  this.reset();
});