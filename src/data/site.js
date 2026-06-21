/* =====================================================================
   DATOS DEL NEGOCIO — KM Computación
   ---------------------------------------------------------------------
   Todo el contenido editable del sitio vive acá. Cambiá estos valores
   y se actualizan en todas las páginas. Los // TODO marcan lo que
   conviene completar con la información real del local.
   ===================================================================== */

export const business = {
  name: 'KM Computación',
  tagline: 'Tecnología de confianza, cerca tuyo',
  description:
    'Venta de equipos, insumos, servicio técnico y soluciones de redes. ' +
    'Te asesoramos para que compres lo que realmente necesitás.',

  phone: '+54 02320 480785',
  whatsapp: '541123971402', // solo números, con código de país (sin + ni espacios)
  email: 'contacto@kmcomputacion.com',
  address: 'Av. El Callao 1577, Grand Bourg, Buenos Aires',
  mapsLink: 'https://maps.app.goo.gl/95VUZDDEL4wqqudC6',
  mapsEmbed:
    'https://www.google.com/maps?q=Av.+El+Callao+1577,+Grand+Bourg,+Buenos+Aires&output=embed',
  hours: [
    { day: 'Lunes a Viernes', time: '9:00 – 13:00 · 16:30 – 20:00' },
    { day: 'Sábados', time: '9:00 – 13:00' },
    { day: 'Domingos', time: 'Cerrado' },
  ],
  social: {
    instagram: '', // TODO: ej. 'https://instagram.com/kmcomputacion'
    facebook: '',
  },

  // Métricas para la franja de confianza (contadores animados)
  stats: [
    { value: 12, suffix: '+', label: 'Años de experiencia' },
    { value: 5000, suffix: '+', label: 'Clientes atendidos' },
    { value: 48, suffix: 'h', label: 'Reparaciones express' },
    { value: 100, suffix: '%', label: 'Compromiso garantizado' },
  ],
}

