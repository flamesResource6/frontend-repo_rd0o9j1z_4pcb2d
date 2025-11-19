import { motion } from 'framer-motion'
import SigilGlobe from './SigilGlobe'

export default function Showcase() {
  return (
    <section id="showcase" className="py-28 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(16,185,129,0.08),transparent)] relative border-t border-emerald-500/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-emerald-300"
          >
            The Living Sigil
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-emerald-200/75"
          >
            A reactive sphere that encodes our protocols. Move your cursor and feel the field respond. Built to hint at depth without revealing the whole map.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-2 gap-4"
          >
            <div className="p-4 rounded-lg border border-emerald-500/15 bg-emerald-400/5">
              <div className="text-emerald-300 font-medium">Reactive</div>
              <div className="text-emerald-200/70 text-sm">Follows intent. Mirrors focus.</div>
            </div>
            <div className="p-4 rounded-lg border border-emerald-500/15 bg-emerald-400/5">
              <div className="text-emerald-300 font-medium">Coded</div>
              <div className="text-emerald-200/70 text-sm">Geometry as instruction.</div>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <SigilGlobe size={420} />
        </div>
      </div>
    </section>
  )
}
