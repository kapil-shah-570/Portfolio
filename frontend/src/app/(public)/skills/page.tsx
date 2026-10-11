import Link from 'next/link'
import { serverGet } from '../../../lib/api'
import { PageHeader, Section } from '../../../components/ui'
import type { Skill } from '../../../lib/types'

export const metadata = { title: 'Skills — Portfolio' }

export default async function SkillsListPage() {
  const skills = await serverGet<Skill[]>('/skills')

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
    const k = s.category || 'Other'
    ;(acc[k] ||= []).push(s)
    return acc
  }, {})

  return (
    <>
      <PageHeader eyebrow="Skills" title="Tools & technologies" subtitle="Click any skill to see details" />

      {Object.entries(grouped).map(([category, list]) => (
        <Section key={category} title={category}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <Link key={s._id} href={`/skills/${s.slug}`} className="card p-5 block">
                <div className="text-2xl">{s.icon}</div>
                <div className="mt-1 flex items-baseline justify-between">
                  <h4 className="font-semibold">{s.name}</h4>
                  <span className="text-xs text-slate-400">{s.level}%</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <span className="block h-full rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${s.level}%` }} />
                </div>
                {s.summary && <p className="mt-3 text-sm text-slate-400">{s.summary}</p>}
                <span className="mt-3 inline-block text-sm text-accent">View details →</span>
              </Link>
            ))}
          </div>
        </Section>
      ))}
    </>
  )
}