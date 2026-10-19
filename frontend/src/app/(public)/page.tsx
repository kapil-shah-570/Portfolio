// import Link from 'next/link';
// import PortfolioHomeSections from '@/components/home_section/PortfolioHomeSections';

// export default function HomePage() {
//   return (
//     <>
//       <section className="relative isolate overflow-hidden py-20 md:py-5">
//         <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//           <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />
//           <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />
//           <div className="absolute inset-0 bg-[radial-gradient(#64748b18_1px,transparent_1px)] [background-size:28px_28px]" />
//         </div>

//         <div className="container-x grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
//           <div className="animate-fade-up">
//             <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
//               </span>
//               Full-stack developer
//             </div>

//             <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl xl:text-7xl">
//               Building digital products with code and creativity.
//             </h1>

//             <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
//               I design and build modern web experiences, backend systems, dashboards, and deployment-ready solutions for real-world products.
//             </p>

//             <div className="mt-9 flex flex-wrap items-center gap-4">
//               <Link href="/projects" className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40">
//                 View projects
//                 <span className="transition-transform group-hover:translate-x-1">→</span>
//               </Link>

//               <Link href="/contact" className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 font-semibold text-white transition duration-300 hover:border-indigo-400/50 hover:bg-white/[0.07]">
//                 Contact me
//               </Link>
//             </div>

//             <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
//               {[
//                 { value: '3+', label: 'Years of work' },
//                 { value: '20+', label: 'Projects built' },
//                 { value: '100%', label: 'Focus on quality' },
//                 { value: '24/7', label: 'Curiosity' },
//               ].map((s) => (
//                 <div key={s.label} className="group">
//                   <strong className="block text-2xl font-bold text-white transition-colors group-hover:text-indigo-400 md:text-3xl">
//                     {s.value}
//                   </strong>
//                   <span className="mt-2 block text-xs leading-5 text-slate-500">{s.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative mx-auto w-full max-w-md animate-fade-up">
//             <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-3xl" />
//             <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-indigo-950/40">
//               <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-indigo-950">
//                 <img
//                   src="/profile-picture.png"
//                   alt="Kapil Kumar Mahato, Full Stack Developer"
//                   className="aspect-[4/5] w-full rounded-2xl object-cover object-center"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
//                 <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
//                   <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Developer & Creator</p>
//                   <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Kapil Kumar Mahato</h2>
//                   <p className="mt-2 text-sm text-slate-300">Building digital products with code and creativity.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <PortfolioHomeSections />
//     </>
//   );
// }









import Link from 'next/link'
import { serverGet } from '../../lib/api'
import { Section, Badge } from '../../components/ui'
import type { Hero, Profile, Skill, Project, Blog, Experience } from '../../lib/types'
import PortfolioHomeSections from '@/components/home_section/PortfolioHomeSections'

