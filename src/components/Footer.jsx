import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import Logo from './Logo'
import { business, navLinks } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 bg-brand-dark text-white/80">
      <div className="container-km grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="lg:col-span-1">
          <Link to="/" aria-label="KM Computación — Inicio">
            <Logo className="h-9 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {business.description}
          </p>
          <div className="mt-5 flex gap-3">
            {business.social.instagram && (
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram size={18} />
              </a>
            )}
            {business.social.facebook && (
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Facebook size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${business.phone}`}
                className="flex items-start gap-3 text-white/60 transition-colors hover:text-white"
              >
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-start gap-3 text-white/60 transition-colors hover:text-white"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 transition-colors hover:text-white"
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {business.address}
              </a>
            </li>
          </ul>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Horarios
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {business.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-3 text-white/60">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  <span className="block font-semibold text-white/80">{h.day}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-km flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} {business.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
