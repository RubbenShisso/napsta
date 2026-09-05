import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function FounderSection() {
  return (
    <section className="bg-napsta-cream text-napsta-black">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_1.05fr_0.9fr] lg:px-12 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.36em] text-napsta-bronze">
            NAPOLEON “NAPSTA” MASINGA
          </p>
          <h2 className="font-serif text-5xl leading-[0.9] tracking-[-0.05em] md:text-6xl lg:text-[5.2rem]">
            CREATIVE.<br />
            CURATOR.<br />
            CONNECTOR.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-napsta-brown/80 md:text-lg">
            For more than a decade, Napoleon “Napsta” Masinga has worked across entertainment,
            advertising, culture and entrepreneurship. Today, those worlds converge through a
            network built around people, creativity and meaningful experiences.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-napsta-black transition-colors hover:text-napsta-bronze"
          >
            READ MY STORY <ArrowRight size={16} />
          </Link>
        </div>

        <div className="overflow-hidden border border-napsta-line/80 bg-napsta-ivory">
          <img
            src="/images/napsta-about.svg"
            alt="Napsta portrait"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>

        <aside className="flex flex-col justify-between bg-napsta-charcoal p-6 text-napsta-ivory md:p-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-napsta-gold">Quote</p>
            <blockquote className="mt-6 font-serif text-4xl leading-[0.9] tracking-[-0.04em] italic text-napsta-ivory md:text-[3.5rem]">
              “It’s never just an event.
              <br />
              It’s always about the people.”
            </blockquote>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-napsta-muted">— NAPSTA</p>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5">
            <img src="/images/city.svg" alt="African city landscape" className="h-36 w-full object-cover" />
            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-napsta-gold">
              DIFFERENT PEOPLE.<br />
              BRIGHTER ROOMS.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
