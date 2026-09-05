import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const connectionGroups = [
  'Business & Entrepreneurs',
  'Culture & Creatives',
  'Collectors & Artists',
  'Brands & Partnerships',
  'Private Networks',
]

function Connections() {
  useDocumentTitle('Connections | NAPSTA')

  return (
    <>
      <Header />
      <main className="bg-napsta-black pt-28 text-napsta-ivory">
        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(17,17,16,1),rgba(32,29,26,0.8))] p-6 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-gold">Connections</p>
            <h1 className="mt-6 font-serif text-5xl leading-[0.82] tracking-[-0.05em] md:text-7xl lg:text-[8rem]">
              THE RIGHT PEOPLE.<br />
              THE RIGHT ROOM.
            </h1>
            <p className="mt-6 max-w-3xl text-base text-napsta-ivory/80 md:text-lg">
              Meaningful opportunities often begin with a trusted introduction. We facilitate selective introductions through a network spanning culture, business, art, entertainment and entrepreneurship.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {connectionGroups.map((group) => (
              <article key={group} className="min-h-[260px] border border-white/10 bg-napsta-charcoal p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-napsta-gold">{group}</p>
                <div className="mt-16 h-px w-12 bg-napsta-gold/60" />
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-12">
          <div className="border border-white/10 bg-napsta-cream p-6 text-napsta-black md:p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-napsta-bronze">Disclaimer</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-napsta-brown/85 md:text-lg">
              Every introduction is considered individually and is subject to mutual interest and consent. We do not guarantee access to celebrities or high-profile individuals.
            </p>
            <Link to="/enquiry" className="mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-napsta-black hover:text-napsta-bronze">
              START A CONVERSATION <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Connections
