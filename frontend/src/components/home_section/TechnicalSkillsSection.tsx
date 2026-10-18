const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'Responsive interfaces and user-friendly experiences.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend Development',
    description: 'API design, server logic, and application services.',
    skills: ['Node.js', 'Express.js', 'REST API', 'JWT', 'Authentication', 'Multer', 'Middleware'],
  },
  {
    title: 'Databases & Data Management',
    description: 'Data modeling, persistence, and structured application data.',
    skills: ['MongoDB', 'MongoDB Atlas', 'Firebase', 'PostgreSQL', 'Mongoose'],
  },
  {
    title: 'Cloud & Deployment',
    description: 'Hosting, environment setup, and production delivery.',
    skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'CloudFront', 'Route 53', 'CloudWatch'],
  },
  {
    title: 'DevOps & Workflow',
    description: 'Version control, automation, and deployment reliability.',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Nginx'],
  },
  {
    title: 'Additional Tools',
    description: 'Cross-platform and creative tech that broadens delivery.',
    skills: ['Flutter', 'Dart', 'Firebase', 'Java', 'Python', 'DSA', 'Three.js'],
  },
];

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" className="about-section">
      <div className="about-shell">
        <p className="about-kicker">Technical Skills</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Frontend, backend, databases, cloud and DevOps</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="about-card p-6">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300">
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
