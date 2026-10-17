import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGet, serverGetBySlug } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Skill } from '../../../../lib/types'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const skill = await serverGetBySlug<Skill>('skills', slug)
  return { title: skill ? `${skill.name} — Skills` : 'Skill' }
}

export default async function SkillDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const skill = await serverGetBySlug<Skill>('skills', slug)
  if (!skill) notFound()

  const related = (await serverGet<Skill[]>('/skills').catch(() => []))
    .filter((item) => item.category === skill.category && item.slug !== skill.slug)
    .slice(0, 3)

  return (
    <article className="container-x detail-page detail-narrow">
      <Link href="/skills" className="detail-back">← All skills</Link>
      <header className="detail-hero detail-skill-hero">
        <div className="detail-skill-icon" aria-hidden>{skill.icon || skill.name.slice(0, 1)}</div>
        <div className="detail-copy">
          <span className="detail-kicker">{skill.category}</span>
          <h1 className="detail-title">{skill.name}</h1>
          {skill.summary && <p className="detail-lead">{skill.summary}</p>}
          {skill.yearsOfExperience != null && <p className="detail-secondary">{skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'} of experience</p>}
        </div>
      </header>

      <section className="detail-meter" aria-label={`Proficiency ${skill.level} percent`}>
        <div className="detail-meter-heading"><span>Proficiency</span><strong>{skill.level}%</strong></div>
        <div className="detail-meter-track"><span style={{ width: `${Math.min(100, Math.max(0, skill.level))}%` }} /></div>
      </section>

      {skill.description && (
        <section className="detail-section">
          <h2 className="detail-section-title">About this skill</h2>
          <p className="detail-prose">{skill.description}</p>
        </section>
      )}

      {skill.highlights && skill.highlights.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-section-title">Areas of experience</h2>
          <ul className="detail-feature-grid">{skill.highlights.map((item) => <li className="detail-feature" key={item}><span>✓</span>{item}</li>)}</ul>
        </section>
      )}

      {skill.tools && skill.tools.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-section-title">Tools & technologies</h2>
          <div className="detail-tags">{skill.tools.map((tool) => <Badge key={tool}>{tool}</Badge>)}</div>
        </section>
      )}

      {related.length > 0 && (
        <section className="detail-section detail-related">
          <h2 className="detail-section-title">More {skill.category} skills</h2>
          <div className="detail-related-grid">{related.map((item) => <Link href={`/skills/${item.slug}`} className="card detail-related-card detail-related-skill" key={item._id}>
            <div className="detail-skill-icon small" aria-hidden>{item.icon || item.name.slice(0, 1)}</div><div><h3>{item.name}</h3><p>{item.summary || `${item.level}% proficiency`}</p><span>View skill →</span></div>
          </Link>)}</div>
        </section>
      )}
    </article>
  )
}
