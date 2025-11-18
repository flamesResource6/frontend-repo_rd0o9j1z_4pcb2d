import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container-max py-4 flex items-center justify-between">
        <a href="#home" className="font-poppins text-xl font-bold tracking-wide">Decoding <span className="text-gold">The Unseen</span></a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition">{item.label}</a>
          ))}
          <a href="#lead" className="button-primary text-sm">Get Free Cheat Codes</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10">
          <div className="container-max py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/90">{item.label}</a>
            ))}
            <a href="#lead" onClick={() => setOpen(false)} className="button-primary text-center">Get Free Cheat Codes</a>
          </div>
        </div>
      )}
    </header>
  )
}
