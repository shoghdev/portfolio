import { Card, List, Timeline, Typography } from 'antd'
import { SectionReveal } from '../../common/SectionReveal'
import type { ExperienceSectionProps } from './types'

const { Title, Text } = Typography

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const timelineItems = [
    ...experience.map((entry) => ({
      color: '#16a34a' as const,
      children: (
        <div className="pf-experience-block">
          <Text className="pf-experience-period">{entry.period}</Text>
          <Title level={4} className="pf-experience-job-title">
            {entry.role}
          </Title>
          <Text className="pf-experience-company">{entry.company}</Text>
          <List
            size="small"
            split={false}
            className="pf-experience-list"
            dataSource={entry.highlights}
            renderItem={(item) => <List.Item className="pf-experience-list-item">{item}</List.Item>}
          />
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
    <SectionReveal id="experience" className="pf-section pf-section-main pf-exp-beside-about">
      <Card bordered={false} className="pf-surface-card pf-main-card pf-experience-card">
        <Title level={2} className="pf-card-title">
          Professional experience
        </Title>
        <Timeline className="pf-ant-timeline pf-experience-timeline pf-timeline-extended" items={timelineItems} />
      </Card>
    </SectionReveal>
  )
}
