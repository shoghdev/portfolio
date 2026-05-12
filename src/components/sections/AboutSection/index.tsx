import { DownloadOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { AboutSectionProps } from './types'

const { Title, Paragraph } = Typography

export function AboutSection({ about, aboutStack }: AboutSectionProps) {
  const navigate = useNavigate()
  const body = about.join(' ')

  return (
    <section id="about" className="pf-section pf-section-sidebar">
      <Card bordered={false} className="pf-surface-card pf-sidebar-card pf-about-card">
        <Title level={2} className="pf-sidebar-title">
          About me
        </Title>
        <Paragraph className="pf-about-body">{body}</Paragraph>
        <Button
          type="primary"
          size="large"
          icon={<DownloadOutlined />}
          className="pf-about-cv-btn"
          onClick={() => void navigate('/generate-cv')}
        >
          Download CV
        </Button>
        <div className="pf-about-stack pf-about-stack-logos" role="list" aria-label="Core technologies">
          {aboutStack.map((item) => {
            const mark = item.shortLabel ?? item.label.slice(0, 2)
            return (
              <div key={item.id} className="pf-about-logo-cell" role="listitem" title={item.label}>
                <span className="pf-about-logo-mark">{mark}</span>
                <span className="pf-about-logo-caption">{item.label}</span>
              </div>
            )
          })}
        </div>
      </Card>
    </section>
  )
}
