export type SocialLink = {
  label: string
  url: string
}

export type Hero = {
  badge: string
  title: string
  subtitle: string
  ctaPrimary: { label: string; to: string }
  ctaSecondary: { label: string; to: string }
  stats: Array<{ label: string; value: string }>
}

export type Profile = {
  name: string
  role: string
  email: string
  phone?: string
  location?: string
  avatar?: string
  bio?: string
  socials?: SocialLink[]
}

export type Skill = {
  _id: string
  slug: string
  name: string
  category: string
  icon: string
  level: number
  summary?: string
  description?: string
  yearsOfExperience?: number
  highlights?: string[]
  tools?: string[]
}

export type Project = {
  _id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  image?: string
  featured?: boolean
  tags?: string[]
  techStack?: string[]
  gallery?: string[]
  client?: string
  role?: string
  duration?: string
  completedAt?: string
  liveUrl?: string
  repoUrl?: string
}

export type Blog = {
  _id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  cover?: string
  date: string
  published?: boolean
  author?: string
  readingTime?: number
  tags?: string[]
}

export type Experience = {
  _id: string
  slug: string
  title: string
  company: string
  companyLogo?: string
  companyUrl?: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  type: string
  summary?: string
  description?: string
  responsibilities?: string[]
  achievements?: string[]
  techStack?: string[]
}

export type About = {
  heading: string
  subheading?: string
  image?: string
  paragraphs?: string[]
  highlights?: string[]
  mission?: string
  vision?: string
  values?: Array<{ title: string; description: string }>
}

export type EducationEntry = {
  degree: string
  institution: string
  location?: string
  startDate: string
  endDate?: string
  logo?: string
  description?: string
}

export type Education = {
  heading: string
  subheading: string
  timeline?: EducationEntry[]
  certificationsSummary?: string
}

export type Certificate = {
  _id: string
  slug: string
  title: string
  issuer: string
  date: string
  image?: string
  description?: string
  skills?: string[]
  credentialId?: string
  credentialUrl?: string
}

export type Contact = {
  heading: string
  subheading: string
  email?: string
  phone?: string
  address?: string
  officeHours?: string
  socials?: SocialLink[]
  mapEmbed?: string
}
