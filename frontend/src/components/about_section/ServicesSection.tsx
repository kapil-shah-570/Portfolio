import { AppWindow, Code2, Database, Palette, Rocket } from "lucide-react";

const services = [
  { title: "Website Development", description: "Responsive portfolio websites, landing pages, and business websites.", icon: AppWindow },
  { title: "Web Application Development", description: "Interactive dashboards, admin panels, and full-stack web applications.", icon: Code2 },
  { title: "API & Backend Development", description: "REST APIs, authentication flows, backend logic, and database integration.", icon: Database },
  { title: "UI Implementation", description: "Convert designs into polished interfaces using Next.js and Tailwind CSS.", icon: Palette },
  { title: "Deployment Support", description: "Configure production builds, environment variables, hosting, and release workflows.", icon: Rocket },
];

export default function ServicesSection() {
  return (
    <section id="services" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">What I can do</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">Update these service cards to reflect the work you actually offer.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="about-card p-6">
              <div className="flex items-center justify-between">
                <Icon className="text-accent2" size={26} />
                <span className="text-xs font-bold tracking-widest text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
