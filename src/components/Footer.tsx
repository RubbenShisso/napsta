import { ArrowUpRight, Briefcase, Camera, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-napsta-black text-napsta-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-serif text-3xl tracking-[0.22em] md:text-4xl">NAPSTA</div>
            <div className="mt-2 text-[9px] uppercase tracking-[0.32em] text-napsta-muted">
              PEOPLE • ART • CULTURE • ACCESS
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-napsta-ivory/90 md:gap-8">
            {[['Instagram', 'https://instagram.com'], ['LinkedIn', 'https://linkedin.com'], ['YouTube', 'https://youtube.com'], ['Contact', '/enquiry']].map(([label, href]) => (
              <a
                key={label}
                href={href.startsWith('http') ? href : undefined}
                onClick={href.startsWith('/') ? undefined : undefined}
                className="inline-flex items-center gap-2 transition-colors hover:text-napsta-gold"
              >
                {label}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[10px] uppercase tracking-[0.28em] text-napsta-muted md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <span>A MORE CONNECTED TOMORROW.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-napsta-gold">
              Privacy
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-napsta-gold">
              Terms
            </Link>
            <div className="flex items-center gap-3 text-napsta-ivory/90">
              <Camera size={14} />
              <Briefcase size={14} />
              <Play size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
