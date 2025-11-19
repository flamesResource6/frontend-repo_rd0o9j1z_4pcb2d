import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Products from './components/Products'
import CTA from './components/CTA'
import Footer from './components/Footer'
import MatrixRain from './components/MatrixRain'
import BootScreen from './components/BootScreen'
import ParallaxField from './components/ParallaxField'
import SectionTransition from './components/SectionTransition'
import Showcase from './components/Showcase'
import AudioFX from './components/AudioFX'

function App() {
  return (
    <div className="bg-black text-emerald-100">
      <BootScreen />
      <MatrixRain opacity={0.22} speed={80} color="#00ff88" />
      <ParallaxField />
      <SectionTransition />

      <Navbar />
      <main className="pt-16">
        <Hero />
        <Showcase />
        <Problem />
        <Solution />
        <Products />
        <CTA />
      </main>
      <Footer />
      <AudioFX />
    </div>
  )
}

export default App
