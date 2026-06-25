const PLACES_ENDPOINT = 'https://places.googleapis.com/v1/places'
const FIELD_MASK = 'rating,userRatingCount,googleMapsUri,reviews'

export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    // No filtramos cuál falta para no dar pistas; es un error de config del server.
    res.status(500).json({ error: 'Reseñas no configuradas en el servidor.' })
    return
  }

  try {
    const url = `${PLACES_ENDPOINT}/${encodeURIComponent(placeId)}`
    const googleRes = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': FIELD_MASK,
        // Pedimos los textos preferentemente en español.
        'Accept-Language': 'es',
      },
    })

    if (!googleRes.ok) {
      res.status(502).json({ error: 'No se pudieron obtener las reseñas.' })
      return
    }

    const data = await googleRes.json()

    // Normalizamos a un JSON propio y estable para no acoplar el frontend
    // al formato de Google.
    const payload = {
      rating: data.rating ?? null,
      total: data.userRatingCount ?? 0,
      mapsUri: data.googleMapsUri ?? null,
      reviews: (data.reviews ?? []).map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Cliente de Google',
        photo: r.authorAttribution?.photoUri ?? null,
        authorUri: r.authorAttribution?.uri ?? null,
        rating: r.rating ?? null,
        text: r.text?.text ?? r.originalText?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
      })),
    }

    // Caché de CDN: 24 h frescas + 12 h sirviendo lo viejo mientras revalida.
    res.setHeader(
      'Cache-Control',
      's-maxage=86400, stale-while-revalidate=43200',
    )
    res.status(200).json(payload)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las reseñas.' })
  }
}
