const aboutHighlights = [
  'Full-stack development across frontend, backend, and deployment workflows.',
  'Strong focus on clean architecture, performance, and maintainable code.',
  'Experience building responsive products and business-ready web experiences.',
  'Comfortable with modern JavaScript, TypeScript, APIs, databases, and cloud hosting.',
];

export default function AboutMeSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">About Me</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional introduction and developer background</h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              I build modern web experiences with a strong focus on clean code, user experience, and useful product outcomes.
              My work spans frontend interfaces, backend systems, and deployment-ready application workflows.
            </p>
            <div className="mt-6 space-y-3">
              {aboutHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 text-accent2">✓</span>
                  <span className="leading-7">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card p-6 sm:p-8">
            <p className="about-kicker">Focus areas</p>
            <div className="mt-6 space-y-4">
              {['Modern web apps', 'Frontend + backend', 'API integrations', 'Scalable architecture', 'Cloud deployment'].map((item, index) => (
                <div key={item} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-slate-300">{item}</span>
                  <span className="text-xs font-bold tracking-[0.22em] text-accent2">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
