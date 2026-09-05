type SectionHeaderProps = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'left', dark = true }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p
        className={`mb-4 text-[10px] font-medium uppercase tracking-[0.35em] ${
          dark ? 'text-napsta-gold' : 'text-napsta-bronze'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif leading-[0.85] tracking-[-0.04em] ${
          dark ? 'text-napsta-ivory' : 'text-napsta-black'
        } ${align === 'center' ? 'text-5xl md:text-7xl' : 'text-5xl md:text-7xl lg:text-[5rem]'}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-base md:text-lg ${dark ? 'text-napsta-muted' : 'text-napsta-brown/80'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
