const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="sticky top-4 z-20 mb-6 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-lg shadow-cyan-950/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 font-semibold text-slate-950">
           KKM
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.25em] text-white">KAPIL KUMAR MAHATO</div>
            <div className="text-xs text-slate-400">Software Developer</div>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}
