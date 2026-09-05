import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Concierge', to: '/concierge' },
  { label: 'Art', to: '/art' },
  { label: 'Connections', to: '/connections' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'About', to: '/about' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-napsta-black/85 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-[2px]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex items-start gap-4">
          <NavLink to="/" className="block" aria-label="Napsta home">
            <div className="font-serif text-2xl tracking-[0.28em] text-napsta-ivory md:text-[2rem]">NAPSTA</div>
            <div className="mt-1 text-[7px] tracking-[0.28em] text-napsta-muted md:text-[9px]">
              PEOPLE • ART • CULTURE • ACCESS
            </div>
          </NavLink>
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.24em] transition-colors hover:text-napsta-gold ${
                  isActive ? 'text-napsta-gold' : 'text-napsta-ivory/80'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <NavLink
            to="/enquiry"
            className="inline-flex items-center justify-center border border-napsta-gold/70 bg-transparent px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-napsta-ivory transition-colors hover:bg-napsta-gold/10"
          >
            Private Enquiry
          </NavLink>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="inline-flex items-center justify-center rounded-none border border-napsta-line p-2 text-napsta-ivory lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-napsta-black/95 px-5 pt-28 lg:hidden"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              aria-label="Mobile navigation"
              className="space-y-5"
            >
              {navItems.map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-white/10 pb-3 text-2xl font-medium text-napsta-ivory ${
                      isActive ? 'text-napsta-gold' : ''
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <NavLink
                to="/enquiry"
                onClick={() => setMenuOpen(false)}
                className="mt-6 inline-flex items-center gap-3 border border-napsta-gold/80 px-5 py-3 text-sm uppercase tracking-[0.28em] text-napsta-ivory"
              >
                Private Enquiry <ArrowRight size={16} />
              </NavLink>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
