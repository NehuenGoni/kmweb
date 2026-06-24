import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import { navLinks, business } from '../data/site'

const easeSmooth = [0.16, 1, 0.3, 1]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Sombra/fondo al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquear scroll del body cuando el sheet mobile está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl transition-all duration-300 ease-smooth ${
        scrolled ? 'bg-ink/80 shadow-soft' : 'bg-ink/60'
      }`}
    >
      <nav className="container-km flex h-11 items-center justify-between sm:h-12">
        <Link to="/" aria-label="KM Computación — Inicio">
          <Logo className="h-7 w-auto sm:h-8" />
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-white/10"
                        transition={{ duration: 0.3, ease: easeSmooth }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={`tel:${business.phone}`} className="btn-primary hidden md:inline-flex">
            <Phone size={16} />
            Llamar
          </a>

          {/* Botón hamburguesa mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2, ease: easeSmooth }}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Sheet mobile */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-11 z-30 bg-ink/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="sheet"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: easeSmooth }}
              className="fixed inset-x-0 top-11 z-30 mx-3 rounded-brand border border-white/10 bg-ink/90 p-3 shadow-soft backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, ease: easeSmooth }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'text-white/80 hover:bg-white/5'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <a
                href={`tel:${business.phone}`}
                className="btn-primary mt-2 w-full"
              >
                <Phone size={16} />
                Llamar ahora
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
