import { Target, TrendingUp, Cloud, ShieldCheck, Users } from "lucide-react";

const goals = [
  { title: "Full-stack engineering", description: "Strengthen frontend, backend, API design, and software architecture skills.", icon: Target },
  { title: "Production-ready products", description: "Build useful applications with maintainable code, documentation, and reliable behavior.", icon: TrendingUp },
  { title: "Cloud & infrastructure", description: "Develop practical experience with AWS services, hosting, permissions, and monitoring.", icon: Cloud },
  { title: "Security & quality", description: "Improve testing, secure coding, accessibility, and performance optimization.", icon: ShieldCheck },
  { title: "Collaboration & open source", description: "Contribute to team projects, learn through code review, and share useful work.", icon: Users },
];

export default function ProfessionalGoals() {
  return (
    <section id="goals" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">What’s next</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Professional Goals</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Five areas I want to keep developing as I grow as a software engineer.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {goals.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="about-card p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-widest text-accent2">GOAL 0{index + 1}</span>
                <Icon className="text-accent2" size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
