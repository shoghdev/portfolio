import { MailOutlined } from '@ant-design/icons'
import { Button, Card, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { ContactSectionProps } from './types'

const { Title, Text, Link } = Typography

export function ContactSection({ email, socialProfiles }: ContactSectionProps) {
  const navigate = useNavigate()

  return (
    <section id="contact" className="pf-section pf-section-contact">
      <Card bordered={false} className="pf-surface-card pf-contact-card">
        <Title level={2} className="pf-section-title">
          Contact
        </Title>
        <Text className="pf-contact-lead">Have a project in mind? I would love to hear from you.</Text>
        {email ? (
          <div className="pf-contact-email-block">
            <MailOutlined className="pf-contact-email-icon" aria-hidden />
            <Link href={`mailto:${email}`} className="pf-contact-email-link">
              {email}
            </Link>
          </div>
        ) : null}
        <Space wrap className="pf-contact-social">
          {socialProfiles.map((item) => (
            <Button key={item.label} href={item.href} target="_blank" className="pf-contact-social-btn">
              {item.label}
            </Button>
          ))}
        </Space>
        <Button type="primary" size="large" className="pf-contact-cta-primary" onClick={() => void navigate('/get-in-touch')}>
          Let&apos;s Talk
        </Button>
      </Card>
    </section>
  )
}
