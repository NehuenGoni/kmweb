/**
 * Logo de KM Computación.
 *
 * La imagen en public/Logo KM.png tiene fondo transparente (PNG RGBA), así que
 * el isotipo se usa directamente sobre cualquier fondo (navbar y footer oscuros).
 *
 * Para actualizar el logo: reemplazá el archivo public/Logo KM.png.
 */
export default function Logo({ className = '' }) {
  return (
    <img
      src="/Logo KM.png"
      alt="KM Computación"
      className={className}
      draggable={false}
    />
  )
}
