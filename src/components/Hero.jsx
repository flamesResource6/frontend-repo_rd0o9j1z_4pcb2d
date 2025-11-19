import Spline from '@splinetool/react-spline'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0 -z-10 opacity-70">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow">Decoding The Unseen</h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">Spiritual cheat codes for practical power. No fluff. No fairy dust. Real transformation you can deploy today.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scrollTo('cta')} className="px-5 py-3 rounded bg-white text-black font-medium hover:bg-white/90">Get the Free Cheat Codes</button>
          <button onClick={() => scrollTo('products')} className="px-5 py-3 rounded border border-white/20 text-white hover:bg-white/10">View Products</button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  )
}
