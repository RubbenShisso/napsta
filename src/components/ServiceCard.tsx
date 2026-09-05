import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type ServiceCardProps = {
  number: string
  title: string
  tagline: string
  items: readonly string[]
  image: string
  href: string
}

export function ServiceCard({ number, title, tagline, items, image, href }: ServiceCardProps) {
  return (
    <article className="group relative min-h-[500px] overflow-hidden border border-white/10 bg-napsta-charcoal">
      <div className="absolute inset-0 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,9,0.15),rgba(10,10,9,0.7)_70%,rgba(10,10,9,0.82))]" />
      </div>

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center justify-between text-napsta-ivory">
          <span className="text-[14px] font-medium tracking-[-0.04em]">{number}</span>
          <Link to={href} aria-label={`View ${title}`} className="flex h-9 w-9 items-center justify-center border border-white/20 bg-white/5 transition-transform group-hover:translate-x-1">
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="space-y-5">
          <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] text-napsta-ivory sm:text-[2.8rem]">{title}</h3>
          <p className="text-sm italic text-napsta-ivory/80">{tagline}</p>
          <ul className="space-y-2 text-sm text-napsta-ivory/80">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to={href} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-napsta-gold transition-colors hover:text-napsta-ivory">
            Discover <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}
