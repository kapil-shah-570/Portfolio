const stats = [
  { label: "Launch in days", value: "7" },
  { label: "Conversion uplift", value: "+42%" },
  { label: "Delight score", value: "4.9/5" },
];

export function AnimatedHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 px-6 py-16 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:px-10 lg:px-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,116,144,0.12),_transparent_30%)]" />
      <div className="absolute -top-20 left-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-sky-500" />
            Premium experience, crafted in motion
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Turn your next idea into a <span className="text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text">remarkable launch</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Build a striking first impression with cinematic visuals, playful motion, and conversion-focused sections that feel alive from the first scroll.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#launch" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700">
              Start your story
            </a>
            <a href="#features" className="rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50">
              Explore the flow
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 backdrop-blur">
                <div className="text-2xl font-semibold text-slate-900">{item.value}</div>
                <div className="mt-1 text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="animate-float rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-5 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.3)]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-[1rem] border border-cyan-500/20 bg-[linear-gradient(120deg,rgba(34,211,238,0.16),rgba(167,139,250,0.18))] p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-sky-700">Live preview</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">Momentum Studio</h2>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">New</div>
                </div>
                <div className="mt-6 space-y-3">
                  {["Hero motion", "Micro-interactions", "Smart onboarding"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3">
                      <span className="text-sm text-slate-600">{item}</span>
                      <span className="text-sm text-sky-600">0{index + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 animate-progress rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
