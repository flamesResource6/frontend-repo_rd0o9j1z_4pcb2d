import { useEffect, useRef } from 'react'

// Lightweight, subtle Matrix rain effect on a canvas
export default function MatrixRain({ opacity = 0.12, speed = 50, color = '#10b981' }) {
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
      const fontSize = Math.max(14, Math.min(20, Math.floor(innerWidth / 80)))
      configRef.current.fontSize = fontSize
      const columns = Math.floor(innerWidth / fontSize)
      configRef.current.columns = columns
      configRef.current.drops = Array(columns).fill(1)
    }

    const characters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    // Make motion more subtle by slowing updates and reducing density
    let frame = 0
    const draw = () => {
      const { fontSize, columns, drops } = configRef.current
      // Faster trail fade to keep background clean
      const trailAlpha = Math.min(0.22, Math.max(0.14, 0.08 + opacity))
      ctx.fillStyle = `rgba(0,0,0,${trailAlpha})`
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      ctx.save()
      ctx.globalAlpha = 0.35 // softer glyphs
      ctx.fillStyle = color
      ctx.font = `${fontSize}px monospace`

      // update every 3rd frame for slower descent
      const step = frame % 3 === 0

      for (let i = 0; i < columns; i++) {
        // sparsify: skip ~40% of columns each frame
        if (Math.random() < 0.4) continue
        const text = characters[Math.floor(Math.random() * characters.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(text, x, y)

        if (step) {
          if (y > window.innerHeight && Math.random() > 0.985) {
            drops[i] = 0
          }
          // lower fall rate, with occasional pauses
          if (Math.random() > 0.96) {
            // pause this drop
          } else {
            drops[i] += 1
          }
        }
      }

      ctx.restore()
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
