import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CollectionCard } from '../components/CollectionCard'
import { FounderSection } from '../components/FounderSection'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { PrivateEnquiryCTA } from '../components/PrivateEnquiryCTA'
import { ServiceCard } from '../components/ServiceCard'
import { SectionHeader } from '../components/SectionHeader'
import { artworks } from '../data/artworks'
import { services } from '../data/services'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Home() {
  useDocumentTitle('NAPSTA | People, Art, Culture & Access')
  const prefersReducedMotion = useReducedMotion()
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[number] | null>(null)
  const visibleArtworks = useMemo(() => artworks.slice(0, 3), [])

  return (
    <>
      <Header />
      <main className="bg-napsta-black text-napsta-ivory">
        <Hero />

        <section id="services" className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </section>

        <FounderSection />

        <section className="bg-napsta-black">
          <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-lg">
                <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-napsta-gold">FEATURED</p>
                <SectionHeader eyebrow="FEATURED" title={'THE\nCOLLECTION'} dark />
              </div>

              <div className="flex flex-col gap-3 text-left lg:items-end">
                <p className="max-w-md text-base text-napsta-muted">
                  A curated selection of contemporary African art.
                </p>
                <Link
                  to="/art"
                  className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-napsta-ivory transition-colors hover:text-napsta-gold"
                >
                  VIEW ALL WORKS <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.15fr_1.15fr_1.15fr]">
              {visibleArtworks.map((artwork) => (
                <CollectionCard key={artwork.id} artwork={artwork} onSelect={setSelectedArtwork} />
              ))}
            </div>
          </div>
        </section>

        <PrivateEnquiryCTA />
      </main>

      {selectedArtwork ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-napsta-black/90 p-4" onClick={() => setSelectedArtwork(null)}>
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden border border-white/10 bg-napsta-charcoal text-napsta-ivory" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedArtwork(null)} className="absolute right-4 top-4 z-10 border border-white/15 bg-napsta-black/50 px-3 py-2 text-xs uppercase tracking-[0.24em] text-napsta-ivory">Close</button>
            <div className="grid md:grid-cols-[1.1fr_0.9fr]">
              <img src={selectedArtwork.image} alt={`${selectedArtwork.title} by ${selectedArtwork.artist}`} className="h-full max-h-[80vh] w-full object-cover" />
              <div className="space-y-6 p-6 md:p-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-napsta-gold">{selectedArtwork.artist}</p>
                  <h3 className="mt-3 font-serif text-5xl leading-none tracking-[-0.04em]">{selectedArtwork.title}</h3>
                </div>
                <div className="space-y-3 text-sm text-napsta-ivory/80">
                  <p><span className="text-napsta-gold">Year:</span> {selectedArtwork.year}</p>
                  <p><span className="text-napsta-gold">Medium:</span> {selectedArtwork.medium}</p>
                  <p><span className="text-napsta-gold">Dimensions:</span> {selectedArtwork.dimensions}</p>
                  <p><span className="text-napsta-gold">Availability:</span> {selectedArtwork.availability}</p>
                </div>
                <p className="text-base leading-relaxed text-napsta-ivory/80">{selectedArtwork.description}</p>
                <Link to="/enquiry" onClick={() => setSelectedArtwork(null)} className="inline-flex items-center gap-3 border border-napsta-gold bg-napsta-gold px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-napsta-black">
                  ENQUIRE ABOUT THIS WORK <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Home
