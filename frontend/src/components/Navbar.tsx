import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experiences', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/blogs', label: 'Blog' },
  { href: '/education', label: 'Education' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-lg font-bold text-white">
            KKM
          </span>
          <div>
            <div className="text-sm font-semibold  tracking-[0.1em] text-slate-100">Kapil</div>
            <div className="text-sm font-semibold  tracking-[0.1em] text-slate-100">Kumar</div>
            <div className="text-sm font-semibold  tracking-[0.1em] text-slate-100">Mahato</div>
            {/* <div className="text-xs text-slate-400">Portfolio</div> */}
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-primary btn-sm">
          Let’s talk
        </Link>
      </div>
    </header>
  )
}
