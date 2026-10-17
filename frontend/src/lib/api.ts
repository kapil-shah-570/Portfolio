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

const skills: Skill[] = []
const projects: Project[] = []
const experiences: Experience[] = []
const blogs: Blog[] = []

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
