import { motion } from 'framer-motion'

interface Bubble {
  size: number
  x: string
  y: string
  color: string
  duration: number
  delay: number
}

const bubbles: Bubble[] = [
  { size: 18, x: '15%', y: '25%', color: '#4B5694', duration: 20, delay: 0 },
  { size: 14, x: '75%', y: '65%', color: '#7288AE', duration: 22, delay: 2 },
  { size: 12, x: '50%', y: '85%', color: '#4F252E', duration: 18, delay: 1 },
]

export default function Background() {
  return (
    <>
      {/* Single radial glow — static */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-secondary/8"
      />

      {/* Floating bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none fixed -z-10 rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            backgroundColor: b.color,
            opacity: 0.2,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
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
