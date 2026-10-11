import type {
  About,
  Blog,
  Certificate,
  Contact,
  Education,
  Experience,
  Hero,
  Profile,
  Project,
  Skill,
} from './types'

const hero: Hero = {
  badge: 'Available for select projects',
  title: 'I build fast, polished digital products.',
  subtitle:
    'I design and ship thoughtful web experiences that turn ideas into product-ready solutions for startups, teams, and growing businesses.',
  ctaPrimary: { label: 'View projects', to: '/projects' },
  ctaSecondary: { label: 'Book a call', to: '/contact' },
  stats: [
    { label: 'Years experience', value: '6+' },
    { label: 'Projects shipped', value: '30+' },
    { label: 'Design systems', value: '12' },
    { label: 'Clients served', value: '18' },
  ],
}

const profile: Profile = {
  name: 'Kapil Kumar Mahato',
  role: 'Product Designer & Full-Stack Developer',
  email: 'hello@kapilkumarmahato.dev',
  phone: '+9779806317090',
  location: 'Kalanki, Kathmandu, Nepal',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  bio: 'I help teams turn ambitious ideas into clear, measurable digital experiences.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/kapil-shah-570' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kapil-kumar-mahato' },
    { label: 'Facebook', url: '' },
    { label: 'Instagram', url: '' },
    { label: 'Twitter', url: '' },
    { label: 'Tiktok', url: '' },
    { label: 'Viber', url: '' },
    { label: 'WhatsApp', url: '' },
     { label: 'Discord', url: '' },
    { label: 'Telegram', url: '' },
    { label: 'Email', url: 'kapilmahato776@gmail.com' },
    
    
  ],
}

const skills: Skill[] = [
  {
    _id: 'skill-next',
    slug: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    icon: '⚛️',
    level: 96,
    summary: 'High-performance product interfaces and app architecture.',
    description: 'I build scalable, user-friendly interfaces with React and Next.js, optimizing for speed, accessibility, and maintainability.',
    yearsOfExperience: 5,
    highlights: ['App Router', 'Server components', 'Performance optimization'],
    tools: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    _id: 'skill-node',
    slug: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    icon: '🟢',
    level: 91,
    summary: 'Reliable API layers and delivery pipelines.',
    description: 'I design backend services that are secure, resilient, and easy to evolve as product requirements change.',
    yearsOfExperience: 4,
    highlights: ['REST APIs', 'JWT auth', 'Background jobs'],
    tools: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    _id: 'skill-design',
    slug: 'product-design',
    name: 'Product Design',
    category: 'Design',
    icon: '🎨',
    level: 92,
    summary: 'Design systems and polished customer journeys.',
    description: 'I connect strategy, UX, and UI into experiences that feel cohesive, intuitive, and conversion-focused.',
    yearsOfExperience: 6,
    highlights: ['Design systems', 'UX research', 'Wireframing'],
    tools: ['Figma', 'Framer', 'Principle', 'Notion'],
  },
  {
    _id: 'skill-ml',
    slug: 'machine-learning',
    name: 'ML & AI',
    category: 'Data',
    icon: '🤖',
    level: 78,
    summary: 'Working with models, prompts, workflow tooling, and analytics.',
    description: 'I prototype AI-assisted experiences and integrate predictive workflows into real product systems.',
    yearsOfExperience: 3,
    highlights: ['Prompt design', 'Evaluation loops', 'Data pipelines'],
    tools: ['Python', 'OpenAI', 'LangChain', 'Pinecone'],
  },
]

