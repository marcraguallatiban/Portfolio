import { motion } from 'framer-motion'

// =====================================
// AMBIENT BACKGROUND LAYER (DARK MODE)
// Fixed full-viewport layer behind all
// content.
//
// Features:
//   - Blue radial glow (top-left)
//   - Purple radial glow (bottom-right)
//   - Center ambient glow
//   - Faint geometric grid pattern
//   - Floating bubbles that drift slowly
// =====================================

interface Bubble {
  size: number
  x: string
  y: string
  color: string
  duration: number
  delay: number
  xDrift: number
}

const bubbles: Bubble[] = [
  { size: 20, x: '10%', y: '20%', color: '#4B5694', duration: 18, delay: 0, xDrift: 30 },
  { size: 14, x: '80%', y: '30%', color: '#7288AE', duration: 22, delay: 2, xDrift: -25 },
  { size: 24, x: '60%', y: '70%', color: '#4F252E', duration: 25, delay: 1, xDrift: 20 },
  { size: 12, x: '30%', y: '80%', color: '#4B5694', duration: 16, delay: 3, xDrift: -15 },
  { size: 18, x: '90%', y: '60%', color: '#7288AE', duration: 20, delay: 0.5, xDrift: 35 },
  { size: 10, x: '50%', y: '15%', color: '#4F252E', duration: 14, delay: 2.5, xDrift: -20 },
  { size: 16, x: '20%', y: '50%', color: '#4B5694', duration: 19, delay: 1.5, xDrift: 25 },
  { size: 22, x: '70%', y: '90%', color: '#7288AE', duration: 23, delay: 0.8, xDrift: -30 },
  { size: 8,  x: '40%', y: '40%', color: '#4F252E', duration: 12, delay: 4, xDrift: 18 },
  { size: 15, x: '85%', y: '15%', color: '#4B5694', duration: 21, delay: 1.2, xDrift: -22 },
]

export default function Background() {
  return (
    <>
      {/* Blue radial glow — top-left */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none fixed -top-40 -left-40 -z-10 block h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      {/* Purple radial glow — bottom-right */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none fixed -bottom-40 -right-40 -z-10 block h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]"
      />

      {/* Subtle center ambient glow */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none fixed top-1/2 left-1/2 -z-10 block h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[150px]"
      />

      {/* Floating bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{
            y: [0, -40, 0],
            x: [0, b.xDrift, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none fixed -z-10 rounded-full blur-md"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            backgroundColor: b.color,
            opacity: 0.25,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </>
  )
}
