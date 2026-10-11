import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGetBySlug, serverGet } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Skill } from '../../../../lib/types'

export async function generateStaticParams() {
  const skills = await serverGet<Skill[]>('/skills').catch(() => [])
  return skills.map((skill) => ({ slug: skill.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const skill = await serverGetBySlug<Skill>('skills', params.slug)
  return { title: skill ? `${skill.name} — Skills` : 'Skill' }
}

export default async function SkillDetailPage({ params }: { params: { slug: string } }) {
  const skill = await serverGetBySlug<Skill>('skills', params.slug)
  if (!skill) notFound()

  const related = (await serverGet<Skill[]>('/skills').catch(() => []))
    .filter((s) => s.category === skill.category && s.slug !== skill.slug)
    .slice(0, 3)

  return (
    <article className="container-x section max-w-4xl">
      <Link href="/skills" className="text-sm text-slate-400 hover:text-white">← All skills</Link>

      <header className="mt-6 flex items-start gap-5">
        <div className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card text-3xl">
          {skill.icon}
        </div>
        <div>
          <span className="eyebrow mb-2">{skill.category}</span>
          <h1 className="text-3xl font-bold md:text-5xl">{skill.name}</h1>
          {skill.yearsOfExperience ? (
            <p className="mt-2 text-slate-400">{skill.yearsOfExperience} years of experience</p>
          ) : null}
        </div>
      </header>

      <div className="mt-8 panel">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Proficiency</span>
          <strong>{skill.level}%</strong>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
          <span className="block h-full rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${skill.level}%` }} />
        </div>
      </div>

      {skill.description && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-3 leading-8 text-slate-400 whitespace-pre-line">{skill.description}</p>
        </section>
      )}

      {(skill.highlights?.length ?? 0) > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="mt-3 space-y-2">
            {skill.highlights?.map((h) => (
              <li key={h} className="relative pl-6 text-slate-400 before:absolute before:left-0 before:font-bold before:text-accent2 before:content-['✓']">{h}</li>
            ))}
          </ul>
        </section>
      )}

      {(skill.tools?.length ?? 0) > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Tools & libraries</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skill.tools?.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-14 border-t border-border pt-8">
          <h2 className="text-xl font-semibold">Related skills</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <Link key={s._id} href={`/skills/${s.slug}`} className="card p-4 block">
                <div className="text-2xl">{s.icon}</div>
                <h4 className="mt-2 font-semibold">{s.name}</h4>
                <p className="text-xs text-slate-400">{s.level}% proficiency</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}