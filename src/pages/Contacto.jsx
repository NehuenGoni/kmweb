import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { business, whatsappLink } from '../data/site'

const easeSmooth = [0.16, 1, 0.3, 1]

export default function Contacto() {
  const contactItems = [
    { icon: Phone, label: 'Teléfono', value: business.phone, href: `tel:${business.phone}` },
    { icon: Mail, label: 'Email', value: business.email, href: `mailto:${business.email}` },
    { icon: MapPin, label: 'Dirección', value: business.address, href: business.mapsLink },
  ]

  return (
    <div className="container-km py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contacto"
        title="Hablemos, o pasá a visitarnos"
        subtitle="La forma más rápida es por WhatsApp, pero podés escribirnos por donde prefieras."
        align="center"
        className="mx-auto"
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
        {/* Columna de datos */}
        <div className="space-y-4">
          {/* CTAs primarios — WhatsApp + Instagram */}
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.a
              href={whatsappLink('¡Hola! Quería hacer una consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="group flex items-center gap-4 rounded-brand bg-[#25D366] p-5 text-white shadow-soft transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-glow"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                <MessageCircle size={24} />
              </span>
              <span>
                <span className="block font-bold">WhatsApp</span>
                <span className="text-sm text-white/80">Respondemos al toque</span>
              </span>
            </motion.a>

            {business.social.instagram && (
              <motion.a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeSmooth, delay: 0.05 }}
                className="group flex items-center gap-4 rounded-brand bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-5 text-white shadow-soft transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                  <Instagram size={24} />
                </span>
                <span>
                  <span className="block font-bold">Instagram</span>
                  <span className="text-sm text-white/80">Seguinos @kmcomputacion</span>
                </span>
              </motion.a>
            )}
          </div>

          {contactItems.map((item, i) => {
            const Inner = (
              <>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <item.icon size={22} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink/50">{item.label}</span>
                  <span className="font-semibold text-ink">{item.value}</span>
                </span>
              </>
            )
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeSmooth, delay: 0.05 * (i + 1) }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 rounded-brand border border-ink/[0.06] bg-white p-5 shadow-soft transition-colors hover:border-brand/30"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-brand border border-ink/[0.06] bg-white p-5 shadow-soft">
                    {Inner}
                  </div>
                )}
              </motion.div>
            )
          })}

          {/* Horarios */}
          <div className="rounded-brand border border-ink/[0.06] bg-white p-5 shadow-soft">
            <p className="flex items-center gap-2 text-sm font-semibold text-ink/50">
              <Clock size={16} className="text-brand" />
              Horarios de atención
            </p>
            <div className="mt-3 space-y-2">
              {business.hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="font-semibold text-ink">{h.day}</span>
                  <span className="text-ink/60">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeSmooth, delay: 0.1 }}
          className="overflow-hidden rounded-brand border border-ink/[0.06] shadow-soft"
        >
          <iframe
            src={business.mapsEmbed}
            title={`Ubicación de ${business.name} en el mapa`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-72 w-full lg:h-full"
          />
        </motion.div>
      </div>
    </div>
  )
}
