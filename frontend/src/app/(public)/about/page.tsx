import { serverGet } from '../../../lib/api'
import { PageHeader, Section } from '../../../components/ui'
import type { About, Profile } from '../../../lib/types'
import TechnicalSkills from '@/components/about_section/TechnicalSkills'
import DevelopmentWorkflow from '@/components/about_section/DevelopmentWorkflow'
import DevelopmentApproach from '@/components/about_section/DevelopmentApproach'
import ProjectsSection from '@/components/about_section/ProjectsSection'
import ServicesSection from '@/components/home_section/ServicesSection'
import ProfessionalGoals from '@/components/about_section/ProfessionalGoals'
// import ContactSection from '@/components/about_section/ContactSection'


export const metadata = { title: 'About — Portfolio' }

export default async function AboutPage() {
  const [about, profile] = await Promise.all([
    serverGet<About>('/about'),
    serverGet<Profile>('/profile'),
  ])

  return (
    <>
      <PageHeader eyebrow="About me" title={about.heading} subtitle={about.subheading || profile.role} />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
            <img
            src="/profile-picture.png"
            alt="Kapil Kumar Mahato, Full Stack Developer"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-center"
          />
          <div>
            {about.paragraphs?.map((p, i) => (
              <p key={i} className="mb-4 leading-7 text-slate-400">{p}</p>
            ))}

            {(about.highlights?.length ?? 0) > 0 && (
              <>
                <h4 className="mb-3 mt-6 font-semibold">What I bring</h4>
                <ul className="space-y-2">
                  {about.highlights?.map((h) => (
                    <li key={h} className="relative pl-6 text-slate-400 before:absolute before:left-0 before:font-bold before:text-accent2 before:content-['✓']">
                      {h}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </Section>

      {(about.mission || about.vision) && (
        <Section>
          <div className="grid gap-6 md:grid-cols-2">
            {about.mission && (
              <div className="panel">
                <h3 className="mb-2 font-semibold text-accent2">Mission</h3>
                <p className="text-slate-400 leading-7">{about.mission}</p>
              </div>
            )}
            {about.vision && (
              <div className="panel">
                <h3 className="mb-2 font-semibold text-accent">Vision</h3>
                <p className="text-slate-400 leading-7">{about.vision}</p>
              </div>
            )}
          </div>
        </Section>
      )}

      {(about.values?.length ?? 0) > 0 && (
        <Section title="What I value">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {about.values?.map((v) => (
              <div key={v.title} className="card p-5">
                <h4 className="font-semibold">{v.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{v.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}
      <TechnicalSkills />
      <DevelopmentWorkflow />
      <DevelopmentApproach />
      <ProjectsSection />
      <ServicesSection />
      <ProfessionalGoals />
      {/* <ContactSection /> */}
      
    </>
  )
}