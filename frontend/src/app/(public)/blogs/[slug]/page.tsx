import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGet, serverGetBySlug } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Blog } from '../../../../lib/types'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await serverGetBySlug<Blog>('blogs', slug)
  return { title: post ? `${post.title} — Blog` : 'Post', description: post?.excerpt }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await serverGetBySlug<Blog>('blogs', slug)
  if (!post || post.published === false) notFound()

  const related = (await serverGet<Blog[]>('/blogs').catch(() => []))
    .filter((item) => item.published !== false && item.slug !== post.slug && item.tags?.some((tag) => post.tags?.includes(tag)))
    .slice(0, 3)

  return (
    <article className="container-x detail-page detail-article">
      <Link href="/blogs" className="detail-back">← All articles</Link>
      <header className="detail-article-header">
        {post.tags && post.tags.length > 0 && <div className="detail-tags">{post.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>}
        <span className="detail-kicker">Notes & perspectives</span>
        <h1 className="detail-title">{post.title}</h1>
        {post.excerpt && <p className="detail-lead">{post.excerpt}</p>}
        <div className="detail-byline">
          {post.author && <span>By <strong>{post.author}</strong></span>}
          {post.date && <span>{post.date}</span>}
          {post.readingTime && <span>{post.readingTime} min read</span>}
        </div>
      </header>

      {post.cover && <img src={post.cover} alt={`${post.title} cover`} className="detail-cover detail-article-cover" />}

      <div className="detail-article-content">
        {String(post.content || '').split(/\n{2,}/).filter((paragraph) => paragraph.trim()).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {related.length > 0 && (
        <section className="detail-section detail-related">
          <h2 className="detail-section-title">Continue reading</h2>
          <div className="detail-related-grid">{related.map((item) => <Link href={`/blogs/${item.slug}`} className="card detail-related-card" key={item._id}>
            {item.cover && <img src={item.cover} alt="" loading="lazy" />}
            <div><p className="detail-related-eyebrow">{item.date}{item.readingTime ? ` · ${item.readingTime} min read` : ''}</p><h3>{item.title}</h3><p>{item.excerpt}</p><span>Read article →</span></div>
          </Link>)}</div>
        </section>
      )}
    </article>
  )
}
