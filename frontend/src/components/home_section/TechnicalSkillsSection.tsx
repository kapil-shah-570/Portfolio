

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Responsive interfaces, modern UI architecture, and accessible digital experiences.",
    icon: "◈",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Scalable server-side logic, secure authentication, and robust API development.",
    icon: "⌘",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Authentication",
      "Multer",
      "Middleware",
    ],
  },
  {
    number: "03",
    title: "Databases & Data Management",
    description:
      "Data modeling, database integration, and reliable application data management.",
    icon: "◉",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Firebase",
      "PostgreSQL",
      "Mongoose",
    ],
  },
  {
    number: "04",
    title: "Cloud & Deployment",
    description:
      "Cloud infrastructure, hosting environments, and production-ready delivery.",
    icon: "☁",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "CloudFront",
      "Route 53",
      "CloudWatch",
    ],
  },
  {
    number: "05",
    title: "DevOps & Workflow",
    description:
      "Version control, containerization, automation, and deployment workflows.",
    icon: "⌘",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Nginx",
    ],
  },
  {
    number: "06",
    title: "Additional Tools",
    description:
      "Cross-platform application development, programming fundamentals, and 3D experiences.",
    icon: "✳",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "Java",
      "Python",
      "DSA",
      "Three.js",
    ],
  },
];

export default function TechnicalSkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="about-section relative isolate overflow-hidden"
    >
      <div className="about-shell">
        <header className="max-w-3xl">
          <h2
            id="skills-heading"
            className="text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl"
          >
            Frontend, backend, databases,
            <br className="hidden sm:block" /> cloud and{" "}
            <span className="text-accent2">DevOps.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Building responsive digital experiences, reliable backend
            systems, and scalable applications with modern technologies
            and development tools.
          </p>
        </header>

        {/* Skills grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="about-card group relative flex h-full flex-col overflow-hidden p-6 sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transform-none"
              />

              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-xl text-violet-200 transition-colors duration-300 group-hover:border-accent2/50 group-hover:bg-accent2/10 group-hover:text-cyan-200 motion-reduce:transition-none">
                  <span aria-hidden="true">{group.icon}</span>
                </div>

                <span className="font-mono text-xs tracking-wider text-slate-500">
                  {group.number} / 06
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight sm:text-xl">
                {group.title}
              </h3>

              <p className="mt-2 min-h-[3rem] text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-border bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-accent2/50 hover:bg-accent/10 hover:text-cyan-200 sm:text-[13px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
