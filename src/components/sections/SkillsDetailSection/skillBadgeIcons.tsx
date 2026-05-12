import type { ReactNode } from 'react'

/** Minimal monochrome SVG marks for skill badges (no external icon pack). */
export function SkillBadgeIcon({ skillId }: { skillId: string }): ReactNode {
  switch (skillId) {
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className="pf-skill-badge-svg" fill="currentColor">
          <path d="M4 2l1.7 18.5L12 22l6.3-1.5L20 2H4zm14.5 5h-8l.3 3h7.4l-.5 5.5-4.2 1.2-4.2-1.2-.3-3h3.3l.1 1.5 2.3.6 2.3-.6.3-2.6H8.6L8 7h10.5z" />
        </svg>
      )
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className="pf-skill-badge-svg" fill="currentColor">
          <path d="M4 2l1.7 18.5L12 22l6.3-1.5L20 2H4zm14 5H9.3l.2 3h8l-.3 3.5-3 .8-3-.8-.2-2h2.8l.1 1 1.5.4 1.5-.4.2-1.7H8.5L8 7h10z" />
        </svg>
      )
    case 'js':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className="pf-skill-badge-svg" fill="currentColor">
          <path d="M4 2h16v20H4V2zm12.5 15.3c.4.7 1.2 1.3 2.6 1.3 1.6 0 2.5-.8 2.5-2 0-1-.7-1.6-2.3-2l-.9-.3c-.8-.3-1.2-.6-1.2-1.2 0-.5.4-.9 1.1-.9.7 0 1.1.3 1.5 1l1.3-.8c-.6-1.1-1.5-1.6-2.8-1.6-1.7 0-2.8 1-2.8 2.3 0 1.2.7 1.9 2.2 2.3l.9.3c.9.3 1.2.6 1.2 1.2 0 .6-.5 1-1.4 1-.9 0-1.6-.5-2-1.2l-1.5.9zm-7.6.2l1.8-10.4h2l-1.8 10.4h-2z" />
        </svg>
      )
    case 'laravel':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className="pf-skill-badge-svg" fill="none">
          <path
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            d="M5 8l7-4 7 4v8l-7 4-7-4V8zm7-4v8m0 0l7-4m-7 4L5 8"
          />
        </svg>
      )
    case 'livewire':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className="pf-skill-badge-svg" fill="none" stroke="currentColor">
          <path strokeWidth="1.6" strokeLinecap="round" d="M12 4v4M12 16v4M4 12h4M16 12h4M7 7l2 2M15 15l2 2M7 17l2-2M15 7l2-2" />
          <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="0 0 24 24" aria-hidden className="pf-skill-badge-svg" fill="none" stroke="currentColor">
          <ellipse cx="12" cy="12" rx="9" ry="4" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="9" ry="4" strokeWidth="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" strokeWidth="1.4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      )
    default:
      return (
        <span className="pf-skill-badge-fallback" aria-hidden>
          {(skillId.slice(0, 2) || '?').toUpperCase()}
        </span>
      )
  }
}
