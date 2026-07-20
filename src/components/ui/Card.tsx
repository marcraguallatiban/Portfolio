import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

// =====================================
// REUSABLE GLASSMORPHISM CARD
// Wraps content in a card with hover
// animation and glass effect.
// =====================================

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Card({ children, className = '', delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] shadow-lg hover:shadow-xl hover:border-white/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
