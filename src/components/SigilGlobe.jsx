import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function SigilGlobe({ size = 360 }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rsx = useSpring(useTransform(my, [-1, 1], [12, -12]), { stiffness: 80, damping: 15 })
  const rsy = useSpring(useTransform(mx, [-1, 1], [-18, 18]), { stiffness: 80, damping: 15 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onMove = (e) => {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return
      const x = (e.clientX - (rect.left + rect.width/2)) / (rect.width/2)
      const y = (e.clientY - (rect.top + rect.height/2)) / (rect.height/2)
      mx.set(Math.max(-1, Math.min(1, x)))
      my.set(Math.max(-1, Math.min(1, y)))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size, perspective: 1000, rotateX: rsx, rotateY: rsy }}
      className="relative mx-auto"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.5),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.25),transparent_60%)]"/>
      <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-2xl" />

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-emerald-400/15"
          style={{ rotate: (i * 15) + 'deg' }}
          animate={{ rotate: [i*15, i*15 + 360] }}
          transition={{ repeat: Infinity, duration: 40 + i, ease: 'linear' }}
        />
      ))}

      <motion.svg viewBox="0 0 100 100" className="absolute inset-0" preserveAspectRatio="xMidYMid meet"
        animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}>
        <defs>
          <radialGradient id="g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="none" stroke="#10b98155" strokeWidth="0.5" />
        <path d="M10 60 L50 10 L90 60 L50 90 Z" fill="url(#g)" opacity="0.06" />
        <path d="M20 55 L80 55 M30 70 L70 30" stroke="#34d399" strokeWidth="0.6" opacity="0.6" />
        <circle cx="50" cy="50" r="18" fill="none" stroke="#34d399" strokeWidth="0.8" opacity="0.7" />
      </motion.svg>

      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-white/0 mix-blend-overlay" />
      <div className="absolute -inset-[2px] rounded-full border border-emerald-400/30" />
    </motion.div>
  )
}
