import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGet, serverGetBySlug } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Certificate } from '../../../../lib/types'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const certificate = await serverGetBySlug<Certificate>('certificates', slug)
  return { title: certificate ? `${certificate.title} — Certificate` : 'Certificate' }
}

export default async function CertificateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const certificate = await serverGetBySlug<Certificate>('certificates', slug)
  if (!certificate) notFound()

  const related = (await serverGet<Certificate[]>('/certificates').catch(() => []))
    .filter((item) => item.slug !== certificate.slug && item.skills?.some((skill) => certificate.skills?.includes(skill)))
    .slice(0, 3)

  return (
    <article className="container-x detail-page detail-narrow">
      <Link href="/certificates" className="detail-back">← All certificates</Link>
      <header className="detail-hero">
        <div className="detail-copy">
          <span className="detail-kicker">Verified learning</span>
          <h1 className="detail-title">{certificate.title}</h1>
          <p className="detail-lead">Issued by <strong>{certificate.issuer}</strong></p>
          {certificate.date && <div className="detail-tags"><Badge>Issued {certificate.date}</Badge></div>}
          {certificate.credentialUrl && <div className="detail-actions"><a href={certificate.credentialUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Verify credential ↗</a></div>}
        </div>
      </header>

      {certificate.image
        ? <img src={certificate.image} alt={`${certificate.title} certificate`} className="detail-cover detail-certificate-image" />
        : <div className="detail-certificate-placeholder"><span aria-hidden>✦</span><strong>{certificate.title}</strong><span>{certificate.issuer}</span></div>}

      {certificate.description && (
        <section className="detail-section">
          <h2 className="detail-section-title">About this certificate</h2>
          <p className="detail-prose">{certificate.description}</p>
        </section>
      )}

      {certificate.skills && certificate.skills.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-section-title">Skills covered</h2>
          <div className="detail-tags">{certificate.skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div>
        </section>
      )}

      {(certificate.credentialId || certificate.date || certificate.issuer) && (
        <section className="detail-section">
          <h2 className="detail-section-title">Credential details</h2>
          <dl className="detail-facts detail-credential-facts">
            {certificate.issuer && <div className="detail-fact"><dt>Issuing organization</dt><dd>{certificate.issuer}</dd></div>}
            {certificate.date && <div className="detail-fact"><dt>Issue date</dt><dd>{certificate.date}</dd></div>}
            {certificate.credentialId && <div className="detail-fact"><dt>Credential ID</dt><dd className="detail-code">{certificate.credentialId}</dd></div>}
          </dl>
        </section>
      )}

      {related.length > 0 && (
        <section className="detail-section detail-related">
          <h2 className="detail-section-title">Related credentials</h2>
          <div className="detail-related-grid">{related.map((item) => <Link href={`/certificates/${item.slug}`} className="card detail-related-card" key={item._id}>
            <div><p className="detail-related-eyebrow">{item.issuer} · {item.date}</p><h3>{item.title}</h3><span>View certificate →</span></div>
          </Link>)}</div>
        </section>
      )}
    </article>
  )
}
