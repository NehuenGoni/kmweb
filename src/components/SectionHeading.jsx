import { motion } from 'framer-motion'

const easeSmooth = [0.16, 1, 0.3, 1]

/**
 * Encabezado de sección reutilizable: eyebrow + título + bajada.
 * Anima al entrar en viewport (una sola vez).
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: easeSmooth }}
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-ink/60">{subtitle}</p>
      )}
    </motion.div>
  )
}