const projects: Project[] = [
  {
    _id: 'proj-signal',
    slug: 'signal-dashboard',
    title: 'Signal Dashboard',
    description: 'Analytics workspace for sales and product teams.',
    longDescription:
      'A unified dashboard connecting CRM, product engagement, and customer success metrics into one clear reporting surface. The product helped the team replace fragmented spreadsheets with a single decision-making hub.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['SaaS', 'Analytics', 'Design'],
    techStack: ['Next.js', 'PostgreSQL', 'Chart.js', 'Tailwind'],
    client: 'Northstar Labs',
    role: 'Lead Product Engineer',
    duration: '5 months',
    completedAt: '2025',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    _id: 'proj-zen',
    slug: 'zen-commerce',
    title: 'Zen Commerce',
    description: 'High-converting storefront experience for a wellness brand.',
    longDescription:
      'We redesigned the storefront to improve conversion, simplify the acquisition funnel, and increase retention with better browsing and personalization logic.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['E-commerce', 'UX', 'Brand'],
    techStack: ['React', 'Shopify', 'Framer Motion', 'Stripe'],
    client: 'Zen Ritual',
    role: 'Design & Frontend Lead',
    duration: '3 months',
    completedAt: '2024',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    _id: 'proj-flow',
    slug: 'flow-ops',
    title: 'Flow Ops',
    description: 'Internal operations platform for logistics coordination.',
    longDescription:
      'Built around team visibility, live status updates, and operational automation for a distributed field team managing service requests and route tracking.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Operations', 'Automation', 'Dashboard'],
    techStack: ['TypeScript', 'Node.js', 'Mapbox', 'React'],
    client: 'RouteOne',
    role: 'Full-stack Engineer',
    duration: '6 months',
    completedAt: '2023',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
]

