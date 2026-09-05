import { ArrowRight, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { artworks } from '../data/artworks'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const filters = ['All', 'Painting', 'Mixed Media', 'Photography', 'Sculpture'] as const

type Filter = (typeof filters)[number]

function Art() {
  useDocumentTitle('Art | NAPSTA')
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filteredArtworks = useMemo(() => {
    if (activeFilter === 'All') return artworks
    return artworks.filter((art) => {
      const medium = art.medium.toLowerCase()
      if (activeFilter === 'Painting') return medium.includes('oil') || medium.includes('acrylic') || medium.includes('canvas')
      if (activeFilter === 'Mixed Media') return medium.includes('mixed')
      if (activeFilter === 'Photography') return medium.includes('photography')
      if (activeFilter === 'Sculpture') return medium.includes('sculpture')
      return true
    })
  }, [activeFilter])

  return (
    <>
      <Header />
      <main className="bg-napsta-black pt-28 text-napsta-ivory">
        <section className="mx-auto max-w-[1400px] px-5 pb-10 sm:px-8 lg:px-12">
          <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(19,19,18,1),rgba(38,34,30,0.82))] p-6 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-gold">Art</p>
            <h1 className="mt-6 font-serif text-5xl leading-[0.82] tracking-[-0.05em] md:text-7xl lg:text-[8rem]">
              DISCOVER.<br />
              COLLECT.<br />
              CONNECT.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-napsta-ivory/80 md:text-lg">
              A carefully curated selection of contemporary African art, private acquisitions and cultural experiences.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`border px-4 py-2 text-[9px] uppercase tracking-[0.22em] transition-colors ${
                    activeFilter === filter
                      ? 'border-napsta-gold bg-napsta-gold text-napsta-black'
                      : 'border-white/10 bg-transparent text-napsta-ivory/80 hover:border-napsta-gold hover:text-napsta-gold'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-napsta-muted">
              <SlidersHorizontal size={14} /> FILTERS
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredArtworks.map((artwork) => (
              <article key={artwork.id} className="group overflow-hidden border border-white/10 bg-napsta-charcoal">
                <img src={artwork.image} alt={`${artwork.title} by ${artwork.artist}`} className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.26em] text-napsta-muted">
                    <span>{artwork.artist}</span>
                    <span>{artwork.year}</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-napsta-ivory">{artwork.title}</h2>
                    <p className="mt-2 text-sm text-napsta-muted">{artwork.medium}</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-3">
                    <span className="text-[9px] uppercase tracking-[0.24em] text-napsta-gold">{artwork.status}</span>
                    <Link to="/enquiry" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-napsta-ivory hover:text-napsta-gold">
                      ENQUIRE ABOUT THIS WORK <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Art
