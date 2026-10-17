'use client'
import { useEffect, useState } from 'react'
import { api } from '../../../lib/api'
import { PageHeader } from '../../../components/ui'
import type { Contact } from '../../../lib/types'

export default function ContactPage() {
  const [contact, setContact] = useState<Contact | null>(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')
  const [submissionError, setSubmissionError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    api.get<Contact>('/contact').then(setContact).catch(() => {})
  }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSubmissionError('')
    try {
      const result = await api.post<{ message: string; emailNotification: string }>('/messages', form)
      setForm({ name: '', email: '', subject: '', message: '' })
      setSent(true)
      setSubmissionMessage(result.emailNotification === 'sent'
        ? 'Message sent. I’ll get back to you soon.'
        : result.emailNotification === 'not_configured'
          ? 'Your message was saved. Email notifications are not configured yet.'
          : 'Your message was saved, but the email notification could not be delivered.')
      setTimeout(() => setSent(false), 4000)
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={contact?.heading || 'Get in touch'}
        subtitle={contact?.subheading || 'I usually reply within 24 hours.'}
      />

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <form className="panel" onSubmit={submit}>
            <div className="mb-4">
              <label className="label">Name</label>
              <input required className="input" value={form.name} onChange={set('name')} />
            </div>
            <div className="mb-4">
              <label className="label">Email</label>
              <input required type="email" className="input" value={form.email} onChange={set('email')} />
            </div>
            <div className="mb-4">
              <label className="label">Subject</label>
              <input className="input" value={form.subject} onChange={set('subject')} />
            </div>
            <div className="mb-4">
              <label className="label">Message</label>
              <textarea required rows={5} className="input" value={form.message} onChange={set('message')} />
            </div>
            <button disabled={loading} className="btn btn-primary w-full">
              {loading ? 'Sending…' : 'Send message'}
            </button>
            {sent && <p role="status" className="mt-3 text-sm text-emerald-400">{submissionMessage}</p>}
            {submissionError && <p role="alert" className="mt-3 text-sm text-red-400">{submissionError}</p>}
          </form>

          <div className="space-y-6">
            <div className="panel">
              <h4 className="mb-4 font-semibold">Direct contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                {contact?.email && <li><span className="block text-xs text-slate-500">Email</span>{contact.email}</li>}
                {contact?.phone && <li><span className="block text-xs text-slate-500">Phone</span>{contact.phone}</li>}
                {contact?.address && <li><span className="block text-xs text-slate-500">Address</span>{contact.address}</li>}
                {contact?.officeHours && <li><span className="block text-xs text-slate-500">Hours</span>{contact.officeHours}</li>}
              </ul>
              {(contact?.socials?.length ?? 0) > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {contact?.socials?.map((s) => (
                    <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-1 text-xs text-slate-400 hover:border-accent hover:text-white">
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {contact?.mapEmbed && (
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe src={contact.mapEmbed} className="h-64 w-full" loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}