import { motion } from 'framer-motion'

export default function Solution() {
  return (
    <section id="solution" className="py-28 bg-gradient-to-b from-black to-neutral-950 text-emerald-100 border-t border-emerald-500/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(16,185,129,0.08),transparent)]" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-emerald-300"
          >
            The Decoder
          </motion.h2>
          <p className="mt-4 text-emerald-200/75">Iustinian created Decoding The Unseen to turn metaphysics into usable protocols. This is not inspiration. This is a system. Clear language. Repeatable outcomes. Power with responsibility.</p>
          <p className="mt-3 text-emerald-200/75">Start with the free codes. Then deploy the products to solve real problems: money, love, calling. No incense required.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/5] rounded-2xl overflow-hidden border border-emerald-500/15 bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 shadow-[0_0_60px_rgba(16,185,129,0.15)]"
        >
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
        </motion.div>
      </div>
    </section>
  )
}
