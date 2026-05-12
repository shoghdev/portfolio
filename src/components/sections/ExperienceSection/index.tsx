import { ExportOutlined } from '@ant-design/icons'
import { Button, Card, List, Timeline, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { ExperienceSectionProps } from './types'

const { Title, Text } = Typography

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const navigate = useNavigate()

  return (
    <section id="experience" className="pf-section pf-section-main">
      <Card bordered={false} className="pf-surface-card pf-main-card pf-experience-card">
        <Title level={2} className="pf-card-title">
          Professional Experience
        </Title>
        <Timeline
          className="pf-ant-timeline pf-experience-timeline"
          items={experience.map((entry) => ({
            color: '#32cd32',
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
          }))}
        />
        <Button
          type="primary"
          size="large"
          icon={<ExportOutlined />}
          className="pf-experience-cta"
          onClick={() => void navigate('/#projects')}
        >
          View Projects
        </Button>
      </Card>
    </section>
  )
}
