import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGetBySlug, serverGet } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Blog, Profile } from '../../../../lib/types'

export async function generateStaticParams() {
  const blogs = await serverGet<Blog[]>('/blogs').catch(() => [])
  return blogs.filter((blog) => blog.published !== false).map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const b = await serverGetBySlug<Blog>('blogs', params.slug)
  return { title: b ? `${b.title} — Blog` : 'Post' }
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [post, profile] = await Promise.all([
    serverGetBySlug<Blog>('blogs', params.slug),
    serverGet<Profile>('/profile').catch(() => null),
  ])
  if (!post) notFound()

  const related = (await serverGet<Blog[]>('/blogs').catch(() => []))
    .filter((b) => b.published && b.slug !== post.slug && b.tags?.some((t) => post.tags?.includes(t)))
    .slice(0, 3)

  return (
    <article className="container-x section max-w-3xl">
      <Link href="/blogs" className="text-sm text-slate-400 hover:text-white">← All posts</Link>

      <header className="mt-6">
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
        <h1 className="mt-4 text-3xl font-bold md:text-5xl">{post.title}</h1>
        <p className="mt-3 text-sm text-slate-400">
          {post.date}
          {post.author && ` • ${post.author}`}
          {!post.author && profile?.name && ` • ${profile.name}`}
          {post.readingTime ? ` • ${post.readingTime} min read` : ''}
        </p>
      </header>

      {post.cover && (
        <img src={post.cover} alt={post.title} className="mt-8 w-full rounded-2xl border border-border" />
      )}

      <div className="mt-10 space-y-4">
        {String(post.content || '').split('\n').map((line, i) => (
          <p key={i} className="leading-8 text-slate-300">{line}</p>
        ))}
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-border pt-8">
          <h2 className="text-xl font-semibold">Related posts</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((b) => (
              <Link key={b._id} href={`/blogs/${b.slug}`} className="card overflow-hidden block">
                <img src={b.cover} alt="" className="h-32 w-full object-cover" />
                <div className="p-4">
                  <h4 className="text-sm font-semibold">{b.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}