import { useEffect, useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Head } from 'vite-react-ssg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BrandMarquee from './components/BrandMarquee'
import PageTransition from './components/PageTransition'
import { business, navLinks } from './data/site'

const SITE_URL = 'https://www.kmcomputacion.com.ar'

/* Datos estructurados del negocio (JSON-LD). Es la clave del SEO local:
   NAP consistente (nombre, dirección, teléfono), horarios, zona de servicio
   y redes. Derivado de `business` (fuente única en data/site.js). */
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ComputerStore',
  '@id': `${SITE_URL}/#business`,
  name: business.name,
  description: business.description,
  url: SITE_URL,
  image: `${SITE_URL}/Logo%20KM.png`,
  logo: `${SITE_URL}/Logo%20KM.png`,
  telephone: business.phone,
  email: business.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. El Callao 1577',
    addressLocality: 'Grand Bourg',
    addressRegion: 'Buenos Aires',
    postalCode: '1615',
    addressCountry: 'AR',
  },
  areaServed: [
    'Grand Bourg',
    'Malvinas Argentinas',
    'Los Polvorines',
    'Tortuguitas',
    'Zona Norte GBA',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:30',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [business.social.instagram, business.social.facebook].filter(Boolean),
}

/** Índice de una ruta dentro del nav (para decidir la dirección espacial). */
function navIndex(pathname) {
  const i = navLinks.findIndex((l) => l.to === pathname)
  return i === -1 ? 0 : i
}

export default function App() {
  const location = useLocation()
  const outlet = useOutlet()
  const prevIndex = useRef(navIndex(location.pathname))

  // Dirección de la transición: avanzar en el nav => entra desde la derecha.
  const currentIndex = navIndex(location.pathname)
  const direction = currentIndex >= prevIndex.current ? 1 : -1

  useEffect(() => {
    prevIndex.current = currentIndex
  }, [currentIndex])

  // Scroll al tope al cambiar de ruta (salvo que haya un hash de ancla)
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ paddingBottom: 'var(--marquee-h)' }}
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJsonLd)}
        </script>
      </Head>

      <Navbar />

      <div className="flex-1 overflow-x-clip">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname} direction={direction}>
            {outlet}
          </PageTransition>
        </AnimatePresence>
      </div>

      <Footer />
      <WhatsAppButton />
      <BrandMarquee />
    </div>
  )
}
