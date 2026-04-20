import { Button, Space, Typography } from 'antd'
import type { ContactSectionProps } from './types'

const { Title, Text } = Typography

export function ContactSection({ email, socialLinks }: ContactSectionProps) {
  return (
    <section id="contact" className="portfolio-section contact-section">
      <Title level={4}>Let&apos;s Build Something Meaningful</Title>
      <Space size={8} className="contact-email-stack">
        <Text>Email:</Text>
        <a href={`mailto:${email}`}>{email}</a>
      </Space>
      <Space wrap className="contact-social-actions">
        {socialLinks.map((link) => (
          <Button key={link.label} href={link.href} target="_blank" className="contact-social-btn">
            {link.label}
          </Button>
        ))}
      </Space>
    </section>
  )
}
