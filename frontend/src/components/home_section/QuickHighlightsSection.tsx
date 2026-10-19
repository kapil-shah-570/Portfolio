const quickHighlights = [
  { title: 'Full-stack focus', description: 'Frontend UX, backend logic, and deployment architecture in one workflow.' },
  { title: 'Product mindset', description: 'Turning business ideas into usable, polished digital experiences.' },
  { title: 'Reliable delivery', description: 'Clear planning, structured code, and production-aware implementation.' },
  { title: 'Collaborative approach', description: 'Working with teams, clients, and stakeholders to ship better products.' },
  { title: 'Clean code', description: 'Readable, maintainable, and testable code for long-term product success.' },
  { title: 'Modern workflows', description: 'Using the latest tools, frameworks, and deployment practices.' },
  { title: 'Performance & scalability', description: 'Optimizing applications for speed, reliability, and growth.' },
  { title: 'User experience', description: 'Designing interfaces and interactions that are intuitive and engaging.' },
];

export default function QuickHighlightsSection() {
  return (
    <section id="highlights" className="about-section">
      <div className="about-shell">
        {/* <p className="about-kicker">Quick Highlights</p> */}
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Key strengths and technical approach</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickHighlights.map((item) => (
            <article key={item.title} className="about-card p-6">
              <p className="text-sm font-bold tracking-[0.18em] text-accent2">HIGHLIGHT</p>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
