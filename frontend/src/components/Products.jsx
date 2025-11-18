import React from 'react'

const products = [
  { title: 'Soul Archetype', price: '$8', desc: 'Your Spiritual Blueprint. Discover your Life Path number and core traits.', url: 'https://whop.com' },
  { title: 'Money Wizard', price: '$28', desc: 'The 7-day protocol to rewire your energy for wealth.', url: 'https://whop.com' },
  { title: 'Make Him Think About You', price: '$28', desc: 'The energetic strategy to become the prize.', url: 'https://whop.com' },
  { title: 'The Wizard Council', price: '$17/mo', desc: 'The inner circle. Get weekly secrets and private community access.', url: 'https://whop.com' },
  { title: 'Soul Archetype Decoder', price: '$170', desc: "Your life's master strategy. The ultimate guide to using your blueprint.", url: 'https://whop.com' },
]

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container-max">
        <h2 className="section-title">Products</h2>
        <p className="section-subtitle">Direct, practical systems. No fluff. Results only.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lead Magnet */}
          <div id="lead" className="card col-span-full lg:col-span-3 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-poppins font-bold">The Spiritual Cheat Codes</h3>
              <p className="text-white/80 mt-2">Get my 5 forbidden techniques for manifesting money, attention, and energy. Free.</p>
            </div>
            <LeadForm />
          </div>

          {products.map((p) => (
            <div key={p.title} className="card flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-white/60 mt-2">{p.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-gold font-bold">{p.price}</span>
                <a href={p.url} target="_blank" rel="noreferrer" className="button-primary">Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LeadForm() {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState('idle')
  const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

  const submit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch(`${BACKEND}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'lead-magnet' })
      })
      const data = await res.json()
      if (data.ok) setStatus('success')
      else throw new Error('Failed')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={submit} className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-3 rounded-md bg-black/60 border border-white/15 focus:outline-none focus:ring-2 focus:ring-gold w-full sm:w-80"
      />
      <button type="submit" className="button-primary whitespace-nowrap">
        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent! Check your inbox' : 'Download for FREE'}
      </button>
    </form>
  )
}
