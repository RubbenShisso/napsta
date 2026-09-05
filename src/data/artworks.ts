export type Artwork = {
  id: number
  artist: string
  title: string
  year: number
  medium: string
  status: string
  image: string
  dimensions: string
  description: string
  availability: string
}

export const artworks: Artwork[] = [
  {
    id: 1,
    artist: 'THANDIWE M.',
    title: 'Resilience',
    year: 2026,
    medium: 'Mixed media on canvas',
    status: 'ENQUIRE',
    image: '/images/artwork-1.svg',
    dimensions: '150 x 120 cm',
    description: 'A layered study in memory, strength and cultural identity, expressed through gesture and texture.',
    availability: 'Private sale available',
  },
  {
    id: 2,
    artist: 'KABISO MASEKO',
    title: 'Untitled',
    year: 2025,
    medium: 'Charcoal and acrylic',
    status: 'PRIVATE SALE',
    image: '/images/artwork-2.svg',
    dimensions: '120 x 90 cm',
    description: 'An abstracted portrait balancing material tension with a sense of quiet authority and movement.',
    availability: 'Available for private acquisition',
  },
  {
    id: 3,
    artist: 'LUNGA N.',
    title: 'New Horizons',
    year: 2024,
    medium: 'Oil on canvas',
    status: 'PRICE ON REQUEST',
    image: '/images/artwork-3.svg',
    dimensions: '140 x 100 cm',
    description: 'A luminous composition that speaks to transition, possibility and optimism rooted in place.',
    availability: 'Request pricing details',
  },
]
