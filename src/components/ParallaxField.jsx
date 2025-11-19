import { useEffect, useRef } from 'react'

export default function ParallaxField({ density = 80, color = 'rgba(16,185,129,0.5)' }) {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const mouse = useRef({ x: 0, y: 0 })
  const raf = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let mounted = true

    const resize = () => {
      if (!mounted) return
      const { innerWidth:w, innerHeight:h } = window
      canvas.width = w
      canvas.height = h
      particles.current = Array.from({ length: Math.floor((w*h)/ (12000 / (density/80))) }).map(() => ({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-0.5)*0.2,
        vy: (Math.random()-0.5)*0.2,
        size: Math.random()*2 + 0.5
      }))
    }

    const draw = () => {
      const { width:w, height:h } = canvas
      ctx.clearRect(0,0,w,h)
      ctx.fillStyle = color
      for (const p of particles.current) {
        const dx = (mouse.current.x - p.x)
        const dy = (mouse.current.y - p.y)
        const d = Math.hypot(dx, dy) || 1
        const force = Math.min(40 / d, 0.6)
        p.vx += (dx/d) * force * 0.02
        p.vy += (dy/d) * force * 0.02
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2)
        ctx.fill()
      }
      raf.current = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    window.addEventListener('mousemove', onMove)
    resize()
    draw()

    return () => {
      mounted = false
      cancelAnimationFrame(raf.current)
      window.removeEventListener('mousemove', onMove)
    }
  }, [density, color])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />
}
