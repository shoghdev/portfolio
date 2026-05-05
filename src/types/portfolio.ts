export type SkillCategory = {
  title: string
  items: string[]
}

export type Project = {
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  repoUrl?: string
}

export type SocialLink = {
  label: string
  href: string
}

export type ExperienceEntry = {
  role: string
  company: string
  employmentType?: string
  period: string
  startYear: number
  endYearLabel: string
  highlights: string[]
}

export type PortfolioData = {
  name: string
  role: string
  location: string
  email: string
  tagline: string
  about: string[]
  skills: SkillCategory[]
  experience: ExperienceEntry[]
  projects: Project[]
  socialLinks: SocialLink[]
}
