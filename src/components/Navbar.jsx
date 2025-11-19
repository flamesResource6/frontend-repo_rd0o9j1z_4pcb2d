import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-white font-semibold tracking-wide">Decoding The Unseen</div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <button onClick={() => scrollTo('problem')} className="hover:text-white">Problem</button>
          <button onClick={() => scrollTo('solution')} className="hover:text-white">Solution</button>
          <button onClick={() => scrollTo('products')} className="hover:text-white">Products</button>
          <button onClick={() => scrollTo('cta')} className="px-3 py-1.5 rounded bg-white text-black font-medium hover:bg-white/90">Get Cheat Codes</button>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4 text-white/90">
            <button onClick={() => scrollTo('problem')}>Problem</button>
            <button onClick={() => scrollTo('solution')}>Solution</button>
            <button onClick={() => scrollTo('products')}>Products</button>
            <button onClick={() => scrollTo('cta')} className="px-3 py-2 rounded bg-white text-black font-medium">Get Cheat Codes</button>
          </div>
        </div>
      )}
    </header>
  )
}
