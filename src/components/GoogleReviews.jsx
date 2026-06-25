import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'

const easeSmooth = [0.16, 1, 0.3, 1]

/** Fila de 5 estrellas rellenas según `value` (0–5). */
function Stars({ value = 0, size = 16 }) {
  return (
    <span className="inline-flex" aria-label={`${value} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.round(value) ? 'text-amber-400' : 'text-ink/15'
          }
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </span>
  )
}

/** Avatar del autor: foto de Google con fallback a la inicial del nombre. */
function Avatar({ photo, author }) {
  const [broken, setBroken] = useState(false)
  if (photo && !broken) {
    return (
      <img
        src={photo}
        alt={author}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setBroken(true)}
        className="h-11 w-11 shrink-0 rounded-full object-cover"
      />
    )
  }
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 font-bold text-brand">
      {author?.charAt(0)?.toUpperCase() ?? '?'}
    </span>
  )
}

/**
 * Sección de reseñas reales de Google. Pide los datos a /api/reviews
 * (función serverless que esconde la API key). Si la API falla, no hay
 * reseñas o estamos en `vite dev` (sin /api), la sección no se renderiza
 * para no romper la página.
 */
export default function GoogleReviews() {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ok | error

  useEffect(() => {
    let active = true
    fetch('/api/reviews')
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        if (!active) return
        setData(json)
        setStatus('ok')
      })
      .catch(() => active && setStatus('error'))
    return () => {
      active = false
    }
  }, [])

  // Mientras carga no mostramos nada (evita un salto de layout llamativo).
  if (status === 'loading') return null

  // Error o sin reseñas: no renderizamos la sección.
  if (status === 'error' || !data?.reviews?.length) return null

  const { rating, total, mapsUri, reviews } = data

  return (
    <div className="container-km mt-24">
      <SectionHeading
        eyebrow="Opiniones"
        title="Lo que dicen nuestros clientes"
        align="center"
      />

      {/* Resumen: promedio + total + acceso a dejar reseña */}
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        {rating != null && (
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-ink">
              {rating.toLocaleString('es-AR', { maximumFractionDigits: 1 })}
            </span>
            <span>
              <Stars value={rating} size={20} />
              <span className="mt-0.5 block text-sm text-ink/60">
                {total.toLocaleString('es-AR')} reseñas en Google
              </span>
            </span>
          </div>
        )}
        {mapsUri && (
          <a
            href={mapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Dejá tu reseña en Google
          </a>
        )}
      </div>

      {/* Grilla de reseñas (flex en vez de grid para centrar la última fila incompleta) */}
      <div className="mt-12 flex flex-wrap justify-center gap-5">
        {reviews.map((r, i) => (
          <motion.figure
            key={`${r.author}-${i}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: easeSmooth, delay: i * 0.06 }}
            className="card flex w-full flex-col p-6 sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
          >
            <div className="flex items-center gap-3">
              <Avatar photo={r.photo} author={r.author} />
              <figcaption className="min-w-0">
                <a
                  href={r.authorUri ?? mapsUri ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate font-bold text-ink transition-colors hover:text-brand"
                >
                  {r.author}
                </a>
                <span className="text-xs text-ink/50">{r.relativeTime}</span>
              </figcaption>
            </div>
            {r.rating != null && (
              <div className="mt-4">
                <Stars value={r.rating} />
              </div>
            )}
            <blockquote className="mt-3 line-clamp-6 text-sm leading-relaxed text-ink/70">
              {r.text}
            </blockquote>
          </motion.figure>
        ))}
      </div>
    </div>
  )
}
