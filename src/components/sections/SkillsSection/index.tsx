import { Card, Col, Row, Typography } from 'antd'
import type { SkillsSectionProps } from './types'

const { Title, Text } = Typography

export function SkillsSection({ technicalSkills }: SkillsSectionProps) {
  return (
    <section id="skills" className="pf-section pf-section-sidebar">
      <Card bordered={false} className="pf-surface-card pf-sidebar-card pf-skills-card">
        <Title level={2} className="pf-sidebar-title">
          Technical Skills
        </Title>
        <Row gutter={[14, 14]}>
          {technicalSkills.map((skill) => {
            const mark = skill.shortLabel ?? skill.label.slice(0, 2)
            return (
              <Col key={skill.id} xs={12} sm={8}>
                <div className="pf-skill-tile">
                  <span className="pf-skill-tile-icon" aria-hidden="true">
                    {mark}
                  </span>
                  <Text className="pf-skill-tile-label">{skill.label}</Text>
                </div>
              </Col>
            )
          })}
        </Row>
      </Card>
    </section>
  )
}
