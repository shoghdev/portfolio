import type { PortfolioData } from '../../../types/portfolio'

export type HeroSectionProps = Pick<
  PortfolioData,
  'firstName' | 'lastName' | 'role' | 'email' | 'phone' | 'socialProfiles'
>
