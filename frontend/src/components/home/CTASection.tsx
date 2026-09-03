export function CTASection() {
  return (
    <section className="mt-8 rounded-[2rem] border border-sky-200 bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(14,116,144,0.08))] p-8 shadow-[0_18px_60px_-25px_rgba(15,23,42,0.2)] lg:p-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-700">Ready to launch</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Bring motion, clarity, and personality to your homepage.</h2>
        </div>
        <a href="#top" className="inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700">
          Build the experience
        </a>
      </div>
    </section>
  );
}
