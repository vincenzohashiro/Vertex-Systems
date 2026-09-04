import { useEffect, useRef, useState } from 'react'

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export default function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!match) return
    const node = ref.current
    if (!node) return
    const target = parseInt(match[2], 10)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setDisplay(Math.round(target * easeOutExpo(progress)))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  if (!match) return <span ref={ref}>{value}</span>

  return (
    <span ref={ref}>
      {match[1]}
      {display}
      {match[3]}
    </span>
  )
}
