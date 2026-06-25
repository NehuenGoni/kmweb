import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Icon from '../components/Icon'
import { business, services, reasons, whatsappLink } from '../data/site'

const easeSmooth = [0.16, 1, 0.3, 1]

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative -mt-11 overflow-hidden bg-brand-dark text-white sm:-mt-12">
        {/* Glow decorativo */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-3xl" />

        <div className="container-km relative grid items-center gap-12 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-28">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeSmooth }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-accent backdrop-blur"
            >
              <Sparkles size={15} />
              {business.tagline}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeSmooth, delay: 0.06 }}
              className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Todo para tu
              <span className="bg-gradient-to-r from-accent to-brand bg-clip-text text-transparent">
                {' '}computadora
              </span>
              , en un solo lugar.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeSmooth, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-white/70"
            >
              {business.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeSmooth, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={whatsappLink('¡Hola! Quería hacer una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </a>
              <Link
                to="/clientes"
                className="inline-flex items-center justify-center gap-2 rounded-brand border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition-all duration-150 ease-smooth hover:bg-white/10"
              >
                Empresas que confían
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Tarjeta flotante de servicios */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeSmooth, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: easeSmooth, delay: 0.3 + i * 0.08 }}
                  className={`rounded-brand border border-white/10 bg-white/[0.04] p-5 backdrop-blur ${
                    i % 2 === 1 ? 'translate-y-6' : ''
                  }`}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/20 text-accent">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <h3 className="mt-4 font-bold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{s.short}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== SERVICIOS ===================== */}
      <section className="container-km py-20">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Nuestros servicios"
          subtitle="Desde la venta de equipos hasta el servicio técnico y la instalación de redes. Soluciones completas para vos y tu empresa."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* ===================== POR QUÉ ELEGIRNOS ===================== */}
      <section className="container-km py-20">
        <SectionHeading
          eyebrow="Por qué KM"
          title="La diferencia está en el trato"
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
              className="card p-6"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-brand">
                <Icon name={r.icon} size={24} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </>
  )
}
