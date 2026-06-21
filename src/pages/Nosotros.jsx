import { motion } from 'framer-motion'
import { MapPin, MonitorSmartphone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { business, reasons } from '../data/site'

const easeSmooth = [0.16, 1, 0.3, 1]

export default function Nosotros() {
  return (
    <div className="py-16 sm:py-20">
      {/* Intro */}
      <div className="container-km grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Nosotros"
            title="Tu local de computación de confianza"
            subtitle={business.description}
          />
          <p className="mt-5 leading-relaxed text-ink/70">
            {/* TODO: reemplazar por la historia real del local */}
            En {business.name} llevamos años acompañando a vecinos, estudiantes y
            empresas con soluciones tecnológicas. Creemos en el asesoramiento honesto,
            el servicio cercano y en explicar las cosas en simple. No te vendemos de
            más: te ayudamos a comprar lo que realmente necesitás.
          </p>
        </div>

        {/* Foto del local (placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeSmooth }}
          className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-ink/[0.06] bg-gradient-to-br from-brand-dark to-brand shadow-soft"
        >
          {/* TODO: reemplazar este placeholder por una foto real del local.
              Importá la imagen y usá <img src={...} className="h-full w-full object-cover" /> */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/80">
            <MonitorSmartphone size={56} strokeWidth={1.4} />
            <p className="text-sm font-semibold">Foto del local</p>
          </div>
        </motion.div>
      </div>

      {/* Por qué elegirnos */}
      <div className="container-km mt-24">
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Lo que nos distingue"
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: easeSmooth, delay: i * 0.06 }}
              className="card p-6 text-center"
            >
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Icon name={r.icon} size={24} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ubicación */}
      <div className="container-km mt-24">
        <div className="grid items-stretch gap-8 overflow-hidden rounded-[1.5rem] border border-ink/[0.06] bg-white shadow-soft lg:grid-cols-2">
          <div className="p-8 sm:p-10">
            <span className="eyebrow">Dónde estamos</span>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
              Pasá a visitarnos
            </h2>
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-start gap-2.5 text-ink/70 transition-colors hover:text-brand"
            >
              <MapPin size={20} className="mt-0.5 shrink-0 text-brand" />
              {business.address}
            </a>
            <div className="mt-6 space-y-2">
              {business.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between border-b border-ink/[0.06] py-2 text-sm"
                >
                  <span className="font-semibold text-ink">{h.day}</span>
                  <span className="text-ink/60">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[320px] bg-ink/5">
            <iframe
              title="Ubicación de KM Computación"
              src={business.mapsEmbed}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}
