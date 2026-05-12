import { useEffect, useRef, useState, type PropsWithChildren } from 'react'

type SectionRevealProps = PropsWithChildren<{
  id?: string
  className?: string
  delay?: number
}>

export function SectionReveal({ children, id, className = '', delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }

    el.style.setProperty('--section-reveal-delay', `${delay}s`)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <section
      ref={ref}
      id={id}
      className={`section-reveal${visible ? ' section-reveal-visible' : ''} ${className}`.trim()}
    >
      {children}
    </section>
  )
}
