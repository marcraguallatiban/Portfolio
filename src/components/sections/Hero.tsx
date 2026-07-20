import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload, FaChevronDown } from 'react-icons/fa'
import Button from '../ui/Button'
import TypingAnimation from '../ui/TypingAnimation'
import { personalInfo } from '../../data/personal'

interface Particle {
  id: number
  x: string
  y: string
  size: number
  duration: number
  delay: number
}

const particles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: `${10 + Math.random() * 80}%`,
  y: `${10 + Math.random() * 80}%`,
  size: 2 + Math.random() * 3,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 5,
}))

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  } as const

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  } as const

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Mouse-follow radial glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 -z-5"
        aria-hidden="true"
        style={{
          background: `radial-gradient(600px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(114,136,174,0.08) 0%, transparent 60%)`,
        }}
      />

      {/* Animated background blobs with parallax */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: (mousePos.x - 0.5) * 20, y: (mousePos.y - 0.5) * 20 }}
          className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#4B5694]/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: (mousePos.x - 0.5) * -16, y: (mousePos.y - 0.5) * -16 }}
          className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#7288AE]/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, -30, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: (mousePos.x - 0.5) * 12, y: (mousePos.y - 0.5) * -12 }}
          className="absolute top-1/3 right-1/4 h-60 w-60 rounded-full bg-[#4F252E]/15 blur-3xl"
        />
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 h-16 w-16 border border-[#4B5694]/20 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-32 right-12 h-10 w-10 border border-[#7288AE]/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-8 h-6 w-6 bg-[#7288AE]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-40 left-1/3 h-12 w-12 border border-[#4F252E]/20 rounded-lg"
        />
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          aria-hidden="true"
          animate={{
            y: [0, -30 - Math.random() * 20, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none fixed -z-5 rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            backgroundColor: '#7288AE',
            opacity: 0.25,
          }}
        />
      ))}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p variants={childVariants} className="text-lg font-medium text-[#7288AE]">
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={childVariants}
          className="mt-2 text-6xl font-extrabold tracking-tight text-[#EAE0CF] sm:text-7xl md:text-8xl leading-[1.05]"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div variants={childVariants} className="mt-4 text-xl font-medium text-[#7288AE] sm:text-2xl md:text-3xl">
          <TypingAnimation
            strings={['Front-End Developer of Taguro Mobile App', 'UI Designer', 'Gwapo']}
            speed={80}
            deleteSpeed={50}
            pauseDuration={2000}
          />
        </motion.div>

        <motion.p
          variants={childVariants}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#EAE0CF]/60 sm:text-lg"
        >
          I craft modern, responsive, and user-friendly web experiences with clean code and thoughtful design.
        </motion.p>

        <motion.div variants={childVariants} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => handleScrollTo('projects')} variant="primary" size="lg"
            icon={<FaArrowRight />} ariaLabel="View projects">View Projects</Button>
          <Button onClick={() => handleScrollTo('contact')} variant="outline" size="lg"
            ariaLabel="Contact me">Contact Me</Button>
          {personalInfo.resumeUrl && (
            <Button href={personalInfo.resumeUrl} variant="secondary" size="lg"
              icon={<FaDownload />} ariaLabel="Download resume">Resume</Button>
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#7288AE]/50 hover:text-[#7288AE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5694] rounded-full p-2"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <FaChevronDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
