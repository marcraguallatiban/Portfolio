import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

// =====================================
// BACK TO TOP BUTTON
// Appears when the user scrolls down
// and smoothly scrolls back to top.
// =====================================

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#4B5694] text-white shadow-lg hover:bg-[#7288AE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5694]"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
