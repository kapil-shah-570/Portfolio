import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGet, serverGetBySlug } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Experience } from '../../../../lib/types'

export async function generateStaticParams() {
  const experiences = await serverGet<Experience[]>('/experiences').catch(() => [])
  return experiences.map((experience) => ({ slug: experience.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const e = await serverGetBySlug<Experience>('experiences', params.slug)
  return { title: e ? `${e.title} at ${e.company}` : 'Experience' }
}

export default async function ExperienceDetailPage({ params }: { params: { slug: string } }) {
  const exp = await serverGetBySlug<Experience>('experiences', params.slug)
  if (!exp) notFound()

  return (
    <article className="container-x section max-w-4xl">
      <Link href="/experiences" className="text-sm text-slate-400 hover:text-white">← All experience</Link>

      <header className="mt-6 flex flex-wrap items-start gap-6">
        {exp.companyLogo && <img src={exp.companyLogo} alt="" className="h-16 w-16 rounded-2xl object-cover" />}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold md:text-5xl">{exp.title}</h1>
          <p className="mt-2 text-lg text-slate-400">
            <a href={exp.companyUrl || '#'} target="_blank" rel="noreferrer" className="hover:text-white">{exp.company}</a>
            {exp.location && ` • ${exp.location}`}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="badge">{exp.type}</span>
            <span className="badge">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
          </div>
        </div>
      </header>

      {exp.description && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-3 leading-8 text-slate-400 whitespace-pre-line">{exp.description}</p>
        </section>
      )}

      {(exp.responsibilities?.length ?? 0) > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Responsibilities</h2>
          <ul className="mt-3 space-y-2">
            {exp.responsibilities?.map((r) => (
              <li key={r} className="relative pl-6 text-slate-400 before:absolute before:left-0 before:text-accent2 before:content-['•']">{r}</li>
            ))}
          </ul>
        </section>
      )}

      {(exp.achievements?.length ?? 0) > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Key achievements</h2>
          <ul className="mt-3 space-y-2">
            {exp.achievements?.map((a) => (
              <li key={a} className="relative pl-6 text-slate-400 before:absolute before:left-0 before:font-bold before:text-accent2 before:content-['✓']">{a}</li>
            ))}
          </ul>
        </section>
      )}

      {(exp.techStack?.length ?? 0) > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Tech stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {exp.techStack?.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>
        </section>
      )}
    </article>
  )
}