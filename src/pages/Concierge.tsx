import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const conciergeServices = [
  {
    title: 'Travel & Hospitality',
    copy: 'Private itineraries, discreet check-in support and seamless global coordination.',
    image: '/images/concierge.svg',
  },
  {
    title: 'Private Reservations',
    copy: 'Restaurant tables, villas, suites, cultural access and destination planning.',
    image: '/images/art.svg',
  },
  {
    title: 'Lifestyle Support',
    copy: 'From wardrobe coordination to day-to-day logistics, comfort remains the priority.',
    image: '/images/experiences.svg',
  },
  {
    title: 'Personal Sourcing',
    copy: 'Discreet access to exceptional goods, experiences and tailored recommendations.',
    image: '/images/sculpture.svg',
  },
]

function Concierge() {
  useDocumentTitle('Private Concierge | NAPSTA')

  return (
    <>
      <Header />
      <main className="bg-napsta-black pt-28 text-napsta-ivory">
        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(17,17,16,1),rgba(30,27,23,0.7))] p-6 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-gold">Private Concierge</p>
            <h1 className="mt-6 font-serif text-5xl leading-[0.82] tracking-[-0.05em] md:text-7xl lg:text-[8rem]">
              CONSIDER IT
              <br />
              HANDLED.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-napsta-ivory/80 md:text-lg">
              From everyday arrangements to extraordinary requests, our concierge service is built around access, trust and attention to detail.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] space-y-5 px-5 pb-12 sm:px-8 lg:px-12">
          {conciergeServices.map((item, index) => (
            <article key={item.title} className="grid overflow-hidden border border-white/10 bg-napsta-charcoal md:grid-cols-[1.1fr_0.9fr]">
              <div className={index % 2 === 1 ? 'order-2' : 'order-1'}>
                <img src={item.image} alt={item.title} className="h-full min-h-[260px] w-full object-cover" />
              </div>
              <div className={`${index % 2 === 1 ? 'order-1' : 'order-2'} flex flex-col justify-center p-6 md:p-10`}>
                <p className="text-[10px] uppercase tracking-[0.28em] text-napsta-gold">{item.title}</p>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-napsta-ivory/75">{item.copy}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-napsta-cream p-6 text-napsta-black md:flex-row md:items-center md:p-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-napsta-bronze">Private Requests</p>
              <h2 className="mt-3 font-serif text-5xl leading-none tracking-[-0.05em] md:text-6xl">Let’s make it effortless.</h2>
            </div>
            <Link to="/enquiry" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-napsta-black hover:text-napsta-bronze">
              MAKE A PRIVATE REQUEST <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Concierge
