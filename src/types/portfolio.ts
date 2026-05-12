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

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export type EducationEntry = {
  period: string
  title: string
  institution: string
}

export type TechHighlight = {
  id: string
  label: string
  /** Short mark shown in logo-style tiles (about stack uses grayscale). */
  shortLabel?: string
}

export type PortfolioData = {
  firstName: string
  lastName: string
  name: string
  role: string
  location: string
  email: string
  phone?: string
  /** Public URL path to a static CV file (e.g. `/Shogher-Harutyunyan-CV.pdf` in `public/`). */
  cvDownloadPath: string
  tagline: string
  about: string[]
  aboutStack: TechHighlight[]
  technicalSkills: TechHighlight[]
  education: EducationEntry[]
  testimonials: Testimonial[]
  skills: SkillCategory[]
  experience: ExperienceEntry[]
  projects: Project[]
  socialLinks: SocialLink[]
  socialProfiles: SocialLink[]
}
