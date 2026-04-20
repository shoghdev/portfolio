import { Typography } from 'antd'

const { Title, Paragraph } = Typography

type AboutSectionProps = {
  about: string[]
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="portfolio-section">
      <Title level={2}>About</Title>
      {about.map((item) => (
        <Paragraph key={item}>{item}</Paragraph>
      ))}
    </section>
  )
}