const experiences: Experience[] = [
  {
    _id: 'exp-1',
    slug: 'senior-product-engineer',
    title: 'Senior Product Engineer',
    company: 'Northstar Labs',
    companyLogo: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=200&q=80',
    companyUrl: 'https://example.com',
    location: 'Remote',
    startDate: '2023',
    current: true,
    type: 'Full-time',
    summary: 'Leading product architecture and frontend systems for the growth platform.',
    description:
      'Owned the design and delivery of the internal product platform, with a focus on UX clarity, scalability, and measurable engagement improvements.',
    responsibilities: [
      'Defined architecture for customer-facing web applications.',
      'Built reusable UI patterns for product and marketing use cases.',
      'Mentored junior engineers and reviewed platform work.',
    ],
    achievements: ['Cut onboarding friction by 28%', 'Improved site speed by 35%'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Figma'],
  },
  {
    _id: 'exp-2',
    slug: 'ui-engineer',
    title: 'UI Engineer',
    company: 'Mosaic Studio',
    companyLogo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80',
    location: 'New York',
    startDate: '2021',
    endDate: '2023',
    type: 'Full-time',
    summary: 'Shaped product experiences for multiple SaaS and consumer facing brands.',
    description:
      'Worked directly with product and brand teams to translate strategy into product interfaces, design systems, and front-end execution.',
    responsibilities: ['Built reusable React components', 'Improved design consistency across products', 'Partnered with PMs on journey mapping'],
    achievements: ['Reduced support tickets by 19%', 'Scaled a design system to 4 products'],
    techStack: ['React', 'Storybook', 'Motion', 'Design Systems'],
  },
]

const blogs: Blog[] = [
  {
    _id: 'blog-1',
    slug: 'designing-faster-product-decisions',
    title: 'Designing Faster Product Decisions',
    excerpt: 'How to turn scattered opinions into a clear product rhythm.',
    content:
      'Great product decisions happen when teams align around a shared decision framework.\n\nStart with clear goals, surface trade-offs, and reduce noise before building. When teams can combine qualitative signals with simple metrics, momentum grows and debate turns into action.',
    cover: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
    date: '2025-04-02',
    published: true,
    author: 'Kapil Kumar Mahato',
    readingTime: 5,
    tags: ['Product', 'Strategy'],
  },
  {
    _id: 'blog-2',
    slug: 'nextjs-performance-checklist',
    title: 'A Next.js Performance Checklist',
    excerpt: 'Practical patterns that keep apps feeling fast and polished.',
    content:
      'Performance is often a product issue disguised as a technical one.\n\nStart by measuring real user journeys, then cut the slowest interactions first. Image optimization, streaming, and reducing client bundles can have outsized returns when applied deliberately.',
    cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    date: '2025-02-11',
    published: true,
    author: 'Kapil Kumar Mahato',
    readingTime: 6,
    tags: ['Next.js', 'Performance'],
  },
]

const about: About = {
  heading: 'I design vibrant digital experiences with a product mindset.',
  subheading: 'Designing systems, shipping products, and helping teams grow with clarity.',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
  paragraphs: [
    'I am a multidisciplinary designer and engineer who enjoys solving product problems at the intersection of product thinking, UX, and software craftsmanship.',
    'My work centers on turning ambiguous ideas into experiences people understand quickly and enjoy using. I focus on the fundamentals: clear communication, strong systems, and intentional product polish.',
  ],
  highlights: ['Design systems and product strategy', 'Frontend architecture and performance', 'Cross-functional team leadership'],
  mission: 'Build experiences that feel effortless for users and valuable for businesses.',
  vision: 'Create digital products that are not only beautiful but measurable, resilient, and easy to grow.',
  values: [
    { title: 'Clarity', description: 'A clear strategy makes stronger products.' },
    { title: 'Craft', description: 'I care deeply about the details users feel every day.' },
    { title: 'Velocity', description: 'Fast execution with strong systems keeps teams moving.' },
  ],
}

const educationData: Education = {
  heading: 'Education & learning',
  subheading: 'A foundation in systems thinking, design, and engineering.',
  timeline: [
    {
      degree: 'B.S. in Human-Centered Design',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startDate: '2014',
      endDate: '2018',
      description: 'Focused on interaction design, information architecture, and human-computer interaction.',
    },
  ],
  certificationsSummary: 'I continue learning through product design workshops, engineering sprints, and hands-on industry practice.',
}

const certificates: Certificate[] = [
  {
    _id: 'cert-1',
    slug: 'professional-product-design',
    title: 'Professional Product Design',
    issuer: 'Design Institute',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    description: 'Advanced study in digital product strategy, research synthesis, and interface systems.',
    skills: ['Product Strategy', 'UX', 'Design Systems'],
    credentialId: 'DI-2024-1042',
    credentialUrl: 'https://example.com',
  },
]

const contact: Contact = {
  heading: 'Let’s build the next chapter together',
  subheading: 'I usually reply within 24 hours.',
  email: 'kapilmahato776@gmail.com',
  phone: '+9779806317090  +9779702784098',
  address: 'Kalanki, Kathmandu, Nepal',
  officeHours: 'Sun–Fri, 9am–6pm PT',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kapil-kumar-mahato' },
    { label: 'GitHub', url: 'https://github.com/kapil-shah-570' },
    { label: 'Facebook', url: 'https://www.facebook.com/kapilmahato.samirmahato.3/' },
    { label: 'Instagram', url: 'https://www.instagram.com/kapilmahato776/' },
    { label: 'Twitter', url: '' },
    { label: 'Tiktok', url: 'https://www.tiktok.com/@kapilshah26' },
    { label: 'Viber', url: '' },
    { label: 'WhatsApp', url: '+9779806317090' },
     { label: 'Discord', url: '' },
    { label: 'Telegram', url: '+9718434249577' },
    { label: 'Email', url: 'mailto:kapilmahato776@gmail.com' },

  ],
  mapEmbed: 'https://www.google.com/maps?q=Kalanki%2C%20Kathmandu%2C%20Nepal&output=embed',
}

const portfolioData = {
  hero,
  profile,
  skills,
  projects,
  experiences,
  blogs,
  about,
  education: educationData,
  certificates,
  contact,
}

const normalizeResourcePath = (path: string) => path.replace(/^\/+|\/+$/g, '')

export async function serverGet<T>(path: string): Promise<T> {
  const key = normalizeResourcePath(path)
  const value = (portfolioData as Record<string, unknown>)[key]

  if (value === undefined) {
    return [] as T
  }

  return structuredClone(value) as T
}

export async function serverGetBySlug<T extends { slug: string }>(collection: string, slug: string): Promise<T | null> {
  const key = normalizeResourcePath(collection)
  const list = (portfolioData as Record<string, unknown>)[key]
  const items = Array.isArray(list) ? list : []
  return (items.find((item) => (item as { slug?: string }).slug === slug) as T | undefined) ?? null
}

export const api = {
  async get<T>(path: string): Promise<T> {
    return serverGet<T>(path)
  },
  async post<T>(path: string, payload: unknown): Promise<T> {
    void path
    return { ok: true, payload } as T
  },
}
