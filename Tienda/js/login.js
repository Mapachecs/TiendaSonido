// Arreglo completo con las 16 Regiones y todas las Comunas de Chile
const regionesYComunas = [
  {
    region: "Arica y Parinacota",
    comunas: ["Arica", "Camarones", "General Lagos", "Putre"]
  },
  {
    region: "Tarapacá",
    comunas: ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"]
  },
  {
    region: "Antofagasta",
    comunas: ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"]
  },
  {
    region: "Atacama",
    comunas: ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"]
  },
  {
    region: "Coquimbo",
    comunas: ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paihuano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"]
  },
  {
    region: "Valparaíso",
    comunas: ["Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Calera", "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Valparaíso", "Villa Alemana", "Viña del Mar"]
  },
  {
    region: "Región Metropolitana de Santiago",
    comunas: ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", "Vitacura"]
  },
  {
    region: "Región del Libertador General Bernardo O'Higgins",
    comunas: ["Chépica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchihue", "Mostazal", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Fernando", "San Francisco de Mostazal", "San Vicente de Tagua Tagua"]
  },
  {
    region: "Región del Maule",
    comunas: ["Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañé", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"]
  },
  {
    region: "Región de Ñuble",
    comunas: ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
  },
  {
    region: "Región del Biobío",
    comunas: ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilleco", "Quilleco", "San Rosendo", "San Pedro de la Paz", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tucapel", "Yumbel"]
  },
  {
    region: "Región de la Araucanía",
    comunas: ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"]
  },
  {
    region: "Región de Los Ríos",
    comunas: ["Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"]
  },
  {
    region: "Región de Los Lagos",
    comunas: ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Maullín", "Osorno", "Palena", "Puerto Octay", "Puerto Montt", "Puerto Varas", "Puqueldón", "Purranque", "Puyehue", "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"]
  },
  {
    region: "Región Aisén del General Carlos Ibáñez del Campo",
    comunas: ["Aisén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"]
  },
  {
    region: "Región de Magallanes y de la Antártica Chilena",
    comunas: ["Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"]
  }
];

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  inicializarRegionesYComunas();
});

// 2. Usuarios obligatorios por defecto para pruebas de roles
const usuariosPorDefecto = [
  { run: "111111111", nombre: "Administrador", apellidos: "Sistema", email: "admin@sonidovivo.cl", pass: "123", rol: "Administrador", region: "Valparaíso", comuna: "Viña del Mar", direccion: "Av. Libertad 450" },
  { run: "222222222", nombre: "Vendedor", apellidos: "Tienda", email: "vendedor@sonidovivo.cl", pass: "123", rol: "Vendedor", region: "Valparaíso", comuna: "Viña del Mar", direccion: "Av. Libertad 450" },
  { run: "19123456K", nombre: "Cliente", apellidos: "Pruebas", email: "cliente@correo.com", pass: "123", rol: "Cliente", region: "Valparaíso", comuna: "Viña del Mar", direccion: "Calle Valparaíso 123" }
];

// 3. Obtener usuarios asegurando la presencia de las cuentas por defecto
function obtenerUsuarios() {
  const guardados = localStorage.getItem("usuarios_sonidovivo");
  
  if (!guardados) {
    localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuariosPorDefecto));
    return usuariosPorDefecto;
  }
  
  const usuariosGuardados = JSON.parse(guardados);

  usuariosPorDefecto.forEach(defecto => {
    if (!usuariosGuardados.some(u => u.email.toLowerCase() === defecto.email.toLowerCase())) {
      usuariosGuardados.push(defecto);
    }
  });

  return usuariosGuardados;
}

// 4. Algoritmo de Validación de RUT/RUN (Módulo 11 Chileno)
function validarRutChileno(rutRaw) {
  const rutLimpio = rutRaw.replace(/[^0-9kK]/g, '').toUpperCase();
  if (rutLimpio.length < 8 || rutLimpio.length > 9) return false;

  const cuerpo = rutLimpio.slice(0, -1);
  const dvDado = rutLimpio.slice(-1);

  if (!/^\d+$/.test(cuerpo)) return false;

  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo.charAt(i)) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const dvEsperadoNum = 11 - (suma % 11);
  let dvEsperado = '';

  if (dvEsperadoNum === 11) dvEsperado = '0';
  else if (dvEsperadoNum === 10) dvEsperado = 'K';
  else dvEsperado = dvEsperadoNum.toString();

  return dvDado === dvEsperado;
}

