import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGet, serverGetBySlug } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Experience } from '../../../../lib/types'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const experience = await serverGetBySlug<Experience>('experiences', slug)
  return { title: experience ? `${experience.title} at ${experience.company}` : 'Experience' }
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const experience = await serverGetBySlug<Experience>('experiences', slug)
  if (!experience) notFound()

  const related = (await serverGet<Experience[]>('/experiences').catch(() => []))
    .filter((item) => item.slug !== experience.slug)
    .slice(0, 3)
  const period = `${experience.startDate}${experience.current ? ' — Present' : experience.endDate ? ` — ${experience.endDate}` : ''}`

  return (
    <article className="container-x detail-page detail-narrow">
      <Link href="/experiences" className="detail-back">← All experience</Link>
      <header className="detail-hero detail-experience-hero">
        {experience.companyLogo ? <img className="detail-company-logo" src={experience.companyLogo} alt={`${experience.company} logo`} /> : <div className="detail-company-logo detail-company-initial" aria-hidden>{experience.company.slice(0, 1)}</div>}
        <div className="detail-copy">
          <span className="detail-kicker">{experience.type} experience</span>
          <h1 className="detail-title">{experience.title}</h1>
          <p className="detail-lead">{experience.companyUrl
            ? <a href={experience.companyUrl} target="_blank" rel="noreferrer">{experience.company} ↗</a>
            : experience.company}
            {experience.location && <> <span aria-hidden>·</span> {experience.location}</>}
          </p>
          <div className="detail-tags"><Badge>{period}</Badge>{experience.type && <Badge>{experience.type}</Badge>}</div>
        </div>
      </header>

      {(experience.summary || experience.description) && (
        <section className="detail-section">
          <h2 className="detail-section-title">Role overview</h2>
          {experience.summary && <p className="detail-lead detail-summary">{experience.summary}</p>}
          {experience.description && <p className="detail-prose">{experience.description}</p>}
        </section>
      )}

      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-section-title">Responsibilities</h2>
          <ul className="detail-bullet-list">{experience.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      )}

      {experience.achievements && experience.achievements.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-section-title">Key achievements</h2>
          <ul className="detail-feature-grid">{experience.achievements.map((item) => <li className="detail-feature" key={item}><span>↗</span>{item}</li>)}</ul>
        </section>
      )}

      {experience.techStack && experience.techStack.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-section-title">Tools & technologies</h2>
          <div className="detail-tags">{experience.techStack.map((tool) => <Badge key={tool}>{tool}</Badge>)}</div>
        </section>
      )}

      {related.length > 0 && (
        <section className="detail-section detail-related">
          <h2 className="detail-section-title">Experience timeline</h2>
          <div className="detail-related-grid">{related.map((item) => <Link href={`/experiences/${item.slug}`} className="card detail-related-card" key={item._id}>
            <div><p className="detail-related-eyebrow">{item.company} · {item.startDate}{item.endDate ? ` — ${item.endDate}` : item.current ? ' — Present' : ''}</p><h3>{item.title}</h3><p>{item.summary || item.location || item.type}</p><span>View role →</span></div>
          </Link>)}</div>
        </section>
      )}
    </article>
  )
}
