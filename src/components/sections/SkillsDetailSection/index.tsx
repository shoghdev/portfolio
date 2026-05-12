import { Card } from 'antd'
import { useLayoutEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import { SectionReveal } from '../../common/SectionReveal'
import { SkillBadgeIcon } from './skillBadgeIcons'
import type { SkillsDetailSectionProps } from './types'

const MIN_SEGMENTS = 2
const MAX_SEGMENTS = 14

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function SkillsDetailSection({ technicalSkills }: SkillsDetailSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const measureGroupRef = useRef<HTMLDivElement>(null)
  const [segments, setSegments] = useState(4)

  useLayoutEffect(() => {
    const container = containerRef.current
    const group = measureGroupRef.current
    const track = trackRef.current
    if (!container || !group || !track) {
      return
    }

    const applyTrackVars = (segmentCount: number, groupWidth: number) => {
      track.style.setProperty('--pf-skill-marquee-segments', String(segmentCount))
      const durationSec = Math.max(16, Math.min(72, groupWidth * 0.045))
      track.style.setProperty('--pf-skill-marquee-duration', `${durationSec}s`)
    }

    const update = () => {
      if (prefersReducedMotion()) {
        setSegments(1)
        track.style.removeProperty('--pf-skill-marquee-segments')
        track.style.removeProperty('--pf-skill-marquee-duration')
        return
      }

      const cw = container.clientWidth
      const gw = group.offsetWidth
      if (!(gw > 0)) {
        return
      }

      const n = Math.min(MAX_SEGMENTS, Math.max(MIN_SEGMENTS, Math.ceil(cw / gw) + 2))
      setSegments(n)
      applyTrackVars(n, gw)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(container)
    ro.observe(group)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    mq.addEventListener('change', update)
    return () => {
      ro.disconnect()
      mq.removeEventListener('change', update)
    }
  }, [technicalSkills])

  const renderBadges = (
    suffix: string,
    isDuplicate: boolean,
    groupRef?: RefObject<HTMLDivElement | null>,
  ) => (
    <div
      ref={groupRef}
      className={`pf-skill-marquee-group${isDuplicate ? ' pf-skill-marquee-group-duplicate' : ''}`}
      role={isDuplicate ? undefined : 'list'}
      aria-hidden={isDuplicate}
    >
      {technicalSkills.map((skill) => (
        <div key={`${skill.id}-${suffix}`} className="pf-skill-badge" role={isDuplicate ? undefined : 'listitem'}>
          <span className="pf-skill-badge-icon-wrap" aria-hidden>
            <SkillBadgeIcon skillId={skill.id} />
          </span>
          <span className="pf-skill-badge-label">{skill.label}</span>
        </div>
      ))}
    </div>
  )

  return (
    <SectionReveal id="skills" className="pf-section pf-section-main pf-skills-detail-wrap pf-skills-section-fullbleed">
      <Card bordered={false} className="pf-surface-card pf-main-card pf-skills-badge-card pf-skills-badge-card-fullbleed">
        <div ref={containerRef} className="pf-skill-marquee" aria-label="Technologies">
          <div ref={trackRef} className="pf-skill-marquee-track">
            {Array.from({ length: segments }, (_, i) =>
              renderBadges(`seg-${i}`, i > 0, i === 0 ? measureGroupRef : undefined),
            )}
          </div>
        </div>
      </Card>
    </SectionReveal>
  )
}
