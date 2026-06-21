import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const easeSmooth = [0.16, 1, 0.3, 1]

/**
 * Tarjeta de servicio (rubro). Hover sutil: se eleva, el ícono se ilumina
 * y la flecha avanza. Linkea a la sección detallada en /servicios.
 */
export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: easeSmooth, delay: index * 0.06 }}
    >
      <Link
        to={`/servicios#${service.id}`}
        className="group flex h-full flex-col rounded-brand border border-ink/[0.06] bg-white p-7 shadow-soft transition-all duration-200 ease-smooth hover:-translate-y-1 hover:shadow-glow"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
          <Icon name={service.icon} size={24} strokeWidth={2} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
        <p className="mt-2 flex-1 text-ink/60">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Ver más
          <ArrowRight
            size={16}
            className="transition-transform duration-200 ease-smooth group-hover:translate-x-1"
          />
        </span>
      </Link>
    </motion.div>
  )
}
