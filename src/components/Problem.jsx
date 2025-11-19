import { ShieldAlert, EyeOff, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Problem() {
  const items = [
    {
      icon: ShieldAlert,
      title: 'They Lie',
      desc: 'Most spiritual advice is vague and ornamental. You need tools that actually shift reality.'
    },
    {
      icon: EyeOff,
      title: 'You’re Blindfolded',
      desc: 'You sense the patterns underneath life, but can’t name them. Naming is power.'
    },
    {
      icon: Brain,
      title: 'No Operating Manual',
      desc: 'You have power. You lack a protocol. Protocols make the unseen usable.'
    }
  ]

  return (
    <section id="problem" className="py-28 bg-black text-emerald-100 border-t border-emerald-500/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(16,185,129,0.08),transparent),radial-gradient(500px_300px_at_90%_20%,rgba(16,185,129,0.06),transparent)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-emerald-300"
        >
          They Lie
        </motion.h2>
        <p className="mt-3 text-emerald-200/75 max-w-2xl">We decode the patterns beneath the world and give you the protocols to wield them.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-emerald-500/15 bg-emerald-400/5 backdrop-blur-sm hover:bg-emerald-400/10 transition-colors"
            >
              <it.icon className="text-emerald-300" />
              <h3 className="mt-4 text-xl font-medium text-emerald-200">{it.title}</h3>
              <p className="mt-2 text-emerald-200/70 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
