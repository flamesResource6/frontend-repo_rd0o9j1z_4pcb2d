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
      {/* Make background layers clearly visible while keeping them tasteful */}
      <MatrixRain opacity={0.12} speed={200} color="#10b981" />
      <ParallaxField density={80} color="rgba(16,185,129,0.45)" />
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
