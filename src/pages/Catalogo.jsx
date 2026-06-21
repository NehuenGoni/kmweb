import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PackageSearch, ArrowLeft } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CategoryCard from '../components/CategoryCard'
import { categories, catalogFilters, whatsappLink } from '../data/site'

const easeSmooth = [0.16, 1, 0.3, 1]

export default function Catalogo() {
  const [filter, setFilter] = useState('Todos')

  const visible =
    filter === 'Todos'
      ? categories
      : categories.filter((c) => c.rubro === filter)

  return (
    <div className="container-km pb-16 pt-6 sm:pb-20 sm:pt-8">
      <SectionHeading
        eyebrow="Catálogo"
        title="Mirá lo que tenemos"
        subtitle="Es una vitrina de nuestras categorías. Tocá cualquiera para consultar disponibilidad y precio por WhatsApp."
      />

      {/* Filtros por rubro */}
      <div className="mt-8 flex flex-wrap gap-2">
        {catalogFilters.map((f) => {
          const active = filter === f
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-150 ${
                active ? 'text-white' : 'text-ink/70 hover:text-ink'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 -z-10 rounded-full bg-brand"
                  transition={{ duration: 0.3, ease: easeSmooth }}
                />
              )}
              {!active && (
                <span className="absolute inset-0 -z-10 rounded-full border border-ink/10 bg-white" />
              )}
              {f}
            </button>
          )
        })}
      </div>

      {/* Grilla animada */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((c, i) => (
            <CategoryCard key={c.id} category={c} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Estado vacío (defensivo: por si un rubro queda sin items) */}
      {visible.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeSmooth }}
          className="flex flex-col items-center gap-4 py-20 text-center"
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-brand/10 text-brand"
          >
            <PackageSearch size={32} />
          </motion.span>
          <p className="text-ink/60">
            No hay productos en esta categoría por ahora.
          </p>
          <button
            type="button"
            onClick={() => setFilter('Todos')}
            className="btn-ghost"
          >
            <ArrowLeft size={16} />
            Ver todo
          </button>
        </motion.div>
      )}

      {/* CTA de consulta general */}
      <div className="mt-16 rounded-brand border border-ink/[0.06] bg-white p-8 text-center shadow-soft">
        <h3 className="text-xl font-bold text-ink">¿No encontrás lo que buscás?</h3>
        <p className="mx-auto mt-2 max-w-md text-ink/60">
          Trabajamos con muchas marcas y productos. Contanos qué necesitás y lo conseguimos.
        </p>
        <a
          href={whatsappLink('¡Hola! Estoy buscando un producto específico.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6"
        >
          Pedir un producto
        </a>
      </div>
    </div>
  )
}
