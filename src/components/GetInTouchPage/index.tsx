import {
  ArrowRightOutlined,
  MailOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons'
import { Button, Card, Col, Form, Input, Row, Space, Typography } from 'antd'
import { portfolioData } from '../../data/portfolio'

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

export function GetInTouchPage() {
  return (
    <section className="portfolio-section get-in-touch-page contact-collab-page">
      <Text className="experience-kicker">Contact</Text>
      <Title level={1} className="contact-collab-title">
        Let&apos;s Collaborate
      </Title>
      <Paragraph className="contact-collab-subtitle">
        Collaborate on sophisticated engineering architectures or develop high-impact technical
        curriculum. I&apos;m currently open to selective partnerships and strategic consultations.
      </Paragraph>

      <Row gutter={[18, 18]} align="stretch">
        <Col xs={24} lg={14}>
          <Card className="contact-collab-form-card">
            <Title level={3} className="contact-card-title">
              Inquiry Form
            </Title>
            <Text className="contact-card-note">Fields marked with * are required for follow-up.</Text>
            <Form layout="vertical" className="contact-collab-form">
              <Row gutter={10}>
                <Col xs={24} md={12}>
                  <Form.Item label="Full Name *" className="contact-form-item">
                    <Input placeholder="Jane Doe" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Email Address *" className="contact-form-item">
                    <Input type="email" placeholder="jane@studio.com" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Subject / Intent" className="contact-form-item">
                <Input placeholder="Project collaboration, educational workshop, etc." />
              </Form.Item>
              <Form.Item label="Your Message" className="contact-form-item">
                <TextArea rows={4} placeholder="Tell me about your vision or the specific challenge we're solving." />
              </Form.Item>
              <Button type="primary" className="contact-submit-btn" icon={<ArrowRightOutlined />}>
                Send Inquiry
              </Button>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Space direction="vertical" size={12} className="contact-collab-side">
            <Text className="contact-side-label">Direct Channels</Text>
            <Card className="contact-channel-card">
              <Space size={10}>
                <MailOutlined className="contact-channel-icon" />
                <div>
                  <Text className="contact-channel-title">Email</Text>
                  <br />
                  {portfolioData.email ? (
                    <a className="contact-channel-link" href={`mailto:${portfolioData.email}`}>
                      {portfolioData.email}
                    </a>
                  ) : (
                    <Text className="contact-page-empty">{portfolioData.email}</Text>
                  )}
                </div>
              </Space>
            </Card>

            <Card className="contact-channel-card">
              <Space align="start" size={10}>
                <SafetyCertificateOutlined className="contact-channel-icon" />
                <div>
                  <Title level={4} className="contact-channel-heading">
                    For Engineering Inquiries
                  </Title>
                  <Paragraph className="contact-channel-text">
                    Seeking technical leadership, cloud architecture, or full-stack engineering for
                    scale. Let&apos;s discuss system stability and architectural direction.
                  </Paragraph>
                </div>
              </Space>
            </Card>

            <Card className="contact-channel-card">
              <Space align="start" size={10}>
                <RocketOutlined className="contact-channel-icon" />
                <div>
                  <Title level={4} className="contact-channel-heading">
                    For Educational Programs
                  </Title>
                  <Paragraph className="contact-channel-text">
                    Custom curriculum design, immersive developer workshops, and pedagogical strategy.
                    Empowering teams through structured technical knowledge.
                  </Paragraph>
                </div>
              </Space>
            </Card>

            <Card className="contact-social-card">
              <Text className="contact-side-label">Featured Links</Text>
              <Space wrap size={8} className="contact-page-actions">
                {portfolioData.socialLinks.map((link) => (
                  <Button key={link.label} className="contact-social-btn" href={link.href} target="_blank">
                    {link.label}
                  </Button>
                ))}
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </section>
  )
}
