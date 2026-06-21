import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Icon from './Icon'
import { whatsappLink } from '../data/site'

const easeSmooth = [0.16, 1, 0.3, 1]

/**
 * Tarjeta de categoría del catálogo. Muestra foto real si existe (image),
 * o el ícono de la categoría como placeholder elegante. Al ser vitrina,
 * el CTA es consultar por WhatsApp (sin precios).
 */
export default function CategoryCard({ category, index = 0 }) {
  const hasImage = Boolean(category.image)
  const link = whatsappLink(
    `¡Hola! Quería consultar sobre ${category.name}.`,
  )

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: easeSmooth, delay: index * 0.04 }}
      className="group relative flex flex-col overflow-hidden rounded-brand border border-ink/[0.06] bg-white shadow-soft transition-all duration-200 ease-smooth hover:-translate-y-1 hover:shadow-glow"
    >
      {/* Media: foto o placeholder con ícono */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-dark to-brand">
        {hasImage ? (
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/90">
            <Icon name={category.icon} size={56} strokeWidth={1.4} />
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
          {category.rubro}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 p-5">
        <h3 className="font-bold text-ink">{category.name}</h3>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <MessageCircle size={15} />
          Consultar
        </span>
      </div>
    </motion.a>
  )
}
