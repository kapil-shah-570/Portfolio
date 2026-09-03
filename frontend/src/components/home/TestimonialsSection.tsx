const testimonials = [
  {
    quote: "It feels like a product launch and a brand experience at the same time.",
    name: "Ava Chen",
    role: "Founder, Northstar",
  },
  {
    quote: "The flow is instantly premium and the attention to detail is obvious.",
    name: "Marcus Hill",
    role: "Design Lead, Halo",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_18px_60px_-25px_rgba(15,23,42,0.2)] lg:p-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-700">Social proof</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Designed to feel premium, trusted, and memorable.</h2>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">Loved by bold digital teams</div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6">
            <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
            <div className="mt-6">
              <div className="font-semibold text-slate-900">{item.name}</div>
              <div className="text-sm text-slate-500">{item.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
