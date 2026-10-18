import { ArrowUpRight, Mail } from 'lucide-react';

const values = [
  { title: 'Problem solving', description: 'I enjoy breaking down challenges and turning them into practical solutions.' },
  { title: 'Learning', description: 'I continuously improve my skills and adapt to new tools and systems.' },
  { title: 'Collaboration', description: 'I work well with teams and keep communication clear throughout delivery.' },
];

const professionalGoals = [
  { title: 'Full-stack mastery', description: 'Keep growing across frontend, backend, APIs, and deployment systems.' },
  { title: 'Cloud capability', description: 'Build stronger knowledge of managed hosting, security, and infrastructure workflows.' },
  { title: 'Product quality', description: 'Improve delivery through better testing, maintainability, and user value.' },
  { title: 'Impact-driven work', description: 'Contribute to projects that are useful, measurable, and technically strong.' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/your-username' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile' },
];

export default function ValuesGoalsContactSection() {
  return (
    <>
      <section id="values" className="about-section">
        <div className="about-shell">
          <p className="about-kicker">Values & Principles</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Problem solving, learning and collaboration</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="about-card p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="goals" className="about-section">
        <div className="about-shell">
          <p className="about-kicker">Professional Goals</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Career direction and technical learning goals</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {professionalGoals.map((goal, index) => (
              <article key={goal.title} className="about-card p-6">
                <p className="text-xs font-black tracking-[0.2em] text-accent2">GOAL 0{index + 1}</p>
                <h3 className="mt-4 text-lg font-bold">{goal.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{goal.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="about-section">
        <div className="about-shell about-card p-7 sm:p-10 lg:p-14">
          <p className="about-kicker">Contact & Footer</p>
          <div className="mt-3 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build something meaningful</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Have a product idea, collaboration opportunity, or development challenge? Let’s connect.
              </p>
              <a href="mailto:kapil@example.com" className="btn btn-primary mt-7">
                <Mail size={18} /> Email me <ArrowUpRight size={16} />
              </a>
              <div className="mt-6 flex gap-5 text-sm text-slate-300">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="about-link inline-flex items-center gap-2">
                    <ArrowUpRight size={17} /> {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">I can help with</h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                {['Portfolio and business websites', 'Full-stack application development', 'API design and backend work', 'Deployment and maintenance'].map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-accent2">✦</span>{item}</li>
                ))}
              </ul>
              <p className="mt-6 break-words text-sm text-slate-400">kapil@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
