import { Tag, Typography } from 'antd'
import type { SkillsSectionProps } from './types'

const { Title } = Typography

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="portfolio-section skills-strip">
      <Title level={5}>Skills, Languages, and Education</Title>
      <div className="skills-category-grid">
        {skills.map((category) => (
          <div key={category.title} className="skills-category-card">
            <Title level={5} className="skills-category-title">
              {category.title}
            </Title>
            <div className="skills-chip-row">
              {category.items.map((skill) => (
                <Tag key={`${category.title}-${skill}`} className="skills-tag">
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
