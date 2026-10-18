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
    { label: 'Years experience', value: '1+' },
    { label: 'Projects shipped', value: '6+' },
    { label: 'Design systems', value: '5' },
    { label: 'Clients served', value: '6' },
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

const skills: Skill[] = []
const projects: Project[] = []
const experiences: Experience[] = []
const blogs: Blog[] = []

const about: About = {
  heading: 'I design vibrant digital experiences with a product mindset.',
  subheading: 'Designing systems, shipping products, and helping teams grow with clarity.',
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
  paragraphs: [
    'I am a passionate Software Developer focused on building modern, scalable, responsive, and high-performance web applications. I enjoy transforming ideas into functional digital experiences by combining clean code, thoughtful UI/UX design, robust backend architecture, and modern development technologies.My development expertise includes frontend engineering, backend development, full-stack web applications, REST API integration, database management, authentication systems, and responsive interface design. I work with technologies such as HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, and MongoDB to develop reliable and maintainable applications.Beyond application development, I explore cloud computing, AWS deployment, DevOps practices, containerization with Docker, Kubernetes orchestration, and CI/CD automation. I use Git and GitHub for version control, collaboration, source code management, and project tracking, while focusing on improving application reliability and deployment workflows.I am committed to continuous learning, solving challenging technical problems, writing maintainable code, and exploring emerging technologies. My goal is to engineer meaningful digital solutions that combine performance, usability, security, and scalability.',
  ],
  highlights: ['Design systems and product strategy', 'Frontend architecture and performance', 'Cross-functional team leadership'],
  mission: 'To design, develop, and deploy meaningful digital solutions by combining modern software engineering, creative problem-solving, clean architecture, and continuous learning. My mission is to turn complex ideas into practical, secure, efficient, and user-friendly applications.',
  vision: 'To become a highly skilled software engineer capable of architecting and delivering scalable digital products, contributing to innovative projects, and building reliable applications that make a meaningful impact on businesses and users worldwide.',
  values: [
    { title: 'Clean Code & Engineering Excellence', description: 'I strive to write readable, reusable, maintainable, and efficient code while following appropriate software engineering principles.' },
    { title: 'Innovation & Creativity', description: 'I explore new ideas, modern frameworks, and innovative approaches to solve real-world problems.' },
    { title: 'Continuous Learning', description: 'I continuously improve my technical knowledge by exploring emerging technologies, experimenting with tools, and building projects.' },
    {title:'Security & Reliability', description:'I prioritize security, reliability, and performance in all applications I develop, ensuring they meet industry standards and best practices.'},
    {title:'Collaboration & Communication ', description:'I believe in teamwork, transparent communication, knowledge sharing, and constructive feedback.'},
    {title:'Problem-Solving & Ownership', description:'I take ownership of challenges, analyze problems, and implement effective solutions while learning from mistakes and iterating on improvements.'},
  ],
}

const educationData: Education = {
  heading: 'Education',
  subheading: '',
  timeline: [],
}

const certificates: Certificate[] = []

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
    { label: 'Tiktok', url: 'https://www.tiktok.com/@kapilshah26' },
    { label: 'WhatsApp', url: '+9779806317090' },
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

const apiCollectionFor = (key: string) => key === 'education' ? 'educations' : key

async function serverGetFromApi<T>(key: string): Promise<T> {
  const collection = apiCollectionFor(key)
  const baseUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
  const response = await fetch(`${baseUrl.replace(/\/+$/, '')}/api/${collection}`, { cache: 'no-store' })
  if (!response.ok) throw new Error(`Portfolio API returned ${response.status} for "${collection}".`)
  const records: unknown = await response.json()
  if (!Array.isArray(records)) throw new Error(`Portfolio API returned invalid data for "${collection}".`)

  if (key === 'education') {
    const fallback = portfolioData.education
    return {
      ...fallback,
      timeline: records.map((record) => {
        const entry = record as Record<string, unknown>
        return {
          _id: entry._id,
          slug: entry.slug,
          degree: entry.degree,
          institution: entry.institution,
          location: entry.location,
          startDate: entry.startDate,
          endDate: entry.endDate,
          logo: entry.logo,
          description: entry.description,
        }
      }),
    } as T
  }
  return records as T
}

export async function serverGet<T>(path: string): Promise<T> {
  const key = normalizeResourcePath(path)
  if (['blogs', 'certificates', 'skills', 'projects', 'experiences', 'education', 'educations'].includes(key)) {
    try {
      return await serverGetFromApi<T>(key)
    } catch (error) {
      console.error(`Unable to load "${key}" from the portfolio API. Using empty portfolio data.`, error)
    }
  }
  const value = (portfolioData as Record<string, unknown>)[key]

  if (value === undefined) {
    return [] as T
  }

  return structuredClone(value) as T
}

export async function serverGetBySlug<T extends { slug: string }>(collection: string, slug: string): Promise<T | null> {
  const key = normalizeResourcePath(collection)
  const list = await serverGet<T[]>(key)
  const items = Array.isArray(list) ? list : []
  return (items.find((item) => (item as { slug?: string }).slug === slug) as T | undefined) ?? null
}

export const api = {
  async get<T>(path: string): Promise<T> {
    return serverGet<T>(path)
  },
  async post<T>(path: string, payload: unknown): Promise<T> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
    const endpoint = path.replace(/^\/+/, '')
    let response: Response
    try {
      response = await fetch(`${baseUrl.replace(/\/+$/, '')}/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch {
      throw new Error('Could not reach the contact service. Please try again later.')
    }
    const result = await response.json().catch(() => ({})) as { error?: string } & T
    if (!response.ok) throw new Error(result.error || 'Your message could not be sent. Please try again.')
    return result
  },
}
