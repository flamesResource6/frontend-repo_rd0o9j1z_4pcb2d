import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Products from './components/Products'
import CTA from './components/CTA'

export default function App() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToLead = () => {
    document.getElementById('lead')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="home">
      <Navbar />
      <Hero onPrimary={scrollToLead} onSecondary={scrollToProducts} />
      <main>
        <Problem />
        <Solution />
        <Products />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">YouTube</a>
          </div>
          <p className="text-center sm:text-right">© {new Date().getFullYear()} Decoding The Unseen</p>
        </div>
      </footer>
    </div>
  )
}
