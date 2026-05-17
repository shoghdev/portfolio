import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import { Col, Divider, Row, Space, Typography } from 'antd'
import type { HeroSectionProps } from './types'
import heroPortrait from '../../../assets/hero-video.mp4'

import { useRef, useState } from 'react'

const { Title, Text, Link } = Typography

export function HeroSection({ firstName, lastName, role, email, socialProfiles }: HeroSectionProps) {
  const github = socialProfiles.find((l) => l.label.toLowerCase().includes('github'))
  const linkedin = socialProfiles.find((l) => l.label.toLowerCase().includes('linkedin'))

  const socialSplit = <Divider type="vertical" className="pf-hero-social-divider" />

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <section id="hero" className="pf-section pf-hero ">
      <span className="pf-hero-bg-dots" aria-hidden="true" />
      <Row gutter={[40, 32]} align="middle" className="pf-hero-grid">
        <Col xs={24} lg={14} xl={15} className="pf-hero-copy">
          <div className="pf-hero-intro">
            <Text className="pf-hero-greeting">Hello! 👋</Text>
            <Title level={1} className="pf-hero-title">
              <span className="pf-hero-title-line">
                <span className="pf-hero-name-dark">{firstName}</span>{' '}
                <span className="pf-hero-name-accent">{lastName}</span>
              </span>
            </Title>
            <Text className="pf-hero-role">{role}</Text>
          </div>
          <Space direction="vertical" size={10} className="pf-hero-contact-block">
            {email ? (
              <Link className="pf-hero-contact-link" href={`mailto:${email}`}>
                <MailOutlined className="pf-hero-contact-icon" aria-hidden />
                {email}
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
        </Col>
        <Col xs={24} lg={10} xl={9} className="pf-hero-visual-col">
          <div className="pf-hero-visual-inner">
            <span className="pf-hero-deco pf-hero-deco-ring" aria-hidden="true" />
            <span className="pf-hero-deco pf-hero-deco-dot pf-hero-deco-dot-a" aria-hidden="true" />
            <span className="pf-hero-deco pf-hero-deco-dot pf-hero-deco-dot-b" aria-hidden="true" />
            {/* <div className="pf-hero-visual-panel" aria-hidden="true" /> */}
            <div className="pf-hero-photo-frame">
              <video
                ref={videoRef}
                src={heroPortrait}
                className="pf-hero-photo"
                width={420}
                height={520}
                playsInline
              />

              <button
                type="button"
                onClick={toggleVideo}
                className="pf-video-btn"
              >
                {isPlaying ? '⏸' : '►'}
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}
