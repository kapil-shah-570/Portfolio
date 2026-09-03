const features = [
  {
    title: "Immersive storytelling",
    description: "Move from attention to action with layered sections that breathe and respond to every scroll.",
  },
  {
    title: "Fast by design",
    description: "Lean layout, clean interaction patterns, and expressive motion without sacrificing performance.",
  },
  {
    title: "Built for conversion",
    description: "Guide visitors with confident CTA moments, social proof, and clear value framing.",
  },
];

export function FeatureSection() {
  return (
    <section id="features" className="mt-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
      <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_18px_50px_-25px_rgba(15,23,42,0.2)]">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-700">Why it feels premium</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Thoughtfully layered interactions that feel effortless.</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Every block is built to invite curiosity, highlight value, and keep momentum through the experience.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={feature.title} className="group rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50/70">
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-cyan-100 text-lg text-sky-700">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
