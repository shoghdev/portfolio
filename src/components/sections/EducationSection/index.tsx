import { Card, Timeline, Typography } from 'antd'
import { SectionReveal } from '../../common/SectionReveal'
import type { EducationSectionProps } from './types'

const { Title, Text } = Typography

export function EducationSection({ education }: EducationSectionProps) {
  const timelineItems = [
    ...education.map((entry) => ({
      color: '#16a34a' as const,
      children: (
        <div className="pf-education-timeline-body">
          <Text className="pf-education-period">{entry.period}</Text>
          <Text className="pf-education-degree">{entry.title}</Text>
          <Text className="pf-education-school">{entry.institution}</Text>
        </div>
      ),
    })),
    {
      color: '#16a34a' as const,
      dot: <span className="pf-timeline-end-cap" aria-hidden />,
      children: <div className="pf-timeline-end-node" aria-hidden />,
    },
  ]

  return (
    <SectionReveal id="education" className="pf-section pf-section-main">
      <Card bordered={false} className="pf-surface-card pf-main-card pf-education-card">
        <Title level={2} className="pf-card-title">
          Education &amp; Certifications
        </Title>
        <Timeline className="pf-ant-timeline pf-timeline-extended" items={timelineItems} />
      </Card>
    </SectionReveal>
  )
}
