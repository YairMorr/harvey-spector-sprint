'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ImageSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef     = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const img     = imgRef.current
    if (!section || !img) return

    // Scale up so blurred edges never show inside the clip
    gsap.set(img, { scale: 1.1 })

    // Parallax
    gsap.fromTo(img,
      { y: '8%' },
      { y: '-8%', ease: 'none', scrollTrigger: {
        trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.5,
      }}
    )

    // Blur — clears at section midpoint
    gsap.fromTo(img,
      { filter: 'blur(14px)' },
      { filter: 'blur(0px)', ease: 'power2.out', scrollTrigger: {
        trigger: section, start: 'top bottom', end: 'center center', scrub: 1,
      }}
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white overflow-hidden" style={{ height: '70vh' }}>
      {/* clip-path: inset(0) clips filter effects (blur) to exact bounds — overflow-hidden alone doesn't */}
      <div className="w-full h-full" style={{ clipPath: 'inset(0)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src="/pexels-vazhnik-7562188 2.png"
          alt=""
          className="w-full h-[120%] object-cover"
          style={{ willChange: 'transform, filter' }}
        />
      </div>
    </section>
  )
}