export default async function HomePage() {
  const [hero, profile, skills, projects, experiences, blogs] = await Promise.all([
    serverGet<Hero>('/hero'),
    serverGet<Profile>('/profile'),
    serverGet<Skill[]>('/skills'),
    serverGet<Project[]>('/projects'),
    serverGet<Experience[]>('/experiences').catch(() => []),
    serverGet<Blog[]>('/blogs'),
  ])

  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const latest = blogs.filter((b) => b.published).slice(0, 3)
  const recentExp = experiences.slice(0, 3)

  return (
    <>
      {/* HERO */}
      {/* <section className="py-20">
        <div className="container-x grid items-center gap-12 md:grid-cols-[1.25fr_.75fr]">
          <div className="animate-fade-up">
            {hero.badge && <span className="eyebrow mb-5">{hero.badge}</span>}
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">{hero.title}</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-400">{hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={hero.ctaPrimary.to} className="btn btn-primary">{hero.ctaPrimary.label}</Link>
              <Link href={hero.ctaSecondary.to} className="btn btn-ghost">{hero.ctaSecondary.label}</Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <strong className="block text-2xl">{s.value}</strong>
                  <span className="text-xs text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-sm">
            {profile.avatar && <img src={profile.avatar} alt={profile.name} className="aspect-square w-full rounded-3xl border border-border object-cover shadow-soft" />}
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Kapil Kumar Mahato</div>
          </div>
          
        </div>
      </section> */}


<section className="relative isolate overflow-hidden py-20 md:py-5">
  {/* Background Effects */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />
    <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#64748b18_1px,transparent_1px)] [background-size:28px_28px]" />
  </div>

  <div className="container-x grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

    {/* Left Content */}
    <div className="animate-fade-up">
      {hero.badge && (
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {hero.badge}
        </div>
      )}

      <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl xl:text-7xl">
        {hero.title}
      </h1>

      <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
        {hero.subtitle}
      </p>

      {/* Action Buttons */}
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link
          href={hero.ctaPrimary.to}
          className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
        >
          {hero.ctaPrimary.label}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>

        <Link
          href={hero.ctaSecondary.to}
          className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 font-semibold text-white transition duration-300 hover:border-indigo-400/50 hover:bg-white/[0.07]"
        >
          {hero.ctaSecondary.label}
        </Link>
      </div>

      {/* Technology Stack */}
      {/* <div className="mt-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Technologies I work with
        </p>

        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Node.js", "MongoDB", "Flutter", "AI / ML"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-slate-300 transition hover:border-indigo-400/40 hover:text-indigo-300"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div> */}

      {/* Statistics */}
      <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
        {hero.stats.map((s) => (
          <div key={s.label} className="group">
            <strong className="block text-2xl font-bold text-white transition-colors group-hover:text-indigo-400 md:text-3xl">
              {s.value}
            </strong>
            <span className="mt-2 block text-xs leading-5 text-slate-500">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Right Side: Developer Portrait */}
    <div className="relative mx-auto w-full max-w-md animate-fade-up">
      {/* Decorative Glow */}
      <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-3xl" />

      {/* Portrait Card */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-indigo-950/40">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-indigo-950">
          <img
            src="/profile-picture.png"
            alt="Kapil Kumar Mahato, Full Stack Developer"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-center"
          />


          {/* Image Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

          {/* Developer Name Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
              Developer & Creator
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Kapil Kumar Mahato
            </h2>

            <p className="mt-2 text-sm text-slate-300">
              Building digital products with code and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Developer Badge */}
      {/* <div className="absolute -left-6 top-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl sm:flex">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-xl">
          💻
        </div>
        <div>
          <p className="text-sm font-bold text-white">Full Stack</p>
          <p className="mt-1 text-xs text-slate-400">Web & App Developer</p>
        </div>
      </div> */}

      {/* Floating Code Badge */}
      {/* <div className="absolute -right-5 bottom-24 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl sm:block">
        <p className="font-mono text-sm text-emerald-400">
          {"<Code />"}
        </p>
        <p className="mt-1 text-xs text-slate-400">Turning ideas into reality</p>
      </div> */}
    </div>
  </div>
</section>





 <PortfolioHomeSections  />








      {/* SKILLS */}
      <Section title="What I work with" subtitle="Core stack" actions={<Link href="/skills" className="btn btn-ghost btn-sm">All skills →</Link>}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 6).map((s) => (
            <Link href={`/skills/${s.slug}`} key={s._id} className="card p-5 block">
              <div className="text-2xl">{s.icon}</div>
              <h4 className="mt-1 font-semibold">{s.name}</h4>
              <p className="text-xs text-slate-400">{s.category}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
                <span className="block h-full rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: `${s.level}%` }} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      {recentExp.length > 0 && (
        <Section title="Recent experience" subtitle="Where I've worked" actions={<Link href="/experiences" className="btn btn-ghost btn-sm">All roles →</Link>}>
          <div className="grid gap-5 md:grid-cols-3">
            {recentExp.map((e) => (
              <Link key={e._id} href={`/experiences/${e.slug}`} className="card p-5 block">
                <div className="flex items-center gap-3">
                  {e.companyLogo && <img src={e.companyLogo} alt="" className="h-10 w-10 rounded-lg" />}
                  <div>
                    <h4 className="font-semibold">{e.title}</h4>
                    <p className="text-xs text-slate-400">{e.company}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400">{e.startDate} — {e.current ? 'Present' : e.endDate}</p>
                {e.summary && <p className="mt-2 line-clamp-3 text-sm text-slate-400">{e.summary}</p>}
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* PROJECTS */}
      <Section title="Featured projects" subtitle="Selected work" actions={<Link href="/projects" className="btn btn-ghost btn-sm">All projects →</Link>}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link key={p._id} href={`/projects/${p.slug}`} className="card overflow-hidden block">
              <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags?.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* BLOG */}
      <Section title="From the blog" subtitle="Notes and tutorials" actions={<Link href="/blogs" className="btn btn-ghost btn-sm">All posts →</Link>}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((b) => (
            <Link key={b._id} href={`/blogs/${b.slug}`} className="card overflow-hidden block">
              <img src={b.cover} alt={b.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <span className="text-xs text-slate-400">{b.date}</span>
                <h4 className="font-semibold">{b.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      

      <Section>
        <div className="rounded-3xl border border-border bg-gradient-to-br from-accent/20 to-accent2/10 p-10 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Have a project in mind?</h2>
          <p className="mt-2 text-slate-400">Let’s build something great together.</p>
          <Link href="/contact" className="btn btn-primary mt-6">Start a conversation</Link>
        </div>
      </Section>
  
    </>
  )
}