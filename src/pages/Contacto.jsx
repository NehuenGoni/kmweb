import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { business, whatsappLink } from '../data/site'

const easeSmooth = [0.16, 1, 0.3, 1]

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', motivo: 'Consulta general', mensaje: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // El formulario arma un mensaje y abre WhatsApp prellenado (sin backend).
  const handleSubmit = (e) => {
    e.preventDefault()
    const text =
      `¡Hola! Soy ${form.nombre || 'un cliente'}.\n` +
      `Motivo: ${form.motivo}.\n` +
      (form.mensaje ? `Mensaje: ${form.mensaje}` : '')
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  const contactItems = [
    { icon: Phone, label: 'Teléfono', value: business.phone, href: `tel:${business.phone}` },
    { icon: Mail, label: 'Email', value: business.email, href: `mailto:${business.email}` },
    { icon: MapPin, label: 'Dirección', value: business.address, href: business.mapsLink },
  ]

  return (
    <div className="container-km py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contacto"
        title="Hablemos"
        subtitle="La forma más rápida es por WhatsApp, pero podés escribirnos por donde prefieras."
        align="center"
        className="mx-auto"
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Columna de datos */}
        <div className="space-y-4">
          {/* CTA WhatsApp — acción primaria */}
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
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
              <MessageCircle size={24} />
            </span>
            <span>
              <span className="block font-bold">Escribinos por WhatsApp</span>
              <span className="text-sm text-white/80">Respondemos al toque</span>
            </span>
          </motion.a>

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

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeSmooth, delay: 0.1 }}
          className="rounded-brand border border-ink/[0.06] bg-white p-6 shadow-soft sm:p-8"
        >
          <h3 className="text-xl font-bold text-ink">Envianos tu consulta</h3>
          <p className="mt-1 text-sm text-ink/60">
            Completá el formulario y se abrirá WhatsApp con tu mensaje listo para enviar.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="nombre" className="text-sm font-semibold text-ink">
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                value={form.nombre}
                onChange={update('nombre')}
                placeholder="Tu nombre"
                className="mt-1.5 w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-brand"
              />
            </div>

            <div>
              <label htmlFor="motivo" className="text-sm font-semibold text-ink">
                Motivo
              </label>
              <select
                id="motivo"
                value={form.motivo}
                onChange={update('motivo')}
                className="mt-1.5 w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-brand"
              >
                <option>Consulta general</option>
                <option>Compra de equipo</option>
                <option>Insumos / accesorios</option>
                <option>Servicio técnico / reparación</option>
                <option>Redes / CCTV</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="text-sm font-semibold text-ink">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={update('mensaje')}
                placeholder="Contanos qué necesitás..."
                className="mt-1.5 w-full resize-none rounded-xl border border-ink/10 bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-brand"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              <Send size={17} />
              Enviar por WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}
