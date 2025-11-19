import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BootScreen() {
  const [show, setShow] = useState(false)
  const [lines, setLines] = useState([])

  useEffect(() => {
    const already = sessionStorage.getItem('dtus_booted')
    if (already) return
    setShow(true)

    const script = [
      'BOOT> Initializing metaphysical kernel... ok',
      'BOOT> Mounting archetype volumes... ok',
      'BOOT> Loading protocols: money, love, calling... ok',
      'BOOT> Spawning guardians... ok',
      'SYSTEM> Welcome, Seeker. Access granted.'
    ]

    let i = 0
    const timer = setInterval(() => {
      setLines(prev => [...prev, script[i]])
      i++
      if (i >= script.length) {
        clearInterval(timer)
        setTimeout(() => {
          setShow(false)
          sessionStorage.setItem('dtus_booted', '1')
        }, 800)
      }
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[70] bg-black text-emerald-300 font-mono text-sm"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,128,0.12),transparent_60%)]" />
          <div className="max-w-3xl mx-auto px-6 pt-24">
            {lines.map((l, idx) => (
              <div key={idx} className="leading-7">{l}</div>
            ))}
            <div className="mt-6 text-emerald-400/70">Press any key to skip</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
