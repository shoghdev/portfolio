import { Button, Space, Typography } from 'antd'
import type { SocialLink } from '../../types/portfolio'

const { Title, Paragraph, Text } = Typography

type ContactSectionProps = {
  email: string
  socialLinks: SocialLink[]
}

export function ContactSection({ email, socialLinks }: ContactSectionProps) {
  return (
    <section id="contact" className="portfolio-section">
      <Title level={2}>Contact</Title>
      <Paragraph>
        I am open to freelance, remote, and full-time frontend opportunities. Let us build
        something great together.
      </Paragraph>
      <Space direction="vertical" size={4} style={{ marginBottom: 16 }}>
        <Text strong>Email: </Text>
        <a href={`mailto:${email}`}>{email}</a>
      </Space>
      <Space wrap>
        {socialLinks.map((link) => (
          <Button key={link.label} href={link.href} target="_blank">
            {link.label}
          </Button>
        ))}
      </Space>
    </section>
  )
}
