const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive, and accessible user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    title: "Backend Development",
    description: "Developing server-side logic, APIs, authentication, and application services.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt", "API Integration", "Middleware", "Multer"],
  },
  {
    title: "Databases & Data Management",
    description: "Designing data models and managing application data.",
    skills: ["MongoDB", "MongoDB Atlas", "Firebase", "PostgreSQL", "Mongoose"],
  },
  {
    title: "Cloud Computing & AWS",
    description: "Cloud infrastructure, hosting, storage, deployment, and monitoring.",
    skills: ["AWS EC2", "AWS S3", "AWS IAM", "CloudFront", "Route 53", "CloudWatch", "Cloud Deployment"],
  },
  {
    title: "DevOps & Deployment",
    description: "Version control, containerization, automation, and application delivery.",
    skills: ["Git", "GitHub", "Docker", "Kubernetes (K8s)", "CI/CD", "GitHub Actions", "Linux", "Nginx"],
  },
  {
    title: "Mobile & Additional Technologies",
    description: "Mobile development, programming fundamentals, and visual experiences.",
    skills: ["Flutter", "Dart", "Firebase", "Java", "Python", "DSA", "Three.js", "GSAP"],
  },
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">Technical toolkit</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills & Tools</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Technologies I use to build interfaces, develop backend systems, manage data, and explore cloud deployment.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="about-card p-6"
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300 transition hover:border-accent2 hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-500">
          Edit the skill arrays to match your actual experience. You can label tools as proficient, familiar, or currently learning.
        </p>
      </div>
    </section>
  );
}
