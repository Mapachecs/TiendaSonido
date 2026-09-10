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

document.addEventListener("DOMContentLoaded", () => {
  inicializarSesionAdmin();
  cargarPedidos();
  cargarStock();
  cargarUsuarios();
  escucharFormularioProducto();
  escucharFormularioUsuario();
  inicializarRegionesModalAdmin();
});

// Control de sesión básico y restricción de roles
function inicializarSesionAdmin() {
  const lblUsuario = document.getElementById("nombreUsuarioSesion");
  const btnCerrar = document.getElementById("btnCerrarSesion");
  const tabUsuarios = document.getElementById("liUsuariosTab");

  const usuarioActivo = JSON.parse(localStorage.getItem("usuario_activo_sonidovivo")) || JSON.parse(localStorage.getItem("sesion_activa"));

  if (!usuarioActivo) {
    window.location.href = "../login.html";
    return;
  }

  if (lblUsuario) {
    lblUsuario.textContent = `Sesión: ${usuarioActivo.nombre} (${usuarioActivo.rol || 'Admin'})`;
  }

  // RESTRICCIÓN: Ocultar pestaña de usuarios si es VENDEDOR
  if (usuarioActivo && (usuarioActivo.rol === "Vendedor" || usuarioActivo.rol === "vendedor")) {
    if (tabUsuarios) {
      tabUsuarios.style.display = "none";
    }

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

// Validación Módulo 11 Chileno
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

// Inicializar Selects de Regiones en Modal Admin
function inicializarRegionesModalAdmin() {
  const selectRegion = document.getElementById("userRegion");
  const selectComuna = document.getElementById("userComuna");

  if (!selectRegion || !selectComuna) return;

  regionesYComunas.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item.region;
    opt.textContent = item.region;
    selectRegion.appendChild(opt);
  });

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

// 1. Cargar Usuarios
function cargarUsuarios() {
  const guardados = localStorage.getItem("usuarios_sonidovivo");

  let usuarios = guardados ? JSON.parse(guardados) : [
    { run: "111111111", nombre: "Administrador", apellidos: "General", email: "admin@sonidovivo.cl", rol: "Administrador", region: "Valparaíso", comuna: "Viña del Mar" },
    { run: "222222222", nombre: "Vendedor", apellidos: "Tienda", email: "vendedor@sonidovivo.cl", rol: "Vendedor", region: "Valparaíso", comuna: "Viña del Mar" },
    { run: "19123456K", nombre: "Cliente", apellidos: "Pruebas", email: "cliente@correo.com", rol: "Cliente", region: "Valparaíso", comuna: "Viña del Mar" }
  ];

  if (!guardados) {
    localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuarios));
  }

  const tbody = document.getElementById("tablaUsuarios");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (usuarios.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted py-3">No hay usuarios registrados</td></tr>`;
    return;
  }

  usuarios.forEach((u, index) => {
    let badgeRol = "bg-secondary";
    if (u.rol === "Administrador" || u.rol === "admin") badgeRol = "bg-danger";
    if (u.rol === "Vendedor" || u.rol === "vendedor") badgeRol = "bg-warning text-dark";
    if (u.rol === "Cliente" || u.rol === "cliente") badgeRol = "bg-info text-dark";

    const emailMostrar = u.email || u.correo || 'Sin correo';
    const nombreMostrar = u.apellidos ? `${u.nombre} ${u.apellidos}` : u.nombre;
    const ubicacion = (u.comuna && u.region) ? `${u.comuna}, ${u.region}` : 'No registrada';

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="fw-bold">${u.run || 'S/R'}</td>
      <td>${nombreMostrar}</td>
      <td>${emailMostrar}</td>
      <td><small class="text-muted">${ubicacion}</small></td>
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

function cambiarRolUsuario(index, nuevoRol) {
  const guardados = localStorage.getItem("usuarios_sonidovivo");
  let usuarios = guardados ? JSON.parse(guardados) : [];

  usuarios[index].rol = nuevoRol;
  localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuarios));

  cargarUsuarios();
}

function escucharFormularioUsuario() {
  const form = document.getElementById("formNuevoUsuario");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const run = document.getElementById("userRun").value.trim().toUpperCase();
    const nombre = document.getElementById("userNombre").value.trim();
    const apellidos = document.getElementById("userApellidos").value.trim();
    const email = document.getElementById("userCorreo").value.trim().toLowerCase();
    const pass = document.getElementById("userPass").value.trim();
    const region = document.getElementById("userRegion").value;
    const comuna = document.getElementById("userComuna").value;
    const direccion = document.getElementById("userDireccion").value.trim();
    const rol = document.getElementById("userRol").value;

    if (!validarRutChileno(run)) {
      alert("El RUN/RUT ingresado es inválido.");
      return;
    }

    const guardados = localStorage.getItem("usuarios_sonidovivo");
    let usuarios = guardados ? JSON.parse(guardados) : [];

    if (usuarios.some(u => (u.email || u.correo)?.toLowerCase() === email)) {
      alert("Este correo electrónico ya se encuentra registrado.");
      return;
    }

    const nuevoUsuario = {
      run,
      nombre,
      apellidos,
      email,
      pass,
      region,
      comuna,
      direccion,
      rol
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios_sonidovivo", JSON.stringify(usuarios));

    const modalEl = document.getElementById("modalNuevoUsuario");
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    form.reset();
    document.getElementById("userComuna").disabled = true;
    cargarUsuarios();
  });
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
    tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted py-3">No hay pedidos registrados</td></tr>`;
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

  let productos = guardados ? JSON.parse(guardados) : [
    { id: 1, nombre: "Guitarra Eléctrica Fender Stratocaster", categoria: "Guitarras", precio: 750000, stock: 8 },
    { id: 2, nombre: "Teclado Sintetizador Roland XPS-10", categoria: "Teclados", precio: 520000, stock: 5 },
    { id: 3, nombre: "Micrófono Condensador Shure SM58", categoria: "Audio", precio: 110000, stock: 15 }
  ];

  if (!guardados) {
    localStorage.setItem("productos_sonidovivo", JSON.stringify(productos));
  }

  const tbody = document.getElementById("tablaStock");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (productos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted py-3">No hay productos en inventario</td></tr>`;
    return;
  }

  productos.forEach((p, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td class="fw-bold">${p.nombre}</td>
      <td>${p.categoria}</td>
      <td class="fw-bold text-primary">$${Number(p.precio).toLocaleString('es-CL')}</td>
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