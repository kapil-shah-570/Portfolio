import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGetBySlug, serverGet } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Project } from '../../../../lib/types'

export async function generateStaticParams() {
  const projects = await serverGet<Project[]>('/projects').catch(() => [])
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = await serverGetBySlug<Project>('projects', params.slug)
  return { title: p ? `${p.title} — Projects` : 'Project' }
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await serverGetBySlug<Project>('projects', params.slug)
  if (!project) notFound()

  const related = (await serverGet<Project[]>('/projects').catch(() => []))
    .filter((p) => p.slug !== project.slug && p.tags?.some((t) => project.tags?.includes(t)))
    .slice(0, 3)

  return (
    <article className="container-x section">
      <Link href="/projects" className="text-sm text-slate-400 hover:text-white">← All projects</Link>

      <header className="mt-6 max-w-3xl">
        {project.featured && <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">Featured</span>}
        <h1 className="text-3xl font-bold md:text-5xl">{project.title}</h1>
        {project.description && <p className="mt-4 text-lg text-slate-400">{project.description}</p>}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Live Demo ↗</a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">Source Code ↗</a>}
        </div>
      </header>

      {project.image && (
        <img src={project.image} alt={project.title} className="mt-10 w-full rounded-2xl border border-border" />
      )}

      {/* Meta */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {project.client && <Meta label="Client" value={project.client} />}
        {project.role && <Meta label="My role" value={project.role} />}
        {project.duration && <Meta label="Duration" value={project.duration} />}
        {project.completedAt && <Meta label="Completed" value={project.completedAt} />}
      </div>

      {project.longDescription && (
        <section className="mt-12 max-w-3xl">
          <h2 className="text-xl font-semibold">About this project</h2>
          <p className="mt-3 leading-8 text-slate-400 whitespace-pre-line">{project.longDescription}</p>
        </section>
      )}

      {(project.techStack?.length ?? 0) > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Tech stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack?.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>
        </section>
      )}

      {(project.gallery?.length ?? 0) > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Gallery</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.gallery?.map((g, i) => (
              <img key={i} src={g} alt="" className="w-full rounded-2xl border border-border" />
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-16 border-t border-border pt-8">
          <h2 className="text-xl font-semibold">Related projects</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p._id} href={`/projects/${p.slug}`} className="card overflow-hidden block">
                <img src={p.image} alt="" className="h-32 w-full object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="panel">
      <span className="text-xs uppercase tracking-wider text-slate-500">{label}</span>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  )
}