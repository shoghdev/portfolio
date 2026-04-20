import { Card, Col, Row, Tag, Typography } from 'antd'
import type { SkillCategory } from '../../types/portfolio'

const { Title } = Typography

type SkillsSectionProps = {
  skills: SkillCategory[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="portfolio-section">
      <Title level={2}>Skills</Title>
      <Row gutter={[16, 16]}>
        {skills.map((category) => (
          <Col xs={24} md={8} key={category.title}>
            <Card title={category.title}>
              {category.items.map((skill) => (
                <Tag key={skill} style={{ marginBottom: 8 }}>
                  {skill}
                </Tag>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
