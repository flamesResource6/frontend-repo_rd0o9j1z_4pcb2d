import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioFX() {
  const [enabled, setEnabled] = useState(false)
  const ctxRef = useRef(null)
  const oscRef = useRef(null)

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        oscRef.current.stop()
        oscRef.current.disconnect()
      }
      if (ctxRef.current) ctxRef.current.close()
    }
  }, [])

  const toggle = async () => {
    if (!enabled) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      ctxRef.current = ctx
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = 0
      gain.gain.value = 0
      osc.connect(gain).connect(ctx.destination)
      osc.start()
      oscRef.current = osc
    }
    setEnabled(!enabled)
  }

  const whoosh = () => {
    if (!ctxRef.current || !enabled) return
    const ctx = ctxRef.current
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(80, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.5)
    gain.gain.setValueAtTime(0.0001, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6)
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.65)
  }

  useEffect(() => {
    const onClick = () => whoosh()
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [enabled])

  return (
    <button onClick={toggle} className="fixed right-4 bottom-4 z-50 px-3 py-2 rounded bg-emerald-400/20 border border-emerald-400/30 text-emerald-200 hover:bg-emerald-400/30 backdrop-blur flex items-center gap-2">
      {enabled ? <Volume2 size={16}/> : <VolumeX size={16}/>}
      <span className="text-sm">{enabled ? 'Sound: on' : 'Sound: off'}</span>
    </button>
  )
}
