import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black" id="hero">
      {/* Matrix green vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,128,0.15),transparent_60%)]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0 -z-10 opacity-80">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" />
      </div>

      {/* Floating holographic rings */}
      <motion.div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border border-emerald-400/10"
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 120, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 -left-40 w-[700px] h-[700px] rounded-full border border-emerald-400/10"
        animate={{ rotate: -360 }}
        transition={{ ease: 'linear', duration: 160, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-7xl font-black tracking-tight bg-gradient-to-b from-emerald-200 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.35)]"
        >
          Decoding The Unseen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mt-4 text-lg md:text-2xl text-emerald-200/80 max-w-3xl mx-auto"
        >
          Matrix-grade metaphysics. Protocols for money, love, and power—rendered in code.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={() => scrollTo('cta')} className="px-6 py-3 rounded bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.45)]">Get the Free Cheat Codes</button>
          <button onClick={() => scrollTo('products')} className="px-6 py-3 rounded border border-emerald-400/40 text-emerald-200 hover:bg-emerald-400/10 transition-colors">View Products</button>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  )
}
