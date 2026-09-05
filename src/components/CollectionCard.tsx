import { ArrowUpRight } from 'lucide-react'
import type { Artwork } from '../data/artworks'

type CollectionCardProps = {
  artwork: Artwork
  onSelect: (artwork: Artwork) => void
}

export function CollectionCard({ artwork, onSelect }: CollectionCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(artwork)}
      className="group block w-full overflow-hidden border border-white/10 bg-napsta-charcoal text-left transition-colors hover:border-napsta-gold/60"
      aria-label={`View artwork ${artwork.title} by ${artwork.artist}`}
    >
      <div className="overflow-hidden">
        <img
          src={artwork.image}
          alt={`${artwork.title} by ${artwork.artist}`}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3 text-[9px] uppercase tracking-[0.28em] text-napsta-muted">
          <span>{artwork.artist}</span>
          <span>{artwork.year}</span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] text-napsta-ivory">{artwork.title}</h3>
            <p className="mt-2 text-sm text-napsta-muted">{artwork.medium}</p>
          </div>
          <span className="mt-1 inline-flex items-center justify-center text-napsta-gold">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="pt-2 text-[9px] uppercase tracking-[0.26em] text-napsta-gold">{artwork.status}</div>
      </div>
    </button>
  )
}
