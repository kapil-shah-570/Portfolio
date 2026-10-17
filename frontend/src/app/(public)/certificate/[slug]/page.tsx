import { redirect } from 'next/navigation'

export default async function LegacyCertificateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  redirect(`/certificates/${encodeURIComponent(slug)}`)
}
