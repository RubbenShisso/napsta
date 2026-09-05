import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const enquiryOptions = [
  'Private Concierge',
  'Art Acquisition',
  'Art Sale / Representation',
  'Private Introduction',
  'Experiences & Events',
  'Brand Partnership',
  'Other',
]

function Enquiry() {
  useDocumentTitle('Private Enquiry | NAPSTA')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    nature: 'Private Concierge',
    message: '',
    consent: false,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target

    if (type === 'checkbox') {
      const target = event.target as HTMLInputElement
      setForm((current) => ({ ...current, [name]: target.checked }))
      return
    }

    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const trimmedName = form.fullName.trim()
    const trimmedEmail = form.email.trim()
    const trimmedMessage = form.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage || !form.consent) {
      return
    }

    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      return
    }

    if (trimmedMessage.length < 20) {
      return
    }

    const payload = {
      fullName: trimmedName,
      email: trimmedEmail,
      phone: form.phone.trim(),
      city: form.city.trim(),
      nature: form.nature,
      message: trimmedMessage,
      consent: form.consent,
      source: 'website',
    }

    console.info('Safe mock submission:', payload)
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="bg-napsta-black pt-28 text-napsta-ivory">
        <section className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8 lg:px-12">
          <div className="grid gap-6 border border-white/10 bg-napsta-charcoal p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between border border-white/10 bg-napsta-cream p-6 text-napsta-black">
              <div>
                <p className="text-[10px] uppercase tracking-[0.34em] text-napsta-bronze">Private Enquiry</p>
                <h1 className="mt-6 font-serif text-5xl leading-[0.82] tracking-[-0.05em] md:text-6xl">Private Enquiry</h1>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-napsta-brown/80">
                  Tell us how we may assist. Every enquiry is treated with discretion.
                </p>
              </div>
              <div className="mt-8">
                <img src="/images/sculpture.svg" alt="Luxury interior sculpture" className="h-52 w-full object-cover" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 bg-napsta-black p-4 sm:p-6">
              {submitted ? (
                <div className="space-y-4 border border-napsta-gold/60 bg-napsta-black p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-napsta-gold">Thank you.</p>
                  <h2 className="font-serif text-4xl leading-none tracking-[-0.04em] text-napsta-ivory">Your enquiry has been received and will be reviewed privately.</h2>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block space-y-2 text-[10px] uppercase tracking-[0.24em] text-napsta-muted">
                      Full Name
                      <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full border border-white/10 bg-transparent px-3 py-3 text-sm uppercase tracking-[0.1em] text-napsta-ivory" required />
                    </label>
                    <label className="block space-y-2 text-[10px] uppercase tracking-[0.24em] text-napsta-muted">
                      Email
                      <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-white/10 bg-transparent px-3 py-3 text-sm uppercase tracking-[0.1em] text-napsta-ivory" required />
                    </label>
                    <label className="block space-y-2 text-[10px] uppercase tracking-[0.24em] text-napsta-muted">
                      Phone / WhatsApp
                      <input name="phone" value={form.phone} onChange={handleChange} className="w-full border border-white/10 bg-transparent px-3 py-3 text-sm uppercase tracking-[0.1em] text-napsta-ivory" />
                    </label>
                    <label className="block space-y-2 text-[10px] uppercase tracking-[0.24em] text-napsta-muted">
                      City / Country
                      <input name="city" value={form.city} onChange={handleChange} className="w-full border border-white/10 bg-transparent px-3 py-3 text-sm uppercase tracking-[0.1em] text-napsta-ivory" />
                    </label>
                  </div>

                  <label className="block space-y-2 text-[10px] uppercase tracking-[0.24em] text-napsta-muted">
                    Nature of Enquiry
                    <select name="nature" value={form.nature} onChange={handleChange} className="w-full border border-white/10 bg-transparent px-3 py-3 text-sm uppercase tracking-[0.1em] text-napsta-ivory">
                      {enquiryOptions.map((option) => (
                        <option key={option} value={option} className="bg-napsta-black text-napsta-ivory">{option}</option>
                      ))}
                    </select>
                  </label>

                  <label className="block space-y-2 text-[10px] uppercase tracking-[0.24em] text-napsta-muted">
                    Tell us briefly how we may assist.
                    <textarea name="message" value={form.message} onChange={handleChange} minLength={20} className="min-h-32 w-full border border-white/10 bg-transparent px-3 py-3 text-sm text-napsta-ivory" required />
                  </label>

                  <label className="flex items-start gap-3 text-sm text-napsta-ivory/80">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-1 h-4 w-4 accent-napsta-gold" required />
                    <span>I understand my enquiry will be reviewed before any engagement is confirmed.</span>
                  </label>

                  <button type="submit" className="inline-flex items-center justify-center border border-napsta-gold bg-napsta-gold px-6 py-3 text-[10px] uppercase tracking-[0.28em] text-napsta-black">
                    SUBMIT PRIVATE ENQUIRY
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Enquiry
