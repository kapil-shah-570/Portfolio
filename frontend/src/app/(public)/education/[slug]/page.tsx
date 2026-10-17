import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGet, serverGetBySlug } from '../../../../lib/api'
import type { EducationEntry } from '../../../../lib/types'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = await serverGetBySlug<EducationEntry & { slug: string }>('educations', slug)
  return { title: entry ? `${entry.degree} — Education` : 'Education' }
}

export default async function EducationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = await serverGetBySlug<EducationEntry & { slug: string }>('educations', slug)
  if (!entry) notFound()

  const related = (await serverGet<EducationEntry[]>('/educations').catch(() => []))
    .filter((item) => item.slug !== entry.slug)
    .slice(0, 3)

  return (
    <article className="container-x detail-page detail-narrow">
      <Link href="/education" className="detail-back">← All education</Link>
      <header className="detail-hero detail-education-hero">
        {entry.logo ? <img className="detail-company-logo" src={entry.logo} alt={`${entry.institution} logo`} /> : <div className="detail-company-logo detail-company-initial" aria-hidden>{entry.institution.slice(0, 1)}</div>}
        <div className="detail-copy">
          <span className="detail-kicker">Education & learning</span>
          <h1 className="detail-title">{entry.degree}</h1>
          <p className="detail-lead">{entry.institution}{entry.location && <> <span aria-hidden>·</span> {entry.location}</>}</p>
          <div className="detail-tags"><span className="badge">{entry.startDate}{entry.endDate ? ` — ${entry.endDate}` : ' — Present'}</span></div>
        </div>
      </header>

      {entry.description && (
        <section className="detail-section">
          <h2 className="detail-section-title">About this education</h2>
          <p className="detail-prose">{entry.description}</p>
        </section>
      )}

      {related.length > 0 && (
        <section className="detail-section detail-related">
          <h2 className="detail-section-title">More education</h2>
          <div className="detail-related-grid">{related.filter((item) => item.slug).map((item) => <Link href={`/education/${item.slug}`} className="card detail-related-card" key={item._id ?? item.slug}>
            <div><p className="detail-related-eyebrow">{item.institution} · {item.startDate}{item.endDate ? ` — ${item.endDate}` : ''}</p><h3>{item.degree}</h3><span>View education →</span></div>
          </Link>)}</div>
        </section>
      )}
    </article>
  )
}
