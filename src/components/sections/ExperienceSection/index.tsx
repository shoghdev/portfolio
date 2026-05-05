import { Tag, Typography } from 'antd'
import type { ExperienceSectionProps } from './types'

const { Title, Paragraph, Text } = Typography

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const spotlightEntry = experience.find((entry) => entry.company === 'Apricode Inc.') ?? experience[0]
  const topEntries = experience.filter((entry) => entry !== spotlightEntry).slice(0, 2)

  return (
    <section id="experience" className="portfolio-section experience-section">
      <div className="experience-top-grid">
        {topEntries.map((entry, index) => (
          <article key={`${entry.role}-${entry.company}`} className={`experience-mini-card experience-mini-card-${index + 1}`}>
            <div className="experience-mini-head">
              <span className="experience-mini-icon" aria-hidden="true" />
              <Text className="experience-mini-period">{entry.period}</Text>
            </div>
            <Title level={3} className="experience-mini-role">
              {entry.role}
            </Title>
            <Text className="experience-mini-company">{entry.company}</Text>
            <Paragraph className="experience-mini-summary">{entry.highlights[0]}</Paragraph>
            {index === 1 ? <div className="experience-mini-media" aria-hidden="true" /> : null}
          </article>
        ))}
      </div>

      <article key={`${spotlightEntry.role}-${spotlightEntry.company}`} className="experience-card">
        <div className="experience-card-main">
          <Text className="experience-kicker">Core Career Pivot</Text>
          <Title level={2} className="experience-title">
            {spotlightEntry.role}
          </Title>
          <Title level={3} className="experience-company">
            {spotlightEntry.company}
          </Title>
          <div className="experience-meta">
            {spotlightEntry.employmentType ? (
              <Tag className="experience-meta-tag">{spotlightEntry.employmentType}</Tag>
            ) : null}
            <Tag className="experience-meta-tag">{spotlightEntry.period}</Tag>
          </div>
          {spotlightEntry.highlights.slice(0, 2).map((highlight) => (
            <Paragraph key={highlight} className="experience-highlight">
              {highlight}
            </Paragraph>
          ))}
        </div>
        <aside className="experience-years" aria-label={`${spotlightEntry.role} years`}>
          <Text className="experience-start-year">{spotlightEntry.startYear}</Text>
          <span className="experience-year-divider" />
          <Text className="experience-end-year">{spotlightEntry.endYearLabel}</Text>
        </aside>
      </article>
    </section>
  )
}
