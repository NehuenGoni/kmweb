/**
 * Logo de KM Computación.
 *
 * La imagen en public/logo km.png tiene fondo blanco, así que:
 * - En la navbar (fondo claro/transparente) se usa directamente.
 * - En el footer (fondo oscuro) se envuelve en un contenedor blanco
 *   redondeado para que el fondo blanco quede integrado al diseño.
 *
 * Para actualizar el logo: reemplazá el archivo public/Logo KM.png.
 */
export default function Logo({ className = '', inFooter = false }) {
  const img = (
    <img
      src="/Logo KM.png"
      alt="KM Computación"
      className={className}
      draggable={false}
    />
  )

  if (inFooter) {
    return (
      <span className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm">
        {img}
      </span>
    )
  }

  return img
}
