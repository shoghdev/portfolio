import type { ExperienceEntry, Project } from '../../../types/portfolio'
import { AnimatedCounter } from '../../common/AnimatedCounter'
import { SectionReveal } from '../../common/SectionReveal'

type StatsSectionProps = {
  experience: ExperienceEntry[]
  projects: Project[]
}

function getYearsOfExperience(experience: ExperienceEntry[]) {
  const startYear = Math.min(...experience.map((e) => e.startYear))
  const currentYear = new Date().getFullYear()
  return Math.max(1, currentYear - startYear)
}

export function StatsSection({ experience, projects }: StatsSectionProps) {
  const years = getYearsOfExperience(experience)
  const companies = experience.length

  return (
    <SectionReveal className="surface grid gap-4 px-6 py-6 lg:col-span-2 lg:grid-cols-3 lg:gap-0" delay={0.06}>
      <div className="grid place-items-center gap-1 text-center">
        <div className="text-[38px] font-bold leading-none text-brand-600 dark:text-brand-400">
          <AnimatedCounter target={years} />
        </div>
        <div className="text-[12px] font-medium text-emerald-900/60 dark:text-emerald-50/60">
          Years Experience
        </div>
      </div>

      <div className="grid place-items-center gap-1 border-y border-emerald-500/15 py-4 text-center lg:border-x lg:border-y-0 lg:py-0">
        <div className="text-[38px] font-bold leading-none text-brand-600 dark:text-brand-400">
          <AnimatedCounter target={projects.length} />
        </div>
        <div className="text-[12px] font-medium text-emerald-900/60 dark:text-emerald-50/60">
          Projects Completed
        </div>
      </div>

      <div className="grid place-items-center gap-1 text-center">
        <div className="text-[38px] font-bold leading-none text-brand-600 dark:text-brand-400">
          <AnimatedCounter target={companies} />
        </div>
        <div className="text-[12px] font-medium text-emerald-900/60 dark:text-emerald-50/60">
          Organizations
        </div>
      </div>
    </SectionReveal>
  )
}

