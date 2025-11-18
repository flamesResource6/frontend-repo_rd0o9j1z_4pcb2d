import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black pointer-events-none" />

      <div className="relative container-max flex min-h-[90vh] items-center">
        <div className="max-w-3xl">
          <h1 className="section-title text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Stop Seeking. Start Commanding. Decode Your Reality.
          </h1>
          <p className="section-subtitle">
            Spiritual knowledge is the ultimate system for power. We cut the fluff and deliver the protocols for wealth, relationships, and influence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={onPrimary} className="button-primary">Get the Free Cheat Codes</button>
            <button onClick={onSecondary} className="button-secondary">View Products</button>
          </div>
        </div>
      </div>
    </section>
  )
}
