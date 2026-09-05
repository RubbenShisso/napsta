import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Privacy() {
  useDocumentTitle('Privacy | NAPSTA')

  return (
    <>
      <Header />
      <main className="bg-napsta-black pt-28 text-napsta-ivory">
        <section className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8 lg:px-12">
          <div className="space-y-6 border border-white/10 bg-napsta-charcoal p-6 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-gold">Privacy</p>
            <h1 className="font-serif text-5xl leading-[0.82] tracking-[-0.05em] md:text-7xl">Privacy & Terms</h1>
            <p className="max-w-3xl text-base leading-relaxed text-napsta-ivory/80">
              NAPSTA treats all enquiries with discretion. Information provided through the site may be used only to assess and respond to requests made by the submitter.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-napsta-ivory/80">
              This placeholder policy may be expanded with final legal language before launch. Any personal data is handled with care and kept confidential to the extent appropriate for the purpose of the enquiry.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Privacy