/** Mensaje de WhatsApp prellenado. Devuelve el link completo wa.me */
export function whatsappLink(text = '¡Hola! Quería hacer una consulta.') {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`
}

/* --- Los 4 rubros del local ---
   icon: nombre de un ícono de lucide-react (se resuelve en el componente) */
export const services = [
  {
    id: 'venta-equipos',
    icon: 'Monitor',
    title: 'Venta de equipos',
    short: 'PCs, notebooks y armados a medida.',
    description:
      'PCs de escritorio, notebooks, monitores y armados a medida según tu uso: ' +
      'oficina, estudio, diseño o gaming. Te ayudamos a elegir la mejor relación precio-rendimiento.',
    bullets: [
      'PCs de escritorio y all-in-one',
      'Notebooks de todas las gamas',
      'Armado de PC a medida',
      'Monitores y periféricos',
    ],
  },
  {
    id: 'insumos',
    icon: 'Cable',
    title: 'Insumos y accesorios',
    short: 'Componentes, almacenamiento y consumibles.',
    description:
      'Todo lo que tu equipo necesita: memorias, discos, fuentes, cables, ' +
      'cartuchos, tóner y accesorios. Productos originales y compatibles.',
    bullets: [
      'Memorias RAM y almacenamiento SSD/HDD',
      'Cables, adaptadores y conectores',
      'Cartuchos, tóner y resmas',
      'Teclados, mouse y auriculares',
    ],
  },
  {
    id: 'servicio-tecnico',
    icon: 'Wrench',
    title: 'Servicio técnico',
    short: 'Reparación y mantenimiento de PC y notebooks.',
    description:
      'Diagnóstico, reparación y mantenimiento de PCs y notebooks. ' +
      'Limpieza, instalación de software, recuperación de datos y optimización.',
    bullets: [
      'Diagnóstico y presupuesto sin cargo',
      'Reparación de hardware y software',
      'Limpieza y mantenimiento preventivo',
      'Recuperación de datos',
    ],
  },
  {
    id: 'redes-cctv',
    icon: 'Network',
    title: 'Redes y CCTV',
    short: 'Instalación de redes y cámaras de seguridad.',
    description:
      'Instalación y configuración de redes hogareñas y empresariales, ' +
      'cámaras de seguridad (CCTV) e impresoras. Soluciones para empresas.',
    bullets: [
      'Redes cableadas y WiFi',
      'Cámaras de seguridad (CCTV)',
      'Instalación de impresoras',
      'Soporte a empresas',
    ],
  },
]

/* --- Categorías del catálogo (vitrina, sin precios) ---
   image: ruta opcional a una foto real; si falta, se muestra el ícono.
   rubro: agrupa para el filtro del catálogo. */
export const categories = [
  { id: 'notebooks', rubro: 'Equipos', icon: 'Laptop', name: 'Notebooks', image: '' },
  { id: 'pcs', rubro: 'Equipos', icon: 'Monitor', name: 'PCs de escritorio', image: '' },
  { id: 'armado', rubro: 'Equipos', icon: 'Cpu', name: 'Armado a medida', image: '' },
  { id: 'monitores', rubro: 'Equipos', icon: 'MonitorSmartphone', name: 'Monitores', image: '' },
  { id: 'componentes', rubro: 'Insumos', icon: 'MemoryStick', name: 'Componentes', image: '' },
  { id: 'perifericos', rubro: 'Insumos', icon: 'Keyboard', name: 'Periféricos', image: '' },
  { id: 'consumibles', rubro: 'Insumos', icon: 'Printer', name: 'Cartuchos y tóner', image: '' },
  { id: 'reparacion', rubro: 'Servicio', icon: 'Wrench', name: 'Reparaciones', image: '' },
  { id: 'redes', rubro: 'Redes', icon: 'Network', name: 'Redes', image: '' },
  { id: 'cctv', rubro: 'Redes', icon: 'Cctv', name: 'Cámaras CCTV', image: '' },
  { id: 'impresoras', rubro: 'Redes', icon: 'Printer', name: 'Impresoras', image: '' },
]

export const catalogFilters = ['Todos', 'Equipos', 'Insumos', 'Servicio', 'Redes']

/* --- Marcas con las que trabajamos (tira inferior) ---
   Placeholders por ahora: se muestran como wordmarks de texto.
   Cuando tengas los archivos reales, dejalos en public/marcas/ y completá
   `logo` (ej. '/marcas/intel.svg'); el componente usará la imagen en vez del texto.
   `color`: se usa para teñir el logo al pasar el mouse. */
export const brands = [
  { name: 'Intel', color: '#0071C5', logo: '' },
  { name: 'AMD', color: '#ED1C24', logo: '' },
  { name: 'NVIDIA', color: '#76B900', logo: '' },
  { name: 'HP', color: '#0096D6', logo: '' },
  { name: 'Dell', color: '#007DB8', logo: '' },
  { name: 'Lenovo', color: '#E2231A', logo: '' },
  { name: 'ASUS', color: '#00539B', logo: '' },
  { name: 'Logitech', color: '#00B8FC', logo: '' },
  { name: 'Kingston', color: '#E2001A', logo: '' },
  { name: 'Samsung', color: '#1428A0', logo: '' },
  { name: 'TP-Link', color: '#4ACBD6', logo: '' },
  { name: 'Epson', color: '#1A3A8F', logo: '' },
]

/* --- "Por qué elegirnos" (página Nosotros / Home) --- */
export const reasons = [
  {
    icon: 'ShieldCheck',
    title: 'Garantía en todo',
    text: 'Productos y reparaciones con garantía y respaldo real.',
  },
  {
    icon: 'Users',
    title: 'Asesoramiento honesto',
    text: 'Te recomendamos lo que necesitás, sin venderte de más.',
  },
  {
    icon: 'Zap',
    title: 'Respuesta rápida',
    text: 'Diagnósticos ágiles y reparaciones express cuando se puede.',
  },
  {
    icon: 'MapPin',
    title: 'Atención cercana',
    text: 'Trato directo y personalizado, como en el negocio de barrio.',
  },
]

/* --- Navegación principal (el orden define la dirección de las transiciones) --- */
export const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]
