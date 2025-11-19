import { useEffect, useRef } from 'react'

// Lightweight Matrix rain effect on a canvas
export default function MatrixRain({ opacity = 0.25, speed = 50, color = '#00ff88' }) {
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
      ctx.scale(dpr, dpr)
      const fontSize = Math.max(14, Math.min(22, Math.floor(innerWidth / 80)))
      configRef.current.fontSize = fontSize
      const columns = Math.floor(innerWidth / fontSize)
      configRef.current.columns = columns
      configRef.current.drops = Array(columns).fill(1)
    }

    const characters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ∞$#*+-<>░▒▓'.split('')

    const draw = () => {
      const { fontSize, columns, drops } = configRef.current
      ctx.fillStyle = `rgba(0,0,0,${Math.min(0.15 + opacity, 0.35)})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = color
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < columns; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(text, x, y)

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      rafRef.current = window.requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    // Slight delay to avoid initial jank
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
      className="pointer-events-none fixed inset-0 -z-20 mix-blend-screen"
      aria-hidden
    />
  )
}
