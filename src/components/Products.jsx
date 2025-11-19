import { useState } from 'react'
import { motion } from 'framer-motion'

const PRODUCTS = [
  { title: 'Soul Archetype', price: '$8', url: 'https://whop.com', label: 'Soul Archetype' },
  { title: 'Money Wizard', price: '$28', url: 'https://whop.com', label: 'Money Wizard' },
  { title: 'Make Him Think About You', price: '$28', url: 'https://whop.com', label: 'Make Him Think About You' },
  { title: 'The Wizard Council', price: '$17/mo', url: 'https://whop.com', label: 'Wizard Council' },
  { title: 'Soul Archetype Decoder', price: '$170', url: 'https://whop.com', label: 'Soul Archetype Decoder' },
]

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Products() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${BACKEND}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'products' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
    }
  }

  const trackAndGo = async (p) => {
    try {
      await fetch(`${BACKEND}/clicks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: p.url, label: `Buy Now - ${p.label}`, source: 'products', context: { price: p.price } })
      })
    } catch (e) { /* ignore */ }
    window.open(p.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="products" className="py-28 bg-black text-emerald-100 border-t border-emerald-500/10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 p-6 rounded-xl border border-emerald-500/15 bg-emerald-400/5 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-emerald-300">Free: Spiritual Cheat Codes</h3>
            <p className="mt-2 text-emerald-200/75">Drop your email. Get the download. Deploy today.</p>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <input type="email" required placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="flex-1 px-3 py-2 rounded bg-white text-black focus:outline-none" />
              <button type="submit" className="px-4 py-2 rounded bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors">Get It</button>
            </form>
            {status==='success' && <p className="mt-2 text-emerald-400 text-sm">Check your inbox. You’re in.</p>}
            {status==='error' && <p className="mt-2 text-red-400 text-sm">Something went wrong. Try again.</p>}
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-xl border border-emerald-500/15 bg-emerald-400/5 hover:bg-emerald-400/10 transition-colors flex flex-col"
              >
                <h4 className="text-lg font-medium text-emerald-200">{p.title}</h4>
                <p className="mt-1 text-emerald-200/70">{p.price}</p>
                <div className="mt-auto">
                  <button onClick={() => trackAndGo(p)} className="mt-4 w-full px-4 py-2 rounded bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors">Buy Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
