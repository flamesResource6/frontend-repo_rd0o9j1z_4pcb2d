import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Products from './components/Products'
import CTA from './components/CTA'
import Footer from './components/Footer'
import MatrixRain from './components/MatrixRain'

function App() {
  return (
    <div className="bg-black text-emerald-100">
      {/* Global matrix rain effect */}
      <MatrixRain opacity={0.22} speed={80} color="#00ff88" />

      <Navbar />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
