import { Tag, Typography } from 'antd'
import type { SkillsSectionProps } from './types'

const { Title } = Typography

export function SkillsSection({ skills }: SkillsSectionProps) {
  const allSkills = skills.flatMap((category) => category.items)

  return (
    <section id="skills" className="portfolio-section skills-strip">
      <Title level={5}>MASTERED TECHNOLOGIES</Title>
      <div className="skills-chip-row">
        {allSkills.slice(0, 8).map((skill) => (
          <Tag key={skill} className="skills-tag">
            {skill}
          </Tag>
        ))}
      </div>
    </section>
  )
}
