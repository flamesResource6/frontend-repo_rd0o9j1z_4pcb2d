import React from 'react'
import { AlertTriangle, EyeOff, CircleSlash } from 'lucide-react'

export default function Problem() {
  const items = [
    { icon: CircleSlash, title: 'Vague Promises' },
    { icon: EyeOff, title: 'No Tangible Results' },
    { icon: AlertTriangle, title: 'Designed to Keep You Dependent' },
  ]

  return (
    <section id="problem" className="section">
      <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">Spirituality Has Been Neutered.</h2>
          <p className="section-subtitle">
            You've been sold 'good vibes' and told to 'trust the universe' by people with no real-world power.
            This fluffy, ineffective advice keeps you weak, poor, and confused. It's a distraction from the real, potent spiritual laws that build empires.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="card flex flex-col items-center text-center gap-3 py-8">
              <Icon className="text-gold" />
              <p className="font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