// 5. Cargar Desplegables Anidados de Regiones y Comunas
function inicializarRegionesYComunas() {
  const selectRegion = document.getElementById("regRegion");
  const selectComuna = document.getElementById("regComuna");

  if (!selectRegion || !selectComuna) return;

  // Llenar Select de Regiones
  regionesYComunas.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item.region;
    opt.textContent = item.region;
    selectRegion.appendChild(opt);
  });

  // Evento al cambiar Región
  selectRegion.addEventListener("change", function () {
    const regionSeleccionada = this.value;
    selectComuna.innerHTML = '<option value="">Seleccione Comuna...</option>';

    if (!regionSeleccionada) {
      selectComuna.disabled = true;
      return;
    }

    const objetoRegion = regionesYComunas.find(r => r.region === regionSeleccionada);
    if (objetoRegion) {
      objetoRegion.comunas.forEach(comuna => {
        const opt = document.createElement("option");
        opt.value = comuna;
        opt.textContent = comuna;
        selectComuna.appendChild(opt);
      });
      selectComuna.disabled = false;
    }
  });
}

// 6. Control del Formulario de Login
document.getElementById("formLogin")?.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const pass = document.getElementById("loginPassword").value;
  const errorBox = document.getElementById("loginError");
  
  const usuarios = obtenerUsuarios();
  const usuarioEncontrado = usuarios.find(u => u.email.toLowerCase() === email && u.pass === pass);

  if (usuarioEncontrado) {
    localStorage.setItem("sesion_activa", JSON.stringify(usuarioEncontrado));
    
    if (usuarioEncontrado.rol === "Administrador" || usuarioEncontrado.rol === "Vendedor") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }
  } else {
    errorBox.innerText = "Correo o contraseña incorrectos.";
    errorBox.classList.remove("d-none");
  }
});

// 7. Control del Formulario de Registro con Validaciones Avanzadas
document.getElementById("formRegister")?.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const run = document.getElementById("regRun").value.trim().toUpperCase();
  const nombre = document.getElementById("regNombre").value.trim();
  const apellidos = document.getElementById("regApellidos").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const region = document.getElementById("regRegion").value;
  const comuna = document.getElementById("regComuna").value;
  const direccion = document.getElementById("regDireccion").value.trim();
  const pass = document.getElementById("regPassword").value;

  const errorBox = document.getElementById("regError");
  const successBox = document.getElementById("regSuccess");

  errorBox.classList.add("d-none");
  successBox.classList.add("d-none");

  // Validar formato y dígito verificador del RUN
  if (!validarRutChileno(run)) {
    errorBox.innerText = "El RUN/RUT ingresado es inválido. Ingrese sin puntos ni guión (ej: 19123456K).";
    errorBox.classList.remove("d-none");
    return;
  }

  let usuarios = obtenerUsuarios();

  // Validar que correo no exista
  if (usuarios.some(u => u.email.toLowerCase() === email)) {
    errorBox.innerText = "Este correo electrónico ya se encuentra registrado.";
    errorBox.classList.remove("d-none");
    return;
  }

  // Validar que RUN no exista
  if (usuarios.some(u => u.run && u.run.toUpperCase() === run)) {
    errorBox.innerText = "Este RUN/RUT ya pertenece a una cuenta existente.";
    errorBox.classList.remove("d-none");
    return;
  }

  // Guardar nuevo cliente
  const nuevoCliente = {
    run,
    nombre,
    apellidos,
    email,
    region,
    comuna,
    direccion,
    pass,
    rol: "Cliente"
  };

  usuarios.push(nuevoCliente);
  localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuarios));
  
  successBox.innerText = "¡Cuenta creada con éxito! Ya puedes iniciar sesión en la pestaña Ingresar.";
  successBox.classList.remove("d-none");
  
  this.reset();
  document.getElementById("regComuna").disabled = true;
});

