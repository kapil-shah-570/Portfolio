// import { CTASection } from "@/components/home/CTASection";
// import { FeatureSection } from "@/components/home/FeatureSection";
// import { HomeSection } from "@/components/home/HomeScreen";
// import { Navbar } from "@/components/home/Navbar";
// import { ShowcaseSection } from "@/components/home/ShowcaseSection";
// import { TestimonialsSection } from "@/components/home/TestimonialsSection";

// export default function Home() {
//   return (
//     <main id="top" className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_40%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
//       <div className="mx-auto flex max-w-7xl flex-col">
//         <Navbar />
//         <HomeSection     />
//         <section id="about" className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
//           <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20">
//             <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About</p>
//             <h2 className="mt-4 text-3xl font-semibold text-white">I build fast, modern digital experiences for ambitious teams.</h2>
//             <p className="mt-4 text-lg leading-8 text-slate-400">
//               From polished frontends to scalable product experiences, I craft interfaces that feel professional, refined, and engineered for real users.
//             </p>
//           </div>
//           <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-8">
//             <div className="grid gap-4 sm:grid-cols-2">
//               {[
//                 ["Next.js", "React"],
//                 ["Tailwind", "UI Design"],
//                 ["Performance", "Optimization"],
//                 ["Product", "Strategy"],
//               ].map(([title, subtitle]) => (
//                 <div key={title} className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
//                   <div className="text-lg font-semibold text-white">{title}</div>
//                   <div className="mt-1 text-sm text-slate-400">{subtitle}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <FeatureSection />
//         <section id="projects" className="mt-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20 lg:p-12">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
//             <div>
//               <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
//               <h2 className="mt-3 text-3xl font-semibold text-white">Selected work with clarity, motion, and impact.</h2>
//             </div>
//             <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">UI • Frontend • Product</div>
//           </div>
//           <div className="mt-8 grid gap-5 md:grid-cols-3">
//             {[
//               { title: "Aurora Platform", text: "A premium SaaS interface with focused product storytelling." },
//               { title: "Nova Commerce", text: "Modern e-commerce experience built for conversion and speed." },
//               { title: "Lumen Studio", text: "Flexible creative landing site designed for high-end launches." },
//             ].map((item) => (
//               <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
//                 <div className="mb-5 h-24 rounded-[1rem] bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20" />
//                 <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//                 <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//         <ShowcaseSection />
//         <TestimonialsSection />
//         <section id="contact" className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(167,139,250,0.16))] p-8 shadow-2xl shadow-cyan-500/10 lg:p-12">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//             <div>
//               <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Contact</p>
//               <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s build something standout together.</h2>
//               <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-200">Open for freelance work, product collaborations, and high-quality frontend builds.</p>
//             </div>
//             <a href="mailto:hello@developer.dev" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">
//               hello@developer.dev
//             </a>
//           </div>
//         </section>
//         <CTASection />
//       </div>
//     </main>
//   );
// }










// import { CTASection } from "@/components/home/CTASection";
// import { FeatureSection } from "@/components/home/FeatureSection";
// import { HomeSection } from "@/components/home/HomeScreen";
// import { Navbar } from "@/components/home/Navbar";
// import { ShowcaseSection } from "@/components/home/ShowcaseSection";
// import { TestimonialsSection } from "@/components/home/TestimonialsSection";

// export default function Home() {
//   return (
//     <main 
//       id="top" 
//       className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_40%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)] px-2 py-6 text-slate-100 sm:px-4 lg:px-6"
//     >
//       <div className="mx-auto flex max-w-7xl flex-col">
//         <Navbar />
//         <HomeSection />
        
//         <section id="about" className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
//           <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20">
//             <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About</p>
//             <h2 className="mt-4 text-3xl font-semibold text-white">I build fast, modern digital experiences for ambitious teams.</h2>
//             <p className="mt-4 text-lg leading-8 text-slate-400">
//               From polished frontends to scalable product experiences, I craft interfaces that feel professional, refined, and engineered for real users.
//             </p>
//           </div>
//           <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-8">
//             <div className="grid gap-4 sm:grid-cols-2">
//               {[
//                 ["Next.js", "React"],
//                 ["Tailwind", "UI Design"],
//                 ["Performance", "Optimization"],
//                 ["Product", "Strategy"],
//               ].map(([title, subtitle]) => (
//                 <div key={title} className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
//                   <div className="text-lg font-semibold text-white">{title}</div>
//                   <div className="mt-1 text-sm text-slate-400">{subtitle}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
        
//         <FeatureSection />
        
//         <section id="projects" className="mt-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20 lg:p-12">
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
//             <div>
//               <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
//               <h2 className="mt-3 text-3xl font-semibold text-white">Selected work with clarity, motion, and impact.</h2>
//             </div>
//             <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">UI • Frontend • Product</div>
//           </div>
//           <div className="mt-8 grid gap-5 md:grid-cols-3">
//             {[
//               { title: "Aurora Platform", text: "A premium SaaS interface with focused product storytelling." },
//               { title: "Nova Commerce", text: "Modern e-commerce experience built for conversion and speed." },
//               { title: "Lumen Studio", text: "Flexible creative landing site designed for high-end launches." },
//             ].map((item) => (
//               <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
//                 <div className="mb-5 h-24 rounded-[1rem] bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20" />
//                 <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//                 <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </section>
        
//         <ShowcaseSection />
//         <TestimonialsSection />
        
//         <section id="contact" className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(167,139,250,0.16))] p-8 shadow-2xl shadow-cyan-500/10 lg:p-12">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//             <div>
//               <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Contact</p>
//               <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s build something standout together.</h2>
//               <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-200">Open for freelance work, product collaborations, and high-quality frontend builds.</p>
//             </div>
//             <a href="mailto:hello@developer.dev" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">
//               hello@developer.dev
//             </a>
//           </div>
//         </section>
        
//         <CTASection />
//       </div>
//     </main>
//   );
// }








import { CTASection } from "@/components/home/CTASection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { HomeSection } from "@/components/home/HomeScreen";
import { Navbar } from "@/components/home/Navbar";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_40%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)] px-2 py-6 text-slate-100 sm:px-4 lg:px-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col">
        <Navbar />
        <HomeSection />
        <section id="about" className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">I build fast, modern digital experiences for ambitious teams.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              From polished frontends to scalable product experiences, I craft interfaces that feel professional, refined, and engineered for real users.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Next.js", "React"],
                ["Tailwind", "UI Design"],
                ["Performance", "Optimization"],
                ["Product", "Strategy"],
              ].map(([title, subtitle]) => (
                <div key={title} className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
                  <div className="text-lg font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm text-slate-400">{subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FeatureSection />

        <section id="projects" className="mt-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20 lg:p-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Selected work with clarity, motion, and impact.</h2>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">UI • Frontend • Product</div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { title: "Aurora Platform", text: "A premium SaaS interface with focused product storytelling." },
              { title: "Nova Commerce", text: "Modern e-commerce experience built for conversion and speed." },
              { title: "Lumen Studio", text: "Flexible creative landing site designed for high-end launches." },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
                <div className="mb-5 h-24 rounded-[1rem] bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ShowcaseSection />
        <TestimonialsSection />

        <section id="contact" className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(167,139,250,0.16))] p-8 shadow-2xl shadow-cyan-500/10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s build something standout together.</h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-200">Open for freelance work, product collaborations, and high-quality frontend builds.</p>
            </div>
            <a href="mailto:hello@developer.dev" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">
              hello@developer.dev
            </a>
          </div>
        </section>

        <CTASection />
      </div>
    </main>
  );
}