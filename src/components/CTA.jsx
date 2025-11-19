import { useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${BACKEND}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'cta' })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setEmail('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="cta" className="py-28 bg-gradient-to-b from-neutral-950 to-black text-emerald-100 border-t border-emerald-500/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(16,185,129,0.08),transparent)]" />
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-emerald-300"
        >
          Get The Cheat Codes
        </motion.h2>
        <p className="mt-3 text-emerald-200/75">Enter your email and I’ll send the free Spiritual Cheat Codes today.</p>
        <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="px-4 py-3 rounded bg-white text-black w-full sm:w-auto min-w-[260px]" />
          <button type="submit" className="px-6 py-3 rounded bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.45)]">Send</button>
        </form>
        {status==='success' && <p className="mt-2 text-emerald-400 text-sm">Check your inbox. You’re in.</p>}
        {status==='error' && <p className="mt-2 text-red-400 text-sm">Something went wrong. Try again.</p>}
      </div>
    </section>
  )
}
