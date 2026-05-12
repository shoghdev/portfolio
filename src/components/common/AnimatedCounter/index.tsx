import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  target: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ target, suffix = '+', duration = 1.15 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true)
        }
      },
      { threshold: 0.85 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!active) {
      return
    }

    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - (1 - t) * (1 - t)
      setCount(Math.round(eased * target))
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, duration, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
