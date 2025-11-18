import React from 'react'

export default function Solution() {
  return (
    <section id="about" className="section">
      <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="section-title">A Different Path. A System for Power.</h2>
          <p className="section-subtitle">
            I'm Iustinian. I reverse-engineered the esoteric principles used by history's most powerful figures into a practical, no-BS system. This isn't about escaping the world; it's about dominating it.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1400&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
