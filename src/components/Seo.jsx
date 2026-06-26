import { Head } from 'vite-react-ssg'

/* =====================================================================
   SEO por página — title, description, canonical y Open Graph.
   Se pre-renderiza en el <head> de cada ruta gracias a vite-react-ssg,
   así Google recibe metadatos reales (no inyectados por JS en cliente).
   ===================================================================== */

const SITE_URL = 'https://www.kmcomputacion.com.ar'
const DEFAULT_OG_IMAGE = `${SITE_URL}/Logo%20KM.png`

export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
}) {
  const url = `${SITE_URL}${path}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="KM Computación" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_AR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
