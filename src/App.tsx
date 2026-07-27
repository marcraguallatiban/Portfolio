import { lazy, Suspense } from 'react'
import Background from './components/ui/Background'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'
import CustomCursor from './components/ui/CustomCursor'

const WaveDivider = lazy(() => import('./components/ui/WaveDivider'))
const About = lazy(() => import('./components/sections/About'))
const Timeline = lazy(() => import('./components/sections/Timeline'))
const Certificates = lazy(() => import('./components/sections/Certificates'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/layout/Footer'))

function Section({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="min-h-[200px]" />}>{children}</Suspense>
}

export default function App() {
  return (
    <>
      <Background />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Section><WaveDivider /></Section>
        <Section><About /></Section>
        <Section><Timeline /></Section>
        <Section><Certificates /></Section>
        <Section><Projects /></Section>
        <Section><Contact /></Section>
      </main>

      <Section><Footer /></Section>
      <BackToTop />
    </>
  )
}
