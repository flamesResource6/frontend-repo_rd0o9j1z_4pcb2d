import { ShieldAlert, EyeOff, Brain } from 'lucide-react'

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
    <section id="problem" className="py-24 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">They Lie</h2>
        <p className="mt-3 text-white/70 max-w-2xl">We decode the patterns beneath the world and give you the protocols to wield them.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-white/10 bg-white/5">
              <it.icon className="text-white/80" />
              <h3 className="mt-4 text-xl font-medium">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
