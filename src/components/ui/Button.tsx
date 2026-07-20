import { type ReactNode, useRef, useState, useCallback } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  ariaLabel?: string
  className?: string
}

export default function Button({
  children,
  onClick,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon,
  ariaLabel,
  className = '',
}: ButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const idRef = useRef(0)

  const handleRipple = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = idRef.current++
    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.15
    const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.15
    setMouseOffset({ x: offsetX, y: offsetY })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMouseOffset({ x: 0, y: 0 })
  }, [])

  const base =
    'relative inline-flex items-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B5694] focus-visible:ring-offset-2'

  const variants: Record<string, string> = {
    primary: 'bg-[#4B5694] text-white hover:bg-[#7288AE] shadow-md hover:shadow-lg',
    secondary: 'bg-[#4F252E] text-white hover:bg-[#7288AE] shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#7288AE] text-[#7288AE] hover:bg-[#7288AE] hover:text-white',
  }

  const sizes: Record<string, string> = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  const transformStyle: React.CSSProperties = {
    transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
    willChange: 'transform',
  }

  const rippleElements = ripples.map((r) => (
    <span
      key={r.id}
      className="absolute pointer-events-none rounded-full bg-white/30 animate-ripple"
      style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
    />
  ))

  const commonProps = {
    className: `${base} ${variants[variant]} ${sizes[size]} ${className}`,
    'aria-label': ariaLabel,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: transformStyle,
    onClick: (e: React.MouseEvent) => {
      handleRipple(e)
      onClick?.()
    },
  }

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {children}
        {rippleElements}
      </a>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      {...commonProps}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
      {rippleElements}
    </button>
  )
}
