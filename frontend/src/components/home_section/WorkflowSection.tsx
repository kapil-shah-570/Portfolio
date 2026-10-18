import { ShieldCheck } from 'lucide-react';

const workflowSteps = [
  { number: '01', title: 'Planning', description: 'Clarify goals, map user needs, and outline the right technical direction.' },
  { number: '02', title: 'Design', description: 'Shape the structure, interactions, and interface patterns before development starts.' },
  { number: '03', title: 'Development', description: 'Build reliable frontend, backend, and data-layer logic with maintainable structure.' },
  { number: '04', title: 'Testing', description: 'Validate functionality and smooth UX for real-world usage conditions.' },
  { number: '05', title: 'Deployment', description: 'Prepare production-ready builds, config, and hosting for release.' },
  { number: '06', title: 'Support', description: 'Monitor, improve, and maintain the system as requirements evolve.' },
];

const engineeringPrinciples = [
  { title: 'Clean architecture', description: 'Structure code in ways that are modular, readable, and maintainable over time.' },
  { title: 'Performance-first', description: 'Optimize interfaces and backend flows for responsiveness and reliability.' },
  { title: 'Security awareness', description: 'Apply safe patterns, validation, and sensible environment configuration practices.' },
  { title: 'Usability', description: 'Focus on accessibility, intuitive flows, and a strong user experience.' },
  { title: 'Continuous improvement', description: 'Refine features and code quality through feedback and iteration.' },
];

export default function WorkflowSection() {
  return (
    <>
      <section id="workflow" className="about-section">
        <div className="about-shell">
          <p className="about-kicker">Development Workflow</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Planning through deployment and maintenance</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step) => (
              <article key={step.number} className="about-card p-6">
                <p className="text-sm font-black tracking-[0.2em] text-accent2">{step.number}</p>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="about-section">
        <div className="about-shell">
          <p className="about-kicker">Engineering Approach</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Security, performance, usability and maintainability</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {engineeringPrinciples.map((item, index) => (
              <article key={item.title} className="about-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-violet-200">
                  <ShieldCheck size={22} />
                </div>
                <p className="mt-5 text-xs font-bold tracking-[0.2em] text-accent2">PRINCIPLE 0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
