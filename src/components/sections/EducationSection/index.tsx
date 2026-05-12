import { Card, Timeline, Typography } from 'antd'
import type { EducationSectionProps } from './types'

const { Title, Text } = Typography

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="pf-section pf-section-sidebar">
      <Card bordered={false} className="pf-surface-card pf-sidebar-card pf-education-card">
        <Title level={2} className="pf-sidebar-title">
          Education &amp; Certifications
        </Title>
        <Timeline
          className="pf-ant-timeline"
          items={education.map((entry) => ({
            color: '#32cd32',
            children: (
              <div className="pf-education-timeline-body">
                <Text className="pf-education-period">{entry.period}</Text>
                <Text className="pf-education-degree">{entry.title}</Text>
                <Text className="pf-education-school">{entry.institution}</Text>
              </div>
            ),
          }))}
        />
      </Card>
    </section>
  )
}
