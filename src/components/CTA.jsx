import { useState } from 'react'

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
    <section id="cta" className="py-24 bg-gradient-to-b from-neutral-950 to-black text-white border-t border-white/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get The Cheat Codes</h2>
        <p className="mt-3 text-white/70">Enter your email and I’ll send the free Spiritual Cheat Codes today.</p>
        <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="px-4 py-3 rounded bg-white text-black w-full sm:w-auto min-w-[260px]" />
          <button type="submit" className="px-6 py-3 rounded bg-white text-black font-medium hover:bg-white/90">Send</button>
        </form>
        {status==='success' && <p className="mt-2 text-emerald-400 text-sm">Check your inbox. You’re in.</p>}
        {status==='error' && <p className="mt-2 text-red-400 text-sm">Something went wrong. Try again.</p>}
      </div>
    </section>
  )
}
