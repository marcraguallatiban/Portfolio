import { useState, useEffect } from 'react'

// =====================================
// CUSTOM HOOK
// Tracks which section is currently
// visible using IntersectionObserver.
// =====================================

const SECTION_IDS = ['home', 'about', 'timeline', 'certificates', 'skills', 'projects', 'contact']

export function useActiveSection(): string {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return active
}
