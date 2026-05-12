import { useCallback, useEffect, useState } from 'react'
import { Card, Typography } from 'antd'
import type { TestimonialsSectionProps } from './types'

const { Title, Text } = Typography

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [active, setActive] = useState(0)
  const count = testimonials.length

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % count)
  }, [count])

  useEffect(() => {
    if (count <= 1) {
      return
    }
    const id = window.setInterval(goNext, 7000)
    return () => window.clearInterval(id)
  }, [count, goNext])

  if (count === 0) {
    return null
  }

  const current = testimonials[active]

  return (
    <section id="testimonials" className="pf-section pf-section-sidebar">
      <Card bordered={false} className="pf-surface-card pf-sidebar-card pf-testimonials-inner">
        <Title level={2} className="pf-sidebar-title">
          What people say
        </Title>
        <span className="pf-testimonials-quote-mark" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="pf-testimonials-quote">{current.quote}</blockquote>
        <div className="pf-testimonials-meta">
          <Text className="pf-testimonials-author">{current.author}</Text>
          <Text className="pf-testimonials-role">{current.role}</Text>
        </div>
        {count > 1 ? (
          <div className="pf-testimonials-dots" role="tablist" aria-label="Testimonials">
            {testimonials.map((item, index) => (
              <button
                key={`${item.author}-${item.role}`}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={`pf-testimonials-dot${index === active ? ' pf-testimonials-dot-active' : ''}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        ) : null}
      </Card>
    </section>
  )
}
