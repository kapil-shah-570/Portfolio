import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Portfolio Platform',
    description: 'A modern personal portfolio with a strong visual identity, responsive layouts, and project showcase sections.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    accent: 'from-violet-500/20 to-cyan-500/20',
  },
  {
    title: 'Admin Dashboard',
    description: 'Operations-focused dashboard for managing content, team workflows, and efficient business monitoring.',
    tags: ['React', 'Node.js', 'MongoDB'],
    accent: 'from-cyan-500/20 to-indigo-500/20',
  },
  {
    title: 'Service API Suite',
    description: 'Scalable backend APIs connecting applications, data layers, and business logic with structured access patterns.',
    tags: ['Express', 'REST', 'AWS'],
    accent: 'from-indigo-500/20 to-violet-500/20',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">Selected work</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Projects I have Built</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A selection of personal and professional work showing design, engineering, and product thinking.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className="about-card overflow-hidden">
              <Link href="/projects" className="group block">
                <div className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${project.accent}`}>
                  <span className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                    Project 0{index + 1}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mt-3 text-xl font-semibold group-hover:text-cyan-200">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((technology) => (
                      <span key={technology} className="rounded-full border border-border bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <div className="flex flex-wrap gap-3 px-6 pb-6">
                <Link href="/projects" className="btn btn-ghost btn-sm">View project</Link>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  <ExternalLink size={16} /> Live demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
