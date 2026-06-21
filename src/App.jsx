import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BrandMarquee from './components/BrandMarquee'
import PageTransition from './components/PageTransition'
import { navLinks } from './data/site'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Catalogo from './pages/Catalogo'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

/** Índice de una ruta dentro del nav (para decidir la dirección espacial). */
function navIndex(pathname) {
  const i = navLinks.findIndex((l) => l.to === pathname)
  return i === -1 ? 0 : i
}

export default function App() {
  const location = useLocation()
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
      <Navbar />

      <div className="flex-1 overflow-x-clip">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname} direction={direction}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </div>

      <Footer />
      <WhatsAppButton />
      <BrandMarquee />
    </div>
  )
}
