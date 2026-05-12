import {
  FileTextOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
import { Col, Divider, Row, Space, Typography } from 'antd'
import { Link as RouterLink } from 'react-router-dom'
import type { HeroSectionProps } from './types'
import heroPortrait from '../../../assets/hero.png'

const { Title, Text, Link } = Typography

export function HeroSection({ firstName, lastName, role, email, phone, socialProfiles }: HeroSectionProps) {
  const github = socialProfiles.find((l) => l.label.toLowerCase().includes('github'))
  const linkedin = socialProfiles.find((l) => l.label.toLowerCase().includes('linkedin'))

  const socialSplit = <Divider type="vertical" className="pf-hero-social-divider" />

  return (
    <section id="hero" className="pf-section pf-hero">
      <span className="pf-hero-bg-word" aria-hidden="true">
        HELLO
      </span>
      <Row gutter={[32, 28]} align="middle" className="pf-hero-grid">
        <Col xs={24} lg={14} xl={15} className="pf-hero-copy">
          <Text className="pf-hero-greeting">Hello! 👋</Text>
          <Title level={1} className="pf-hero-title">
            <span className="pf-hero-title-line">
              <span className="pf-hero-name-dark">{firstName}</span>{' '}
              <span className="pf-hero-name-accent">{lastName}</span>
            </span>
          </Title>
          <Text className="pf-hero-role">{role}</Text>
          <Space direction="vertical" size={10} className="pf-hero-contact-block">
            {email ? (
              <Link className="pf-hero-contact-link" href={`mailto:${email}`}>
                <MailOutlined className="pf-hero-contact-icon" aria-hidden />
                {email}
              </Link>
            ) : null}
            {phone ? (
              <Link className="pf-hero-contact-link" href={`tel:${phone.replace(/\s/g, '')}`}>
                <PhoneOutlined className="pf-hero-contact-icon" aria-hidden />
                {phone}
              </Link>
            ) : null}
          </Space>
          {github || linkedin ? (
            <Space split={socialSplit} size={12} wrap className="pf-hero-social-row">
              {github ? (
                <Link href={github.href} target="_blank" rel="noreferrer" className="pf-hero-social-link">
                  <GithubOutlined className="pf-hero-social-link-icon" aria-hidden />
                  GitHub
                </Link>
              ) : null}
              {linkedin ? (
                <Link href={linkedin.href} target="_blank" rel="noreferrer" className="pf-hero-social-link">
                  <LinkedinOutlined className="pf-hero-social-link-icon" aria-hidden />
                  LinkedIn
                </Link>
              ) : null}
            </Space>
          ) : null}
          <div className="pf-hero-cv-row">
            <RouterLink to="/generate-cv" className="pf-hero-cv-link">
              <FileTextOutlined aria-hidden />
              Generate CV
            </RouterLink>
          </div>
        </Col>
        <Col xs={24} lg={10} xl={9} className="pf-hero-visual-col">
          <div className="pf-hero-visual-inner">
            <div className="pf-hero-visual-panel" aria-hidden="true" />
            <div className="pf-hero-photo-frame">
              <img
                src={heroPortrait}
                alt="Portrait of Shogher Harutyunyan"
                className="pf-hero-photo"
                width={420}
                height={520}
              />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}
