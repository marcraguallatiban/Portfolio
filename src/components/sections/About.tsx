import { motion } from 'framer-motion'
import {
  FaMapMarkerAlt,
  FaCode,
  FaProjectDiagram,
  FaSmile,
  FaGraduationCap,
  FaCoffee,
  FaGamepad,
  FaMusic,
  FaBullseye,
} from 'react-icons/fa'
import Button from '../ui/Button'
import { personalInfo } from '../../data/personal'

import profile from '../../assets/images/fb.jpg'

const statCards = [
  { icon: <FaCode size={20} />, value: '3+', label: 'Technologies' },
  { icon: <FaProjectDiagram size={20} />, value: '5+', label: 'Projects Built' },
  { icon: <FaSmile size={20} />, value: '100%', label: 'Dedication' },
]

const funFacts = [
  { icon: <FaCoffee size={18} />, label: 'Coffee-fueled coder' },
  { icon: <FaGamepad size={18} />, label: 'Gamer at heart' },
  { icon: <FaMusic size={18} />, label: 'Music enthusiast' },
]

export default function About() {
  return (
    <section id="about" className="bg-transparent py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#4B5694]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7288AE]/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#4B5694]/40 via-transparent to-[#7288AE]/40 blur-sm" />
              <div className="absolute inset-0 rounded-2xl bg-[#4B5694]/30 blur-xl transform rotate-6" />
              <img
                src={profile}
                alt="Profile photo of Marc Latiban — Front-End Developer"
                className="relative z-10 h-72 w-72 rounded-2xl object-cover shadow-xl md:h-80 md:w-80 border-4 border-white/10"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#7288AE]/30 blur-sm z-20" />
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-[#4B5694]/40 blur-sm z-20" />
            </motion.div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-[#EAE0CF] md:text-4xl">
              About <span className="text-[#7288AE]">Me</span>
            </h2>

            <div className="mt-4 flex items-center gap-2 text-[#EAE0CF]/70">
              <FaMapMarkerAlt className="text-[#4B5694]" />
              <span className="text-sm font-medium">{personalInfo.location}</span>
            </div>

            <div className="mt-6 space-y-4 text-[#EAE0CF]/60 leading-relaxed">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Currently Learning */}
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3">
              <FaGraduationCap className="text-[#7288AE] shrink-0" size={18} />
              <span className="text-sm text-[#EAE0CF]/70">
                <strong className="text-[#EAE0CF]/90">Currently learning:</strong>{' '}
                Next.js, Framer Motion, UI/UX fundamentals
              </span>
            </div>

            {/* Personal Mission */}
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3">
              <FaBullseye className="text-[#7288AE] shrink-0 mt-1" size={16} />
              <p className="text-sm text-[#EAE0CF]/60">
                My mission is to build intuitive, performant interfaces that make a real
                difference — bridging design and engineering to create delightful digital
                experiences.
              </p>
            </div>

            {personalInfo.resumeUrl && (
              <div className="mt-6">
                <Button href={personalInfo.resumeUrl} variant="primary" size="md" ariaLabel="Download resume">
                  Download Resume
                </Button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-xl p-6 hover:bg-white/[0.08] hover:border-[#4B5694]/30 hover:shadow-[0_0_20px_rgba(75,86,148,0.1)] transition-all duration-300"
            >
              <span className="text-[#7288AE]">{stat.icon}</span>
              <span className="text-2xl font-bold text-[#EAE0CF]">{stat.value}</span>
              <span className="text-xs text-[#EAE0CF]/50 uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Facts row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          {funFacts.map((fact) => (
            <span
              key={fact.label}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.06] px-4 py-2 text-sm text-[#EAE0CF]/60 hover:border-[#7288AE]/30 hover:text-[#EAE0CF] transition-all duration-300"
            >
              <span className="text-[#7288AE]">{fact.icon}</span>
              {fact.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
