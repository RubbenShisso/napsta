import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const timeline = [
  'Entertainment',
  'Comedy',
  'Advertising',
  'Entrepreneurship',
  'Culture',
  'Events',
  'Art',
  'Connections',
]

function About() {
  useDocumentTitle('About | NAPSTA')

  return (
    <>
      <Header />
      <main className="bg-napsta-cream pt-28 text-napsta-black">
        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="border border-napsta-line/80 bg-napsta-ivory p-6 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-bronze">Napsta</p>
            <h1 className="mt-6 font-serif text-5xl leading-[0.82] tracking-[-0.05em] md:text-7xl lg:text-[8rem]">
              BUILT ON
              <br />
              RELATIONSHIPS.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-napsta-brown/80 md:text-lg">
              Napoleon Masinga brings together creative direction, cultural perspective and a deeply human network of access, hospitality and meaningful connection.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 border border-napsta-line/80 bg-napsta-ivory p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-bronze">Introduction</p>
              <h2 className="font-serif text-5xl leading-[0.9] tracking-[-0.05em] md:text-[5rem]">
                CREATIVE.<br />
                CURATOR.<br />
                CONNECTOR.
              </h2>
              <p className="text-base leading-relaxed text-napsta-brown/80 md:text-lg">
                Through a multidisciplinary path spanning entertainment, comedy, advertising, entrepreneurship, culture, events and art, Napoleon has developed a network oriented around people, trust and thoughtful experience.
              </p>
              <p className="text-base leading-relaxed text-napsta-brown/80 md:text-lg">
                The work is shaped by an understanding that the strongest opportunities emerge when cultural context, personal relationships and intentional access meet.
              </p>
            </div>

            <div className="overflow-hidden border border-napsta-line/80 bg-napsta-charcoal">
              <img src="/images/napsta-about.jpg" alt="Napsta portrait" className="h-full min-h-[420px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="border border-napsta-line/80 bg-napsta-cream p-6 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-bronze">Timeline</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {timeline.map((item, index) => (
                <div key={item} className="border-t border-napsta-line/70 pt-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-napsta-bronze">{String(index + 1).padStart(2, '0')}</p>
                  <p className="mt-4 font-serif text-3xl leading-none tracking-[-0.04em]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] uppercase tracking-[0.32em] text-napsta-bronze">[Add verified career milestone]</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 border border-napsta-line/80 bg-napsta-charcoal p-6 text-napsta-ivory md:flex-row md:items-center md:justify-between md:p-8">
            <p className="font-serif text-4xl leading-none tracking-[-0.04em] md:text-6xl">PEOPLE ARE THE COMMON THREAD.</p>
            <Link to="/enquiry" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-napsta-ivory hover:text-napsta-gold">
              LET’S CONNECT <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About
