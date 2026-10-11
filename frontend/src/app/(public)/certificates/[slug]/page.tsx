import Link from 'next/link'
import { notFound } from 'next/navigation'
import { serverGet, serverGetBySlug } from '../../../../lib/api'
import { Badge } from '../../../../components/ui'
import type { Certificate } from '../../../../lib/types'

export async function generateStaticParams() {
  const certificates = await serverGet<Certificate[]>('/certificates').catch(() => [])
  return certificates.map((cert) => ({ slug: cert.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const c = await serverGetBySlug<Certificate>('certificates', params.slug)
  return { title: c ? `${c.title} — Certificate` : 'Certificate' }
}

export default async function CertificateDetailPage({ params }: { params: { slug: string } }) {
  const cert = await serverGetBySlug<Certificate>('certificates', params.slug)
  if (!cert) notFound()

  return (
    <article className="container-x section max-w-4xl">
      <Link href="/certificates" className="text-sm text-slate-400 hover:text-white">← All certificates</Link>

      <h1 className="mt-6 text-3xl font-bold md:text-5xl">{cert.title}</h1>
      <p className="mt-3 text-slate-400">Issued by <strong className="text-slate-200">{cert.issuer}</strong> • {cert.date}</p>

      {cert.image && (
        <img src={cert.image} alt={cert.title} className="mt-8 w-full rounded-2xl border border-border" />
      )}

      {cert.description && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">About this certification</h2>
          <p className="mt-3 leading-8 text-slate-400 whitespace-pre-line">{cert.description}</p>
        </section>
      )}

      {(cert.skills?.length ?? 0) > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Skills covered</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {cert.skills?.map((s) => <Badge key={s}>{s}</Badge>)}
          </div>
        </section>
      )}

      <div className="mt-10 panel">
        <dl className="grid gap-4 sm:grid-cols-2">
          {cert.credentialId && (
            <div><dt className="text-xs uppercase text-slate-500">Credential ID</dt><dd className="mt-1 font-mono">{cert.credentialId}</dd></div>
          )}
          {cert.date && (
            <div><dt className="text-xs uppercase text-slate-500">Issued</dt><dd className="mt-1">{cert.date}</dd></div>
          )}
        </dl>
        {cert.credentialUrl && (
          <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-5">Verify credential ↗</a>
        )}
      </div>
    </article>
  )
}
