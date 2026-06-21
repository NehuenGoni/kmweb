import { motion } from 'framer-motion'

/**
 * Envuelve el contenido de cada página con una transición de entrada/salida.
 * La dirección la define App.jsx según el orden del nav (avanzar = entra
 * desde la derecha; retroceder = entra desde la izquierda), construyendo
 * memoria espacial. Curva "golden" de design-with-taste.
 */
const easeSmooth = [0.16, 1, 0.3, 1]

export default function PageTransition({ children, direction = 1 }) {
  return (
    <motion.main
      initial={{ opacity: 0, x: 24 * direction }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 * direction }}
      transition={{ duration: 0.4, ease: easeSmooth }}
    >
      {children}
    </motion.main>
  )
}
