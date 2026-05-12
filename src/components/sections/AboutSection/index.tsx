import { DownloadOutlined, FileTextOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { SectionReveal } from '../../common/SectionReveal'
import type { AboutSectionProps } from './types'

const { Title, Paragraph } = Typography

export function AboutSection({ about, cvDownloadPath }: AboutSectionProps) {
  const navigate = useNavigate()
  const body = about.join(' ')
  const downloadFileName = cvDownloadPath.split('/').pop() ?? 'cv.pdf'

  return (
    <SectionReveal id="about" className="pf-section pf-about-beside-exp">
      <Card bordered={false} className="pf-surface-card pf-main-card pf-about-card pf-about-card-inline">
        <Title level={2} className="pf-card-title pf-about-inline-title">
          About me
        </Title>
        <Paragraph className="pf-about-body pf-about-body-compact">{body}</Paragraph>
        <div className="pf-about-cv-actions pf-about-cv-btn">
          <Button
            type="primary"
            size="large"
            icon={<FileTextOutlined />}
            className="pf-primary-pill-btn pf-about-generate-btn"
            onClick={() => void navigate('/generate-cv')}
          >
            Generate CV
          </Button>
          <Button
            type="default"
            size="large"
            icon={<DownloadOutlined />}
            className="pf-about-download-btn"
            href={cvDownloadPath}
            download={downloadFileName}
          >
            Download CV
          </Button>
        </div>
      </Card>
    </SectionReveal>
  )
}
