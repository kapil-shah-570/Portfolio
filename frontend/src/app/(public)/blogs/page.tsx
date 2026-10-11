import Link from 'next/link'
import { serverGet } from '../../../lib/api'
import { PageHeader, Section, Badge, Empty } from '../../../components/ui'
import type { Blog } from '../../../lib/types'

export const metadata = { title: 'Blog — Portfolio' }

export default async function BlogsListPage() {
  const blogs = (await serverGet<Blog[]>('/blogs')).filter((b) => b.published !== false)

  return (
    <>
      <PageHeader eyebrow="Writing" title="Blog" subtitle="Articles, notes, tutorials" />
      <Section>
        {blogs.length === 0 ? <Empty text="No published posts yet." /> : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((b) => (
              <Link key={b._id} href={`/blogs/${b.slug}`} className="card overflow-hidden block">
                <img src={b.cover} alt={b.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{b.date}</span>
                    {b.readingTime ? <span>• {b.readingTime} min read</span> : null}
                  </div>
                  <h4 className="mt-2 font-semibold">{b.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{b.excerpt}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {b.tags?.map((t) => <Badge key={t}>{t}</Badge>)}
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