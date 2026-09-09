// js/novedades.js - Lógica para la sección de Novedades y vista de detalle

// Arreglo de publicaciones (con imágenes referenciales, resúmenes y descripciones detalladas)
const listaNovedades = [
  {
    id: 1,
    titulo: "Guía de Mantenimiento: Cómo Cuidar tus Guitarras en Invierno",
    categoria: "Consejos y Tutoriales",
    fecha: "05 de Septiembre, 2026",
    autor: "Equipo Técnico Sonido Vivo",
    imagen: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80",
    resumen: "Los cambios drásticos de humedad y temperatura afectan seriamente la madera de las guitarras acústicas y eléctricas. Aprende a protegerlas adecuadamente.",
    descripcionCompleta: `
      <p>La madera de los instrumentos acústicos y eléctricos es extremadamente sensible a las fluctuaciones climáticas. Durante los meses más fríos y secos, es común notar problemas en el trasteo, curvaturas no deseadas en el mástil o grietas en el acabado del cuerpo.</p>
      
      <h5 class="fw-bold text-dark mt-3">Recomendaciones Clave:</h5>
      <ul>
        <li><b>Usa Humidificadores de Estuche:</b> Mantén la humedad relativa entre el 45% y el 55% dentro del estuche.</li>
        <li><b>Evita Fuentes Directas de Calor:</b> No dejes la guitarra cerca de estufas, radiadores o ventanas con luz solar directa.</li>
        <li><b>Hidrata el Diapasón:</b> Aplica aceite de limón en diapasones de palisandro (rosewood) o ébano durante el cambio de cuerdas.</li>
        <li><b>Aclimata el Instrumento:</b> Si llegas de la calle con la guitarra en su funda, espera 15 a 20 minutos antes de abrirla para evitar el choque térmico.</li>
      </ul>
      <p class="mt-3">Siguiendo estos sencillos pasos garantizarás una mayor durabilidad y comodidad al tocar durante todo el año.</p>
    `
  },
  {
    id: 2,
    titulo: "Llegada de la Nueva Línea de Sintetizadores Roland XPS-10 V2",
    categoria: "Novedades de Producto",
    fecha: "01 de Septiembre, 2026",
    autor: "Área de Ventas y Audio",
    imagen: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    resumen: "Ya está disponible en nuestra tienda la actualización de uno de los sintetizadores más aclamados por músicos en vivo. Descubre sus nuevas funciones.",
    descripcionCompleta: `
      <p>Nos complace anunciar la llegada exclusiva a nuestra sucursal de la nueva versión del sintetizador Roland XPS-10 V2. Diseñado para ofrecer sonidos de nivel profesional con la máxima portabilidad.</p>
      
      <h5 class="fw-bold text-dark mt-3">Características Destacadas:</h5>
      <ul>
        <li>Más de 1.500 sonidos de alta calidad heredados de la serie flag-ship de Roland.</li>
        <li>Botones de ejecución rápida para la reproducción de muestras de audio de usuario mediante memoria USB.</li>
        <li>Interfaz intuitiva optimizada para actuaciones y presentaciones en vivo.</li>
        <li>Diseño ligero y compacto con solo 4 kg de peso total.</li>
      </ul>
      <p class="mt-3">Ven a nuestra tienda física en Viña del Mar a probarlo en nuestra sala de demostración interactiva o solicítalo con despacho a todo Chile mediante nuestra tienda web.</p>
    `
  },
  {
    id: 3,
    titulo: "Taller Gratuito de Microfonía e Iluminación Profesional",
    categoria: "Actividades y Eventos",
    fecha: "28 de Agosto, 2026",
    autor: "Comunidad Sonido Vivo",
    imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    resumen: "Súmate a nuestro workshop presencial enfocado en técnicas de microfonía para escenarios y configuración de sistemas DMX de iluminación.",
    descripcionCompleta: `
      <p>Sonido Vivo invita a toda la comunidad de ingenieros de sonido, DJs, técnicos de iluminación y músicos al taller práctico presencial sobre sonido en vivo e iluminación escénica.</p>
      
      <h5 class="fw-bold text-dark mt-3">Puntos a Tratar durante la Jornada:</h5>
      <ul>
        <li><b>Patrones Polares:</b> Cuándo utilizar micrófonos dinámicos vs. condensadores en ambientes ruidosos.</li>
        <li><b>Técnicas de Microfonía para Batería:</b> Captación precisa sin cancelaciones de fase.</li>
        <li><b>Programación DMX Básica:</b> Creación de escenas y shows de luces dinámicos.</li>
      </ul>
      <p class="mt-3"><b>Fecha:</b> Sábado 12 de Septiembre a las 11:00 hrs.<br><b>Lugar:</b> Casa Matriz Sonido Vivo (Av. Libertad 450, Viña del Mar).<br><i>Entrada libre previa inscripción en tienda o formulario web.</i></p>
    `
  }
];

// Función para renderizar la lista de tarjetas en el HTML
function cargarNovedades() {
  const contenedor = document.getElementById("contenedorNovedades");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  listaNovedades.forEach((item, index) => {
    contenedor.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0 overflow-hidden">
          <img src="${item.imagen}" class="card-img-top object-fit-cover" alt="${item.titulo}" style="height: 200px;">
          <div class="card-body d-flex flex-column p-4">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="badge bg-primary opacity-85 small">${item.categoria}</span>
              <span class="text-muted small"><i class="bi bi-clock me-1"></i>${item.fecha}</span>
            </div>
            <h5 class="card-title fw-bold text-dark mb-2">${item.titulo}</h5>
            <p class="card-text text-secondary small flex-grow-1 mb-4">${item.resumen}</p>
            <button class="btn btn-outline-primary fw-bold w-100 mt-auto" onclick="abrirModalDetalle(${index})">
              <i class="bi bi-eye-fill me-1"></i> Leer Más
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// Función para abrir la vista de detalle con la descripción completa dentro del Modal
function abrirModalDetalle(index) {
  const novedad = listaNovedades[index];
  if (!novedad) return;

  document.getElementById("modalDetalleTitulo").innerText = novedad.titulo;
  document.getElementById("modalDetalleSubtitulo").innerText = novedad.titulo;
  document.getElementById("modalDetalleImagen").src = novedad.imagen;
  document.getElementById("modalDetalleFecha").innerText = novedad.fecha;
  document.getElementById("modalDetalleCategoria").innerText = novedad.categoria;
  document.getElementById("modalDetalleAutor").innerText = novedad.autor;
  document.getElementById("modalDetalleCuerpo").innerHTML = novedad.descripcionCompleta;

  const modalElem = document.getElementById("modalDetalleNovedad");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElem);
  modalInstance.show();
}

// Evento de inicialización
document.addEventListener("DOMContentLoaded", () => {
  cargarNovedades();
});