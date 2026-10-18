const experienceTimeline = [
  { period: '2023 — Present', title: 'Full-Stack Developer', description: 'Building personal and business products with modern frontend and backend workflows.' },
  { period: '2021 — 2023', title: 'Frontend Engineer', description: 'Delivered responsive user interfaces, component systems, and interactive product experiences.' },
  { period: '2019 — 2021', title: 'Developer / Technical Consultant', description: 'Worked on business websites, tools, and design-to-code implementation projects.' },
];

export default function ExperienceTimelineSection() {
  return (
    <section id="experience" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">Experience & Education</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Professional and academic timeline</h2>
        <div className="mt-10 space-y-5">
          {experienceTimeline.map((item) => (
            <article key={item.period} className="about-card flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-accent2">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
