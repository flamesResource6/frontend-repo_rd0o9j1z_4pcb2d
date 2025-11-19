import { useEffect, useRef } from 'react'

export default function SectionTransition() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handler = () => {
      el.classList.add('animate')
      setTimeout(() => el.classList.remove('animate'), 1000)
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-500 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 scale-y-0 origin-top transition-transform duration-700 will-change-transform" data-bar></div>
      <style>{`
        .animate [data-bar]{ transform: scaleY(1); }
        .animate{ opacity: 1; }
      `}</style>
    </div>
  )
}
