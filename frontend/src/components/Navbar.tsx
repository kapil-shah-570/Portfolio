// import Link from 'next/link'

// const navItems = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/projects', label: 'Projects' },
//   { href: '/experiences', label: 'Experience' },
//   { href: '/skills', label: 'Skills' },
//   { href: '/certificates', label: 'Certificates' },
//   { href: '/blogs', label: 'Blog' },
//   { href: '/education', label: 'Education' },
//   { href: '/contact', label: 'Contact' },
// ]

// export function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
//       <div className="container-x flex items-center justify-between py-4">
//         <Link href="/" className="flex items-center gap-3">
//           <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-lg font-bold text-white">
//             KKM
//           </span>
//           <div>
//             <div className="text-sm font-semibold  tracking-[0.1em] text-slate-100">Kapil</div>
//             <div className="text-sm font-semibold  tracking-[0.1em] text-slate-100">Kumar</div>
//             <div className="text-sm font-semibold  tracking-[0.1em] text-slate-100">Mahato</div>
//             {/* <div className="text-xs text-slate-400">Portfolio</div> */}
//           </div>
//         </Link>

//         <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
//           {navItems.map((item) => (
//             <Link key={item.href} href={item.href} className="transition hover:text-white">
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <Link href="/contact" className="btn btn-primary btn-sm">
//           Let’s talk
//         </Link>
//       </div>
//     </header>
//   )
// }



















// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useEffect, useState } from 'react'

// const navItems = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/projects', label: 'Projects' },
//   { href: '/experiences', label: 'Experience' },
//   { href: '/skills', label: 'Skills' },
//   { href: '/certificates', label: 'Certificates' },
//   { href: '/blogs', label: 'Blog' },
//   { href: '/education', label: 'Education' },
//   { href: '/contact', label: 'Contact' },
// ]

// export function Navbar() {
//   const pathname = usePathname()
//   const [menuOpen, setMenuOpen] = useState(false)

//   // Close the mobile menu after navigation.
//   useEffect(() => {
//     // setMenuOpen(false)
//   }, [pathname])

//   // Close the menu when the Escape key is pressed.
//   useEffect(() => {
//     if (!menuOpen) return

//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') setMenuOpen(false)
//     }

//     window.addEventListener('keydown', handleKeyDown)
//     return () => window.removeEventListener('keydown', handleKeyDown)
//   }, [menuOpen])

//   const isActive = (href: string) =>
//     href === '/'
//       ? pathname === '/'
//       : pathname === href || pathname.startsWith(`${href}/`)

//   const linkClass = (href: string) =>
//     `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
//       isActive(href)
//         ? 'bg-accent/10 text-accent'
//         : 'text-slate-300 hover:bg-white/5 hover:text-white'
//     }`

//   return (
//     <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
//       <div className="container-x mx-auto flex min-h-16 items-center justify-between gap-3 py-3 lg:min-h-[76px]">

//         {/* Brand */}
//         <Link
//           href="/"
//           aria-label="Kapil Kumar Mahato — Home"
//           className="flex shrink-0 items-center gap-2.5 sm:gap-3"
//         >
//           <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 text-sm font-extrabold text-white shadow-lg sm:h-11 sm:w-11">
         
//           </span>

//           <span className="min-w-0">
//             <span className="block text-sm font-bold leading-tight tracking-wide text-white sm:text-base">
//               Kapil Kumar
//             </span>
//             <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
//               Mahato · Portfolio
//             </span>
//           </span>
//         </Link>

//         {/* Desktop navigation */}
//         <nav
//           aria-label="Main navigation"
//           className="hidden items-center gap-0.5 xl:flex"
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               aria-current={isActive(item.href) ? 'page' : undefined}
//               className={`relative whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-medium transition-colors 2xl:px-2.5 ${
//                 isActive(item.href)
//                   ? 'bg-white/5 text-white'
//                   : 'text-slate-400 hover:bg-white/5 hover:text-white'
//               }`}
//             >
//               {item.label}

//               {isActive(item.href) && (
//                 <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-accent" />
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop contact button */}
//         <Link
//           href="/contact"
//           className="hidden shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl xl:inline-flex"
//         >
//           Let’s talk
//           <span aria-hidden="true">↗</span>
//         </Link>

//         {/* Mobile and tablet menu button */}
//         <button
//           type="button"
//           aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
//           aria-expanded={menuOpen}
//           aria-controls="mobile-navigation"
//           onClick={() => setMenuOpen((open) => !open)}
//           className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:hidden"
//         >
//           <span className="sr-only">
//             {menuOpen ? 'Close menu' : 'Open menu'}
//           </span>

//           {menuOpen ? (
//             <svg
//               aria-hidden="true"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               className="h-5 w-5"
//             >
//               <path d="M18 6 6 18M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               aria-hidden="true"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               className="h-5 w-5"
//             >
//               <path d="M4 7h16M4 12h16M4 17h16" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile and tablet navigation */}
//       <div
//         id="mobile-navigation"
//         hidden={!menuOpen}
//         className="border-t border-white/10 bg-background/95 px-4 pb-5 pt-3 shadow-2xl backdrop-blur-xl xl:hidden"
//       >
//         <nav aria-label="Mobile navigation" className="mx-auto max-w-3xl">
//           <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 aria-current={isActive(item.href) ? 'page' : undefined}
//                 className={linkClass(item.href)}
//               >
//                 <span className="flex items-center justify-between gap-1">
//                   {item.label}
//                   {isActive(item.href) && (
//                     <span
//                       aria-hidden="true"
//                       className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
//                     />
//                   )}
//                 </span>
//               </Link>
//             ))}
//           </div>

//           <Link
//             href="/contact"
//             className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
//           >
//             Let’s talk
//             <span aria-hidden="true">↗</span>
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }






'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`)

  const linkClass = (href: string) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? 'bg-accent/10 text-accent'
        : 'text-slate-300 hover:bg-white/5 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="container-x mx-auto flex min-h-16 items-center justify-between gap-3 py-3 lg:min-h-[76px]">

        {/* Brand and profile photo */}
        <Link
          href="/"
          aria-label="Kapil Kumar Mahato — Home"
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-accent to-accent2 shadow-lg transition duration-300 group-hover:scale-105 group-hover:shadow-accent/20 sm:h-11 sm:w-11">
            <Image
              src="/headerprofile.png"
              alt="Kapil Kumar Mahato"
              fill
              priority
              sizes="44px"
              className="object-cover"
            />
          </span>

          <span className="min-w-0">
            <span className="block text-sm font-bold leading-tight tracking-wide text-white transition-colors group-hover:text-accent sm:text-base">
              Kapil Kumar
            </span>

            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
              Mahato · Portfolio
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-medium transition-colors 2xl:px-2.5 ${
                isActive(item.href)
                  ? 'bg-white/5 text-white'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}

              {isActive(item.href) && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop contact button */}
        <Link
          href="/contact"
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl xl:inline-flex"
        >
          Let’s talk
          <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile and tablet menu button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:hidden"
        >
          <span className="sr-only">
            {menuOpen ? 'Close menu' : 'Open menu'}
          </span>

          {menuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile and tablet navigation */}
      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-white/10 bg-background/95 px-4 pb-5 pt-3 shadow-2xl backdrop-blur-xl xl:hidden"
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-3xl"
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={linkClass(item.href)}
              >
                <span className="flex items-center justify-between gap-1">
                  {item.label}

                  {isActive(item.href) && (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                  )}
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Let’s talk
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}


