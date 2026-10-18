const headlines = [
  { label: "Professional", title: "Software Developer | Full-Stack Engineer", description: "Building modern web applications with scalable architecture and clean code." },
  { label: "Engineering focus", title: "From Code to Cloud", description: "Developing, containerizing, and deploying modern digital applications." },
  { label: "Modern & minimal", title: "I Build Digital Experiences.", description: "Turning ideas into responsive applications through thoughtful design and modern engineering." },
];

export default function HeadlineOptions() {
  return (
    <section className="about-section">
      <div className="about-shell">
        <p className="about-kicker">Homepage copy</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Choose Your Headline</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {headlines.map((item) => (
            <article key={item.label} className="about-card p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent2">{item.label}</p>
              <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
