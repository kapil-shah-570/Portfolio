import Link from 'next/link'
import { serverGet } from '../../../lib/api'
import { PageHeader, Section, Empty } from '../../../components/ui'
import type { Certificate } from '../../../lib/types'

export const metadata = { title: 'Certificates — Portfolio' }

export default async function CertificatesListPage() {
  const certificates = await serverGet<Certificate[]>('/certificates')

  return (
    <>
      <PageHeader eyebrow="Credentials" title="Certificates" subtitle="Click to view details" />
      <Section>
        {certificates.length === 0 ? <Empty text="No certificates yet." /> : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c) => (
              <Link key={c._id} href={`/certificates/${c.slug}`} className="card overflow-hidden block">
                <img src={c.image} alt={c.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h4 className="font-semibold">{c.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{c.issuer} • {c.date}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}