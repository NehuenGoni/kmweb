import { motion } from 'framer-motion'

const easeSmooth = [0.16, 1, 0.3, 1]

/**
 * Tarjeta de una empresa cliente. Muestra su logo en una tarjeta clara.
 * El logo aparece monocromo (grayscale) y recupera su color al pasar el
 * mouse, mismo lenguaje visual que la tira de marcas inferior. Si la
 * empresa todavía no tiene logo cargado, cae a un wordmark con el nombre.
 */
export default function CompanyCard({ company, index = 0 }) {
  const { name, logo, large } = company

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: easeSmooth, delay: index * 0.06 }}
      className={`group flex aspect-[3/2] items-center justify-center rounded-brand border border-ink/[0.06] bg-white shadow-soft transition-all duration-200 ease-smooth hover:-translate-y-1 hover:shadow-glow ${
        large ? 'p-2' : 'p-6'
      }`}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          title={name}
          loading="lazy"
          className={`w-auto max-w-full object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
            large ? 'h-full' : 'max-h-16'
          }`}
        />
      ) : (
        <span className="select-none text-center font-display text-lg font-bold tracking-tight text-ink/45 transition-colors duration-300 group-hover:text-ink">
          {name}
        </span>
      )}
    </motion.div>
  )
}
