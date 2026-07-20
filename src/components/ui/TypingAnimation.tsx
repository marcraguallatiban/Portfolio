import { useState, useEffect } from 'react'

// =====================================
// TYPING ANIMATION
// Cycles through an array of strings
// with a typewriter effect.
// =====================================

interface TypingAnimationProps {
  strings: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export default function TypingAnimation({
  strings,
  className = '',
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[index]
    if (!current) return

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setDisplay(current.slice(0, charIndex + 1))
            setCharIndex((c) => c + 1)
          } else {
            setTimeout(() => setDeleting(true), pauseDuration)
          }
        } else {
          if (charIndex > 0) {
            setDisplay(current.slice(0, charIndex - 1))
            setCharIndex((c) => c - 1)
          } else {
            setDeleting(false)
            setIndex((i) => (i + 1) % strings.length)
          }
        }
      },
      deleting ? deleteSpeed : speed
    )

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, index, strings, speed, deleteSpeed, pauseDuration])

  return (
    <span className={className} aria-label={strings[index]}>
      {display}
      <span className="inline-block w-[3px] h-[1em] bg-current ml-1 animate-pulse" />
    </span>
  )
}
