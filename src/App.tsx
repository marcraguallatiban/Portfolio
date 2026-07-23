import Background from './components/ui/Background'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import WaveDivider from './components/ui/WaveDivider'
import About from './components/sections/About'
import Timeline from './components/sections/Timeline'
import Certificates from './components/sections/Certificates'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'
import CustomCursor from './components/ui/CustomCursor'

export default function App() {
  return (
    <>
      <Background />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <WaveDivider />
        <About />
        <Timeline />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
