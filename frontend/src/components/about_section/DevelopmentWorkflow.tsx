import { ClipboardList, PanelsTopLeft, Code2, GitBranch, ShieldCheck, Container, Cloud, Activity } from "lucide-react";

const workflow = [
  { number: "01", title: "Planning & Requirements", description: "Understand the problem, define requirements, identify users, and plan the features and architecture.", icon: ClipboardList },
  { number: "02", title: "UI/UX & Architecture", description: "Design intuitive interfaces, organize project structure, and plan database schemas and API contracts.", icon: PanelsTopLeft },
  { number: "03", title: "Development", description: "Build frontend components, backend services, database integrations, and application features.", icon: Code2 },
  { number: "04", title: "Version Control", description: "Use Git and GitHub to manage source code, track changes, create branches, and collaborate.", icon: GitBranch },
  { number: "05", title: "Testing & Optimization", description: "Debug issues, validate functionality, improve performance, and address security concerns.", icon: ShieldCheck },
  { number: "06", title: "Containerization & Automation", description: "Use Docker and, where appropriate, Kubernetes and CI/CD pipelines to standardize delivery.", icon: Container },
  { number: "07", title: "Cloud Deployment", description: "Deploy applications to suitable hosting or AWS infrastructure, configure environments, and verify production behavior.", icon: Cloud },
  { number: "08", title: "Monitoring & Maintenance", description: "Monitor application health, fix bugs, improve features, and maintain reliable deployments.", icon: Activity },
];

export default function DevelopmentWorkflow() {
  return (
    <section id="workflow" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">My process</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">My Development Workflow</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A structured approach that takes a project from its first idea through release and ongoing improvement.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="about-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black tracking-widest text-accent2">{step.number}</span>
                  <Icon aria-hidden="true" className="text-accent2" size={23} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
