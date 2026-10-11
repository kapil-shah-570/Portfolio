import Link from 'next/link'
import { serverGet } from '../../../lib/api'
import { PageHeader, Section, Empty } from '../../../components/ui'
import type { Experience } from '../../../lib/types'

export const metadata = { title: 'Experience — Portfolio' }

export default async function ExperiencesListPage() {
  const experiences = await serverGet<Experience[]>('/experiences')

  // Sort by startDate desc
  const sorted = [...experiences].sort((a, b) => (b.startDate || '').localeCompare(a.startDate || ''))

  return (
    <>
      <PageHeader eyebrow="Career" title="Work experience" subtitle="Click a role for the full story" />
      <Section>
        {sorted.length === 0 ? <Empty text="No experience entries yet." /> : (
          <div className="relative mx-auto max-w-4xl">
            <span className="absolute left-4 top-2 bottom-2 w-0.5 bg-border" aria-hidden />
            <ol className="space-y-6">
              {sorted.map((e) => (
                <li key={e._id} className="relative pl-14">
                  <span className="absolute left-2.5 top-6 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full border-2 border-accent bg-bg" />
                  <Link href={`/experiences/${e.slug}`} className="card block p-5">
                    <div className="flex flex-wrap items-center gap-4">
                      {e.companyLogo && <img src={e.companyLogo} alt="" className="h-12 w-12 rounded-xl object-cover" />}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold">{e.title}</h4>
                        <p className="text-sm text-slate-400">{e.company}{e.location && ` • ${e.location}`}</p>
                      </div>
                      <span className="rounded-full border border-border px-3 py-0.5 text-xs text-slate-400">
                        {e.startDate} — {e.current ? 'Present' : e.endDate}
                      </span>
                    </div>
                    {e.summary && <p className="mt-3 text-sm text-slate-400">{e.summary}</p>}
                    <span className="mt-3 inline-block text-sm text-accent">Read more →</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        )}
      </Section>
    </>
  )
}