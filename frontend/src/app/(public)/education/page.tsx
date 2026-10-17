import Link from 'next/link'
import { serverGet } from '../../../lib/api'
import { PageHeader, Section, Empty } from '../../../components/ui'
import type { Education } from '../../../lib/types'

export const metadata = { title: 'Education — Portfolio' }

export default async function EducationPage() {
  const education = await serverGet<Education>('/education')

  return (
    <>
      <PageHeader eyebrow="Education" title={education.heading} subtitle={education.subheading} />

      <Section>
        {!education.timeline?.length ? (
          <Empty text="No education entries yet." />
        ) : (
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical timeline line */}
            <span className="absolute left-4 top-2 bottom-2 w-0.5 bg-border" aria-hidden />

            <ol className="space-y-8">
              {education.timeline.map((entry, i) => (
                <li key={entry._id ?? entry.slug ?? i} className="relative pl-14">
                  {/* Dot */}
                  <span className="absolute left-2.5 top-1.5 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full border-2 border-accent bg-bg" />

                  <Link href={entry.slug ? `/education/${entry.slug}` : '/education'} className="card block p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      {entry.logo && <img src={entry.logo} alt="" className="h-10 w-10 rounded-lg object-cover" />}
                      <div>
                        <h4 className="font-semibold">{entry.degree}</h4>
                        <p className="text-sm text-slate-400">
                          {entry.institution}{entry.location && ` • ${entry.location}`}
                        </p>
                      </div>
                      <span className="ml-auto rounded-full border border-border px-3 py-0.5 text-xs text-slate-400">
                        {entry.startDate} — {entry.endDate || 'Present'}
                      </span>
                    </div>
                    {entry.description && (
                      <p className="mt-3 text-sm leading-7 text-slate-400">{entry.description}</p>
                    )}
                    {entry.slug && <span className="mt-4 inline-block text-sm text-accent">View education details →</span>}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        )}
      </Section>

      {education.certificationsSummary && (
        <Section>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-accent2/5 p-8 text-center">
            <p className="mx-auto max-w-2xl text-slate-300">{education.certificationsSummary}</p>
          </div>
        </Section>
      )}
    </>
  )
}