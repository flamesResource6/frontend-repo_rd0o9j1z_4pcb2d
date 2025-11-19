import { useEffect, useRef } from 'react'

// Lightweight Matrix rain effect on a canvas
export default function MatrixRain({ opacity = 0.2, speed = 50, color = '#10b981' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const configRef = useRef({ columns: 0, drops: [], fontSize: 16 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let mounted = true
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))

    const resize = () => {
      if (!mounted) return
      const { innerWidth, innerHeight } = window
      canvas.width = innerWidth * dpr
      canvas.height = innerHeight * dpr
      canvas.style.width = innerWidth + 'px'
      canvas.style.height = innerHeight + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0) // reset before scaling
      ctx.scale(dpr, dpr)
      const fontSize = Math.max(12, Math.min(18, Math.floor(innerWidth / 90)))
      configRef.current.fontSize = fontSize
      const columns = Math.floor(innerWidth / fontSize)
      configRef.current.columns = columns
      configRef.current.drops = Array(columns).fill(1)
    }

    const characters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    // Throttle to make motion more subtle
    let frame = 0
    const draw = () => {
      const { fontSize, columns, drops } = configRef.current
      // gentle fade for trails
      ctx.fillStyle = `rgba(0,0,0,${Math.min(0.08 + opacity * 0.6, 0.18)})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = color
      ctx.font = `${fontSize}px monospace`

      // update every other frame for slower descent
      const step = frame % 2 === 0

      for (let i = 0; i < columns; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(text, x, y)

        if (step) {
          if (y > window.innerHeight && Math.random() > 0.985) {
            drops[i] = 0
          }
          // small chance to pause a stream
          if (Math.random() > 0.98) {
            // no increment for a soft jitter effect
          } else {
            drops[i] += 1
          }
        }
      }
      frame++
      rafRef.current = window.requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    const start = setTimeout(() => {
      rafRef.current = window.requestAnimationFrame(draw)
    }, speed)

    return () => {
      mounted = false
      window.cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      clearTimeout(start)
    }
  }, [opacity, speed, color])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 mix-blend-soft-light"
      aria-hidden
    />
  )
}
