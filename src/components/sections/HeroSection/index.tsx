import { MailOutlined } from '@ant-design/icons'
import { Button, Space, Typography } from 'antd'
import type { HeroSectionProps } from './types'

const { Title, Paragraph, Text } = Typography

export function HeroSection({ name, role, location, tagline, email }: HeroSectionProps) {
  return (
    <section id="hero" className="portfolio-section hero-section">
      <div className="hero-intro">
        <Text className="hero-kicker">{location}</Text>
        <Title level={1} className="hero-title">
          Building the <span>Digital Atrium.</span>
        </Title>
        <Paragraph className="hero-paragraph">
          Full-Stack Developer &amp; Educator crafting high-performance digital infrastructure and
          empowering the next generation of engineers through mentorship and clean architecture.
          {` ${tagline}`}
        </Paragraph>
        <Space size={10}>
          <Button type="primary" className="hero-primary-btn">
            Start a Project
          </Button>
          <Button className="hero-secondary-btn" icon={<MailOutlined />} href={`mailto:${email}`}>
            Download CV
          </Button>
        </Space>
      </div>
      <div className="hero-portrait-card" aria-label={`${name} portrait`}>
        <div className="hero-portrait-overlay">
          <Title level={4} className="hero-portrait-name">
            {name}
          </Title>
          <Text className="hero-portrait-role">{role}</Text>
        </div>
      </div>
    </section>
  )
}
