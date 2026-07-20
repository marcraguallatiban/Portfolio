import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

// =====================================
// CUSTOM CURSOR
// A circular cursor that follows the
// mouse. Only visible on desktop
// (hover-capable devices).
// =====================================

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    setVisible(true)

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const hoverStart = () => setIsHovering(true)
    const hoverEnd = () => setIsHovering(false)

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [role="button"], input, textarea').forEach((el) => {
      el.addEventListener('mouseenter', hoverStart)
      el.addEventListener('mouseleave', hoverEnd)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button, [role="button"], input, textarea').forEach((el) => {
        el.removeEventListener('mouseenter', hoverStart)
        el.removeEventListener('mouseleave', hoverEnd)
      })
    }
  }, [cursorX, cursorY])

  if (!visible) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        left: cursorX,
        top: cursorY,
        x: '-50%',
        y: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          borderColor: isHovering ? '#7288AE' : '#4B5694',
        }}
        transition={{ duration: 0.2 }}
        className="rounded-full border-2 bg-[#4B5694]/10"
      />
    </motion.div>
  )
}
