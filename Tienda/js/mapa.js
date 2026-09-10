// 1. Control de sesión del cliente
function verificarSesionCliente() {
  const sesionRaw = localStorage.getItem("sesion_activa");
  const contenedorAuth = document.getElementById("contenedorAuth");
  if (!contenedorAuth) return;

  if (sesionRaw) {
    const usuario = JSON.parse(sesionRaw);
    contenedorAuth.innerHTML = `
      <span class="text-white small me-2"><i class="bi bi-person-circle me-1"></i>Hola, <b>${usuario.nombre.split(' ')[0]}</b></span>
      ${['Administrador', 'Vendedor'].includes(usuario.rol) ? '<a href="admin.html" class="btn btn-warning btn-sm me-1"><i class="bi bi-gear-fill me-1"></i>Panel</a>' : ''}
      <button class="btn btn-outline-danger btn-sm" onclick="cerrarSesion()"><i class="bi bi-box-arrow-right me-1"></i>Salir</button>
    `;
  } else {
    contenedorAuth.innerHTML = `<a href="login.html" class="btn btn-outline-light btn-sm"><i class="bi bi-person-fill me-1"></i>Iniciar Sesión</a>`;
  }
}

function cerrarSesion() {
  localStorage.removeItem("sesion_activa");
  window.location.reload();
}

// 2. Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  verificarSesionCliente();
});



const puntosSucursales = [
  {
    id: 1,
    nombre: "Tienda Principal Sonido Vivo",
    tipo: "Tienda Física",
    direccion: "Av. Libertad 450, Viña del Mar",
    horario: "Lunes a Viernes: 10:00 - 19:00 hrs",
    lat: -33.0153,
    lng: -71.5505,
    principal: true
  },
  {
    id: 2,
    nombre: "Punto de Retiro Centro Viña",
    tipo: "Punto de Retiro",
    direccion: "Calle Valparaíso 680, Viña del Mar",
    horario: "Lunes a Sábado: 11:00 - 18:00 hrs",
    lat: -33.0245,
    lng: -71.5528,
    principal: false
  },
  {
    id: 3,
    nombre: "Punto de Retiro Valparaíso",
    tipo: "Punto de Retiro",
    direccion: "Av. Pedro Montt 1920, Valparaíso",
    horario: "Lunes a Viernes: 10:30 - 18:30 hrs",
    lat: -33.0461,
    lng: -71.6139,
    principal: false
  }
];


let map;
let marcadores = {};

function inicializarMapa() {
  // Coordenadas iniciales (Centro en Viña del Mar)
  const vinadelmar = [-33.0153, -71.5505];
  
  // Crear el mapa centrado con un zoom de nivel 13
  map = L.map('mapa').setView(vinadelmar, 13);

  // Cargar capa de mapa gratuita de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Dibujar los puntos en el mapa y en la lista lateral
  const listaHTML = document.getElementById("listaPuntos");
  listaHTML.innerHTML = "";

  puntosSucursales.forEach(punto => {
    // 1. Crear marcador en el mapa
    const marker = L.marker([punto.lat, punto.lng]).addTo(map);

    // Contenido del Popup al hacer clic en un pin del mapa
    const popupContent = `
      <div style="max-width: 200px;">
        <h6 style="margin-bottom: 5px; font-weight: bold;">${punto.nombre}</h6>
        <p style="margin-bottom: 5px; font-size: 12px; color: #555;">${punto.direccion}</p>
        <small style="color: #0d6efd; font-size: 11px;"><b>Horario:</b> ${punto.horario}</small><br>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${punto.lat},${punto.lng}" 
           target="_blank" class="btn btn-sm btn-primary mt-2 text-white style="font-size: 10px; padding: 2px 6px;">
           Cómo llegar
        </a>
      </div>
    `;

    marker.bindPopup(popupContent);
    marcadores[punto.id] = marker;

    // 2. Crear ítem en la lista lateral
    const item = document.createElement("a");
    item.className = "list-group-item list-group-item-action py-3";
    item.innerHTML = `
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1 fw-bold">${punto.nombre}</h6>
        <span class="badge ${punto.principal ? 'bg-primary' : 'bg-secondary'}">${punto.tipo}</span>
      </div>
      <p class="mb-1 small text-muted"><i class="bi bi-geo me-1"></i>${punto.direccion}</p>
      <small class="text-success"><i class="bi bi-clock me-1"></i>${punto.horario}</small>
    `;

    // Evento al hacer clic en el ítem de la lista: enfocar el marcador en el mapa
    item.addEventListener("click", () => {
      map.flyTo([punto.lat, punto.lng], 16);
      marker.openPopup();
    });

    listaHTML.appendChild(item);
  });
}

// Inicializar el mapa al cargar el archivo
document.addEventListener("DOMContentLoaded", () => {
  inicializarMapa();
});