const highlights = [
  "Adaptive hero transitions",
  "Futuristic glass panels",
  "Micro-animating cards",
];

export function ShowcaseSection() {
  return (
    <section id="launch" className="mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-[0_20px_70px_-25px_rgba(15,23,42,0.2)] lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-700">Launch-ready experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">A homepage that feels alive from the first frame.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Pair cinematic motion with clear content hierarchy to turn a simple landing page into a memorable introduction.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 animate-spin-slow rounded-[2rem] border border-sky-200" />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: "Motion system", text: "Fluid, responsive, and polished" },
                { title: "UI rhythm", text: "Balanced, refined, and premium" },
                { title: "Visual depth", text: "Layered gradients and light" },
                { title: "Signal clarity", text: "Intentional CTAs and hierarchy" },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
