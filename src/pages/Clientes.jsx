import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CompanyCard from '../components/CompanyCard'
import { clientes, whatsappLink } from '../data/site'

const easeSmooth = [0.16, 1, 0.3, 1]

export default function Clientes() {
  return (
    <div className="container-km py-16 sm:py-20">
      <SectionHeading
        eyebrow="Empresas"
        title="Empresas que confían en nosotros"
        subtitle="Acompañamos a empresas de logística, distribución, comercio y salud con equipamiento, insumos, servicio técnico y soluciones de redes."
      />

      <div className="mt-12 flex flex-wrap justify-center gap-5">
        {clientes.map((company, i) => (
          <div
            key={company.name}
            className="w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-0.9375rem)]"
          >
            <CompanyCard company={company} index={i} />
          </div>
        ))}
      </div>

      {/* CTA de cierre */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: easeSmooth }}
        className="mt-16 rounded-brand border border-ink/[0.06] bg-white p-8 text-center shadow-soft"
      >
        <h3 className="text-xl font-bold text-ink">
          ¿Tu empresa también necesita soporte?
        </h3>
        <p className="mx-auto mt-2 max-w-md text-ink/60">
          Damos servicio a empresas: equipamiento, insumos, mantenimiento y redes.
          Contanos qué necesitás y armamos una solución a medida.
        </p>
        <a
          href={whatsappLink('¡Hola! Quería consultar por servicios para mi empresa.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6"
        >
          <MessageCircle size={17} />
          Hablemos
        </a>
      </motion.div>
    </div>
  )
}
