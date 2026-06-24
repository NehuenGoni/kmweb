import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { services, whatsappLink } from '../data/site'

const easeSmooth = [0.16, 1, 0.3, 1]

export default function Servicios() {
  const { hash } = useLocation()

  // Si vienen con /servicios#id (desde una ServiceCard), scrollear a la sección
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) {
      // pequeño delay para esperar la transición de página
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350)
    }
  }, [hash])

  return (
    <div className="container-km py-16 sm:py-20">
      <SectionHeading
        eyebrow="Servicios"
        title="Soluciones completas en tecnología"
        subtitle="Conocé en detalle todo lo que KM Computación puede hacer por vos."
      />

      <div className="mt-14 space-y-6">
        {services.map((service, i) => (
          <motion.section
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: easeSmooth }}
            className="group scroll-mt-24 overflow-hidden rounded-[1.5rem] border border-ink/[0.06] bg-white shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              {/* Panel visual */}
              <div
                className={`relative flex min-h-[260px] items-center justify-center overflow-hidden p-10 text-white ${
                  service.image ? '' : 'bg-gradient-to-br from-brand-dark to-brand'
                } ${i % 2 === 1 ? 'md:order-2' : ''}`}
              >
                {service.image ? (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                    <p className="absolute inset-x-8 bottom-7 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      {service.short}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_30%,theme(colors.accent/30),transparent_60%)]" />
                    <div className="relative text-center">
                      <span className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
                        <Icon name={service.icon} size={40} strokeWidth={1.6} />
                      </span>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        {service.short}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Contenido */}
              <div className="p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink/60">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink/80">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`¡Hola! Quería consultar sobre ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-7"
                >
                  <MessageCircle size={17} />
                  Consultar
                </a>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
