import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGet, serverGetBySlug } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Project } from '../../../../lib/types'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await serverGetBySlug<Project>('projects', slug)
  return { title: project ? `${project.title} — Projects` : 'Project' }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await serverGetBySlug<Project>('projects', slug)
  if (!project) notFound()

  const related = (await serverGet<Project[]>('/projects').catch(() => []))
    .filter((item) => item.slug !== project.slug && item.tags?.some((tag) => project.tags?.includes(tag)))
    .slice(0, 3)
  const facts = [
    ['Client', project.client],
    ['My role', project.role],
    ['Duration', project.duration],
    ['Completed', project.completedAt],
  ].filter((fact): fact is [string, string] => Boolean(fact[1]))

  return (
    <article className="container-x detail-page">
      <Link href="/projects" className="detail-back">← All projects</Link>
      <header className="detail-hero">
        <div className="detail-copy">
          <span className="detail-kicker">{project.featured ? 'Featured project' : 'Selected project'}</span>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-lead">{project.description}</p>
          {project.tags && project.tags.length > 0 && (
            <div className="detail-tags">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
          )}
          <div className="detail-actions">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">View live project ↗</a>}
            {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">View source code ↗</a>}
          </div>
        </div>
      </header>

      {project.image && <img src={project.image} alt={`${project.title} project preview`} className="detail-cover" />}

      {facts.length > 0 && (
        <dl className="detail-facts">
          {facts.map(([label, value]) => <div className="detail-fact" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      )}

      {project.longDescription && (
        <section className="detail-section">
          <h2 className="detail-section-title">Project overview</h2>
          <p className="detail-prose">{project.longDescription}</p>
        </section>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-section-title">Built with</h2>
          <div className="detail-tags">{project.techStack.map((tool) => <Badge key={tool}>{tool}</Badge>)}</div>
        </section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-section-title">Project gallery</h2>
          <div className="detail-gallery">{project.gallery.map((image, index) => <figure className="detail-gallery-item" key={`${image}-${index}`}><img src={image} alt={`${project.title} gallery image ${index + 1}`} loading="lazy" /></figure>)}</div>
        </section>
      )}

      {related.length > 0 && (
        <section className="detail-section detail-related">
          <h2 className="detail-section-title">More projects</h2>
          <div className="detail-related-grid">
            {related.map((item) => <Link key={item._id} href={`/projects/${item.slug}`} className="card detail-related-card">
              {item.image && <img src={item.image} alt="" loading="lazy" />}
              <div><h3>{item.title}</h3><p>{item.description}</p><span>Explore project →</span></div>
            </Link>)}
          </div>
        </section>
      )}
    </article>
  )
}
