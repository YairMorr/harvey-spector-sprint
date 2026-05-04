'use client'

import { useRef } from 'react'
import gsap from 'gsap'

/**
 * variant="default"  — black bg, white text  (light backgrounds)
 * variant="inverted" — white bg, black text  (dark backgrounds)
 * variant="outline"  — white border/text, no fill (dark backgrounds)
 */
export function LetsTalkButton({
  variant = 'default',
  className = '',
  onClick,
}: {
  variant?: 'default' | 'inverted' | 'outline'
  className?: string
  onClick?: () => void
}) {
  const btnRef    = useRef<HTMLButtonElement>(null)
  const topRef    = useRef<HTMLSpanElement>(null)
  const bottomRef = useRef<HTMLSpanElement>(null)

  const colors = {
    default:  { bg: '#000000', text: '#ffffff', hoverBg: '#ffffff', hoverText: '#000000' },
    inverted: { bg: '#ffffff', text: '#000000', hoverBg: '#000000', hoverText: '#ffffff' },
    outline:  { bg: 'transparent', text: '#ffffff', hoverBg: '#ffffff', hoverText: '#000000' },
  }[variant]

  function onEnter() {
    gsap.killTweensOf([topRef.current, bottomRef.current, btnRef.current])
    // top exits upward, bottom enters from below
    gsap.to(topRef.current,    { y: '-100%', duration: 0.3, ease: 'power3.inOut' })
    gsap.to(bottomRef.current, { y: '0%',    duration: 0.3, ease: 'power3.inOut' })
    gsap.to(btnRef.current, { backgroundColor: colors.hoverBg, duration: 0.3, ease: 'power2.out' })
    gsap.to([topRef.current, bottomRef.current], { color: colors.hoverText, duration: 0.15 })
  }

  function onLeave() {
    gsap.killTweensOf([topRef.current, bottomRef.current, btnRef.current])
    // top returns, bottom goes back below
    gsap.to(topRef.current,    { y: '0%',    duration: 0.3, ease: 'power3.inOut' })
    gsap.to(bottomRef.current, { y: '100%',  duration: 0.3, ease: 'power3.inOut' })
    gsap.to(btnRef.current, { backgroundColor: colors.bg, duration: 0.3, ease: 'power2.out' })
    gsap.to([topRef.current, bottomRef.current], { color: colors.text, duration: 0.15 })
  }

  const baseClass =
    variant === 'default'  ? 'bg-black text-white' :
    variant === 'inverted' ? 'bg-white text-black' :
                             'border border-white text-white bg-transparent'

  return (
    <button
      ref={btnRef}
      className={`text-sm font-medium tracking-[-0.04em] px-4 py-2.5 rounded-[24px] ${baseClass} ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Inner overflow clip — more reliable than overflow-hidden on <button> */}
      <span className="relative overflow-hidden block leading-none">
        <span ref={topRef} className="block py-0.5">Let&apos;s talk</span>
        <span
          ref={bottomRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'translateY(100%)' }}
          aria-hidden
        >
          Let&apos;s talk
        </span>
      </span>
    </button>
  )
}
