import { Blocks, Gauge, LockKeyhole, BookOpenCheck, Wrench } from "lucide-react";

const principles = [
  { title: "Modular architecture", description: "Separate features into focused components, modules, and services that are easier to maintain.", icon: Blocks },
  { title: "Performance & usability", description: "Consider responsive layouts, loading speed, accessibility, and clear user journeys.", icon: Gauge },
  { title: "Security by design", description: "Apply appropriate input validation, authentication, authorization, and safe configuration.", icon: LockKeyhole },
  { title: "Testing & documentation", description: "Verify important behavior and document setup, APIs, and technical decisions.", icon: BookOpenCheck },
  { title: "Continuous improvement", description: "Use feedback, monitoring, and code review to identify and improve weak points.", icon: Wrench },
];

export default function DevelopmentApproach() {
  return (
    <section id="approach" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">Engineering principles</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">My Approach to Software Development</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-400">
          I believe great software balances functionality, usability, performance, security, and maintainability.
          My approach emphasizes thoughtful architecture and dependable delivery—not just writing code.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {principles.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="about-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-violet-200">
                <Icon size={24} />
              </div>
              <p className="mt-5 text-xs font-bold tracking-[0.2em] text-accent2">PRINCIPLE 0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
