const serviceCards = [
  { title: 'Portfolio & business websites', description: 'Modern marketing pages, personal brands, and company websites built for clarity and conversion.' },
  { title: 'Web applications', description: 'Dashboards, admin panels, and custom tools that solve real product and operational needs.' },
  { title: 'Backend & APIs', description: 'REST APIs, integrations, auth flows, and scalable server-side logic.' },
  { title: 'UI implementation', description: 'Pixel-aware frontend implementation using component-driven design and clean styling systems.' },
  { title: 'Deployment support', description: 'Build configuration, hosting setup, environment management, and production launches.' },
  { title: 'Product iteration', description: 'Refining existing products with better UX, performance, and maintainability.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">Services & Expertise</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Full-stack development, APIs and deployment</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((item, index) => (
            <article key={item.title} className="about-card p-6">
              <div className="flex items-center justify-between">
                <span className="text-accent2">✦</span>
                <span className="text-xs font-bold tracking-widest text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
