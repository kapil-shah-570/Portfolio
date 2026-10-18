import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

type HomepageBioProps = {
  name?: string;
  role?: string;
  bio?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeUrl?: string;
};

export default function HomepageBio({
  name = "Your Name",
  role = "Software Developer | Full-Stack Engineer",
  bio = "I'm a passionate software developer focused on modern web applications, backend APIs, and scalable digital solutions. I enjoy solving problems, learning new technologies, and turning ideas into reliable digital experiences.",
  githubUrl = "https://github.com/your-username",
  linkedinUrl = "https://www.linkedin.com/in/your-profile",
  resumeUrl = "/resume.pdf",
}: HomepageBioProps) {
  return (
    <section id="home" className="about-section relative overflow-hidden !py-24 lg:!py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="about-shell relative grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="about-kicker">Hello, I am</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">{name}<span className="text-accent2">.</span></h1>
          <h2 className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl">{role}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">{bio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="btn btn-primary">
              View my projects <ArrowRight size={17} />
            </Link>
            <Link href="#contact" className="btn btn-ghost">
              Contact me
            </Link>
            <a href={resumeUrl} download className="btn btn-ghost">
              <Download size={17} /> Resume
            </a>
          </div>
          <div className="mt-7 flex gap-4">
            <a aria-label="GitHub profile" href={githubUrl} target="_blank" rel="noreferrer" className="about-icon-link"><ArrowRight /></a>
            <a aria-label="LinkedIn profile" href={linkedinUrl} target="_blank" rel="noreferrer" className="about-icon-link"><ArrowRight /></a>
          </div>
        </div>
        <div className="about-card p-6 sm:p-8">
          <p className="about-kicker">My focus</p>
          <ul className="mt-6 space-y-4">
            {["Modern web applications", "Frontend & backend engineering", "Database design and API integration", "AWS and deployment workflows", "Learning and continuous improvement"].map((item, index) => (
              <li key={item} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <span className="text-sm font-black text-accent2">0{index + 1}</span>
                <span className="text-sm leading-6 text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
