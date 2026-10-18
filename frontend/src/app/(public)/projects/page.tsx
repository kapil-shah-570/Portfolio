'use client'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { PageHeader, Section, Badge, Empty } from '../../../components/ui'
import type { Project } from '../../../lib/types'

export default function ProjectsListPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    let active = true
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
    fetch(`${apiUrl.replace(/\/+$/, '')}/api/projects`, { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error(`Could not load projects (${response.status}).`)
        return response.json() as Promise<Project[]>
      })
      .then((items) => { if (active) setProjects(items) })
      .catch((caught: unknown) => {
        if (active) setError(caught instanceof Error ? caught.message : 'Unable to load projects.')
      })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [retryCount])

  const tags = useMemo(() => ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags || [])))], [projects])
  const visible = filter === 'All' ? projects : projects.filter((p) => p.tags?.includes(filter))

  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Projects" subtitle="Click a project for full case study" />
      <Section>
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <button key={t} onClick={() => setFilter(t)} className={`chip ${filter === t ? 'chip-active' : ''}`}>{t}</button>
          ))}
        </div>

        {loading ? <p role="status" className="text-sm text-slate-400">Loading projects…</p> : error ? (
          <div role="alert" className="rounded-xl border border-red-400/20 bg-red-400/5 p-5 text-sm text-red-200">
            <p>{error}</p>
            <button className="btn btn-ghost btn-sm mt-3" onClick={() => { setError(''); setLoading(true); setRetryCount((count) => count + 1) }}>Try again</button>
          </div>
        ) : visible.length === 0 ? <Empty text="No projects in this category." /> : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <Link key={p._id} href={`/projects/${p.slug}`} className="card overflow-hidden block">
                <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  {p.featured && <span className="mb-2 inline-block rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-white">Featured</span>}
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags?.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}