import { brands } from '../data/site'

/** Un logo individual de la tira: imagen si hay archivo, wordmark si no.
 *  Monocromo por defecto; se tiñe al pasar el mouse (color de la marca). */
function BrandItem({ brand }) {
  const { name, color, logo } = brand

  if (logo) {
    return (
      <img
        src={logo}
        alt={name}
        className="h-5 w-auto shrink-0 opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-6"
        loading="lazy"
      />
    )
  }

  return (
    <span
      style={{ '--brand-color': color }}
      className="shrink-0 select-none font-display text-base font-bold tracking-tight text-white/55 transition-colors duration-300 hover:[color:var(--brand-color)] sm:text-lg"
    >
      {name}
    </span>
  )
}

/**
 * Tira de marcas fija en el borde inferior de la pantalla. Siempre visible,
 * con los logos en loop infinito (track duplicado + translateX(-50%) para que
 * el reinicio sea invisible). Se pausa al hover y respeta prefers-reduced-motion.
 */
export default function BrandMarquee() {
  // Duplicamos la lista: las dos mitades son idénticas, así -50% reinicia sin salto.
  const loop = [...brands, ...brands]

  return (
    <aside
      aria-label="Marcas con las que trabajamos"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-4 border-t border-white/10 bg-brand-dark px-4 sm:px-6"
      style={{ height: 'var(--marquee-h)' }}
    >
      <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-white/40 sm:inline">
        Trabajamos&nbsp;con
      </span>

      {/* Zona del marquee con fade lateral y pausa al hover */}
      <div
        className="group relative flex-1 overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
        }}
      >
        <div
          className="flex w-max items-center gap-10 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-14"
          aria-hidden="true"
        >
          {loop.map((brand, i) => (
            <BrandItem key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </aside>
  )
}
