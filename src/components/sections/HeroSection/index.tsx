import { AuditOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Space, Typography } from 'antd'
import type { HeroSectionProps } from './types'
import { Link } from 'react-router-dom'

const { Title, Paragraph, Text } = Typography

export function HeroSection({ name, role, location, tagline, email }: HeroSectionProps) {
  return (
    <section id="hero" className="portfolio-section hero-section">
      <div className="hero-intro">
        <Text className="hero-kicker">{location}</Text>
        <Title level={1} className="hero-title">
           <span>Shogher</span> Harutyunyan
        </Title>
        <Paragraph className="hero-paragraph">
         {role} specializing in React, Node.js, and Laravel. {tagline}
        </Paragraph>
        <Row gutter={[12, 12]} className="hero-focus-grid">
          <Col xs={24} md={12}>
            <Card bordered={false} className="hero-focus-card">
              <Text className="hero-focus-kicker">The Engineer</Text>
              <Paragraph className="hero-focus-text">
                Building high-performance infrastructure with clean architecture and scalable frontend
                systems.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card bordered={false} className="hero-focus-card">
              <Text className="hero-focus-kicker">The Educator</Text>
              <Paragraph className="hero-focus-text">
                Turning complex programming and robotics concepts into practical learning experiences.
              </Paragraph>
            </Card>
          </Col>
        </Row>
        <Space size={10}>
          <Button type="primary" className="hero-primary-btn" href="/#projects">
            View Case Studies
          </Button>
          {email ? (
            <Button className="hero-secondary-btn" icon={<MailOutlined />} href={`mailto:${email}`}>
              Download CV
            </Button>
          ) : null}
          <Button className="hero-secondary-btn" href="/blog">
            Check out my notes
          </Button>
          <Button className="hero-secondary-btn" icon={<AuditOutlined />}>
            <Link to="/generate-cv">Generate CV</Link>
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
