import { useScrollProgress } from '../../hooks/useScrollProgress'

// =====================================
// SCROLL PROGRESS BAR
// A thin bar at the very top of the
// page showing how far the user has
// scrolled.
// =====================================

export default function ScrollProgress() {
  const progress = useScrollProgress()

  if (progress === 0) return null

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[3px] bg-[#7288AE] transition-all duration-150 ease-out"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  )
}
