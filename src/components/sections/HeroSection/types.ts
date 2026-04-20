import type { PortfolioData } from '../../../types/portfolio'

export type HeroSectionProps = Pick<
  PortfolioData,
  'name' | 'role' | 'location' | 'tagline' | 'email'
>
