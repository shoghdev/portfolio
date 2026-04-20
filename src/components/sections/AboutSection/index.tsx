import { Typography } from 'antd'
import type { AboutSectionProps } from './types'
import { educatorHighlights, engineerHighlights } from './consts'

const { Title, Paragraph } = Typography

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="portfolio-section about-grid">
      <article className="about-card">
        <Title level={3}>The Engineer</Title>
        <Paragraph>{about[0]}</Paragraph>
        <ul className="about-list">
          {engineerHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="about-card">
        <Title level={3}>The Educator</Title>
        <Paragraph>{about[1]}</Paragraph>
        <ul className="about-list">
          {educatorHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}
