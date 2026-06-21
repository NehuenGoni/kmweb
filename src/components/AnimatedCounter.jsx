import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

/**
 * Cuenta desde 0 hasta `value` cuando entra en viewport (una sola vez).
 * Formatea con separador de miles local (es-AR) y mueve las comas con
 * suavidad porque el número crece de a poco. Deleite sutil (uso frecuente).
 */
export default function AnimatedCounter({ value, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {display.toLocaleString('es-AR')}
      {suffix}
    </span>
  )
}
