import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const experienceItems = [
  'Private dinners',
  'Art experiences',
  'Cultural gatherings',
  'Brand activations',
  'Curated networking',
  'VIP hospitality',
  'Invitation-only events',
]

function Experiences() {
  useDocumentTitle('Experiences | NAPSTA')

  return (
    <>
      <Header />
      <main className="bg-napsta-black pt-28 text-napsta-ivory">
        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(17,17,16,1),rgba(31,24,19,0.82))] p-6 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-gold">Experiences</p>
            <h1 className="mt-6 font-serif text-5xl leading-[0.82] tracking-[-0.05em] md:text-7xl lg:text-[8rem]">
              MORE THAN
              <br />
              AN INVITATION.
            </h1>
            <div className="mt-8 grid gap-3 text-base text-napsta-ivory/80 md:grid-cols-2 lg:grid-cols-3">
              {experienceItems.map((item) => (
                <div key={item} className="border border-white/10 bg-black/20 px-4 py-3">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="grid gap-6 border border-white/10 bg-napsta-charcoal p-5 md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <div className="space-y-5">
              <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-gold">Featured case study</p>
              <h2 className="font-serif text-5xl leading-none tracking-[-0.04em] text-napsta-ivory">THE ART OF FOOD</h2>
              <p className="max-w-xl text-base leading-relaxed text-napsta-ivory/80">
                The Art of Food brings together art, cuisine, culture and conversation in an intimate environment designed around people.
              </p>
              <Link to="/enquiry" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-napsta-gold hover:text-napsta-ivory">
                EXPLORE EXPERIENCE <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <img src="/images/experiences.svg" alt="Dinner table experience" className="h-40 w-full object-cover" />
              <img src="/images/art.svg" alt="Art installation" className="h-40 w-full object-cover" />
              <img src="/images/napsta-about.svg" alt="Artist portrait" className="h-40 w-full object-cover" />
              <img src="/images/connections.svg" alt="Guests in conversation" className="h-40 w-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Experiences
