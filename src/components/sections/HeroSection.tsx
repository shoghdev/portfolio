import { Button, Space, Typography } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import type { PortfolioData } from '../../types/portfolio'

type HeroSectionProps = Pick<PortfolioData, 'name' | 'role' | 'location' | 'tagline' | 'email'>

const { Title, Paragraph, Text } = Typography

export function HeroSection({ name, role, location, tagline, email }: HeroSectionProps) {
  return (
    <section id="hero" className="portfolio-section">
      <Space direction="vertical" size={8}>
        <Text type="secondary">{location}</Text>
        <Title level={1}>{name}</Title>
        <Title level={3} style={{ marginTop: 0 }}>
          {role}
        </Title>
        <Paragraph>{tagline}</Paragraph>
      </Space>
      <Button type="primary" icon={<MailOutlined />} href={`mailto:${email}`} size="large">
        Contact Me
      </Button>
    </section>
  )
}
