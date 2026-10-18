import {  Mail, ArrowUpRight } from "lucide-react";

const contactItems = [
  "Discuss a web or mobile application idea.",
  "Connect about development opportunities.",
  "Collaborate on a project or open-source work.",
  "Ask about the technologies used in my projects.",
  "Share feedback or professional suggestions.",
];

type ContactSectionProps = {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export default function ContactSection({
  email = "your.email@example.com",
  githubUrl = "https://github.com/your-username",
  linkedinUrl = "https://www.linkedin.com/in/your-profile",
}: ContactSectionProps) {
  return (
    <section id="contact" className="about-section">
      <div className="about-shell about-card p-7 sm:p-10 lg:p-14">
        <p className="about-kicker">Get in touch</p>
        <div className="mt-3 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lets Build Something Meaningful</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Have a project idea, collaboration opportunity, or question? Send me an email and lets connect.
            </p>
            <a href={`mailto:${email}`} className="btn btn-primary mt-7">
              <Mail size={18} /> Email me <ArrowUpRight size={16} />
            </a>
            <div className="mt-6 flex gap-5 text-sm text-slate-300">
              <a href={githubUrl} target="_blank" rel="noreferrer" className="about-link inline-flex items-center gap-2"><ArrowUpRight size={17} /> GitHub</a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="about-link inline-flex items-center gap-2"><ArrowUpRight size={17} /> LinkedIn</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Feel free to reach out to</h3>
            <ul className="mt-5 space-y-4">
              {contactItems.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="text-accent2">✦</span>{item}</li>)}
            </ul>
            <p className="mt-6 break-words text-sm text-slate-400">{email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
