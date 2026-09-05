import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PrivateEnquiryCTA() {
  return (
    <section className="bg-napsta-black">
      <div className="mx-auto grid max-w-[1400px] gap-0 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-12 lg:py-16">
        <div className="relative min-h-[350px] overflow-hidden border border-white/10">
          <img src="/images/city.svg" alt="African city landscape at sunset" className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center border border-t border-white/10 bg-napsta-cream px-6 py-8 text-napsta-black sm:px-8 lg:border-l-0 lg:border-t lg:px-10">
          <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-bronze">PRIVATE ENQUIRIES</p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.9] tracking-[-0.05em] md:text-6xl">
            Let’s Create
            <br />
            What’s Next.
          </h2>
          <p className="mt-5 max-w-md text-base text-napsta-brown/80">
            All conversations are treated in confidence.
          </p>
          <Link
            to="/enquiry"
            className="mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-napsta-black transition-colors hover:text-napsta-bronze"
          >
            MAKE A PRIVATE ENQUIRY <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative flex items-end justify-end border border-t border-white/10 bg-napsta-black p-6 lg:col-span-2 lg:border-t lg:border-l lg:min-h-[260px]">
          <div className="absolute inset-y-0 left-0 hidden w-[38%] bg-[radial-gradient(circle_at_top_left,_rgba(185,150,100,0.22),transparent_35%)] lg:block" />
          <div className="relative overflow-hidden border border-white/10 bg-napsta-charcoal/50 p-6 lg:max-w-[27%]">
            <img src="/images/sculpture.svg" alt="Art object and sculpture" className="h-48 w-full object-cover" />
          </div>
          <p className="absolute bottom-7 right-5 text-right text-[10px] uppercase tracking-[0.34em] text-napsta-gold lg:right-7">
            GOOD<br />
            IDEAS.<br />
            BETTER<br />
            PEOPLE.
          </p>
        </div>
      </div>
    </section>
  )
}
