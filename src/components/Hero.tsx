import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden bg-napsta-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(185,150,100,0.18),transparent_40%)]" />
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(10,10,9,1)_0%,rgba(10,10,9,0.8)_18%,rgba(10,10,9,0.2)_100%)]" />
        <img
          src="/images/napsta-hero.svg"
          alt="Napsta in a black suit with sunglasses in a luxurious gallery setting"
          className="h-full w-full object-cover opacity-85"
        />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-[1400px] items-end px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pb-12">
        <div className="max-w-[42rem] pb-6 lg:pb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-napsta-gold"
          >
            AFRICA • GLOBAL • OPPORTUNITY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
            className="font-serif text-[4.1rem] leading-[0.8] tracking-[-0.05em] text-napsta-ivory sm:text-[5rem] lg:text-[8rem]"
          >
            <span className="block text-napsta-gold">CULTURE</span>
            <span className="block text-napsta-ivory">CREATES</span>
            <span className="block text-napsta-ivory">CONNECTIONS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-napsta-ivory/80 md:text-lg"
          >
            Private concierge. Curated African art. Exceptional experiences. Meaningful introductions.
            A world of access, built on relationships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/art"
              className="inline-flex items-center justify-center gap-3 border border-napsta-gold bg-napsta-gold px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-napsta-black transition-opacity hover:opacity-90"
            >
              EXPLORE OUR WORLD <ArrowRight size={16} />
            </Link>
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center border border-napsta-line bg-transparent px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-napsta-ivory transition-colors hover:border-napsta-gold hover:text-napsta-gold"
            >
              PRIVATE ENQUIRY
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.32 }}
            className="mt-10 text-[9px] uppercase tracking-[0.3em] text-napsta-muted"
          >
            PEOPLE • ART • CULTURE • ACCESS
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-5 top-32 hidden max-w-[16rem] text-right font-serif italic text-[2.6rem] leading-[0.8] text-napsta-crea m md:block lg:right-16 lg:top-28">
        <div className="text-napsta-ivory/90">Good</div>
        <div className="text-napsta-ivory/90">People</div>
        <div className="text-napsta-ivory/90">Brighter</div>
        <div className="text-napsta-ivory/90">Rooms.</div>
        <div className="mt-3 text-right text-[0.75rem] uppercase tracking-[0.22em] text-napsta-muted">— Napsta</div>
      </div>
    </section>
  )
}
