import { Card, Typography } from 'antd'
import { SectionReveal } from '../../common/SectionReveal'
import { SkillBadgeIcon } from './skillBadgeIcons'
import type { SkillsDetailSectionProps } from './types'

const { Title } = Typography

export function SkillsDetailSection({ technicalSkills }: SkillsDetailSectionProps) {
  const renderBadges = (suffix: string, isDuplicate: boolean) => (
    <div
      className={`pf-skill-marquee-group${isDuplicate ? ' pf-skill-marquee-group-duplicate' : ''}`}
      role={isDuplicate ? undefined : 'list'}
      aria-hidden={isDuplicate}
    >
      {technicalSkills.map((skill) => (
        <div key={`${skill.id}-${suffix}`} className="pf-skill-badge" role={isDuplicate ? undefined : 'listitem'}>
          <span className="pf-skill-badge-icon-wrap" aria-hidden>
            <SkillBadgeIcon skillId={skill.id} />
          </span>
          <span className="pf-skill-badge-label">{skill.label}</span>
        </div>
      ))}
    </div>
  )

  return (
    <SectionReveal id="skills" className="pf-section pf-section-main pf-skills-detail-wrap">
      <Card bordered={false} className="pf-surface-card pf-main-card pf-skills-badge-card">
        <Title level={2} className="pf-card-title">
          Skills
        </Title>
        <div className="pf-skill-marquee" aria-label="Technologies">
          <div className="pf-skill-marquee-track">
            {renderBadges('a', false)}
            {renderBadges('b', true)}
          </div>
        </div>
      </Card>
    </SectionReveal>
  )
}
