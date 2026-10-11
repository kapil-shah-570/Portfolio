import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950/60">
      <div className="container-x flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-semibold">Kapil Kumar Mahato</div>
          <div className="mt-1 text-sm text-slate-400">Product designer and full-stack engineer.</div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-300">
          <Link href="/about" className="transition hover:text-white">About</Link>
          <Link href="/projects" className="transition hover:text-white">Projects</Link>
          <Link href="/certificates" className="transition hover:text-white">Certificates</Link>
          <Link href="/blogs" className="transition hover:text-white">Blog</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </div>
        <div className="text-sm text-slate-500">© 2026 Kapil Kumar Mahato</div>
      </div>
    </footer>
  )
}
