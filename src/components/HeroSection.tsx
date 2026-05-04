'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LetsTalkButton } from './LetsTalkButton'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const bgRef       = useRef<HTMLDivElement>(null)
  const labelRef    = useRef<HTMLDivElement>(null)
  const harveyRef   = useRef<HTMLSpanElement>(null)
  const specterRef  = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        const trigger = {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        }

        // Background zooms in
        gsap.to(bgRef.current, { scale: 1.18, ease: 'none', scrollTrigger: trigger })

        // Harvey + label drift left
        gsap.to([labelRef.current, harveyRef.current], { x: '-32vw', ease: 'none', scrollTrigger: trigger })

        // Specter drifts right
        gsap.to(specterRef.current, { x: '32vw', ease: 'none', scrollTrigger: trigger })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex flex-col px-4 md:px-8 pb-6 md:pb-0 md:pt-[320px]"
    >
      {/* Background images */}
      <div className="md:hidden absolute inset-0 bg-cover bg-top" style={{ backgroundImage: 'url("/harvey-hero-mobile.jpg")', backgroundPositionX: '50%' }} />
      <div ref={bgRef} className="hidden md:block absolute inset-0 bg-cover bg-top" style={{ backgroundImage: 'url("/harvey-hero.jpg")' }} />

      {/* Backdrop blur */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[350px] backdrop-blur-[10px] pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 65%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 65%)',
        }}
      />

      {/* Hero text — mt-auto on mobile pushes it to bottom, pt-[320px] handles desktop offset */}
      <div className="relative flex flex-col w-full mt-auto md:mt-0">

        {/* Label — moves with Harvey */}
        <div ref={labelRef} className="flex justify-center md:justify-start md:px-[18px] md:-mb-[15px]">
          <span className="font-mono text-sm text-white uppercase leading-[1.1] mix-blend-overlay">
            [ Hello I&apos;m ]
          </span>
        </div>

        {/* Name */}
        <h1 className="text-white font-medium capitalize mix-blend-overlay text-center w-full md:-mb-[15px] leading-[0.8] md:leading-[1.1] text-[96px] md:text-[13.75vw] tracking-[-6.72px] md:tracking-[-0.96vw]">
          <span ref={harveyRef} className="inline-block">Harvey</span>
          <br className="md:hidden" />
          <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
          <span ref={specterRef} className="inline-block">Specter</span>
        </h1>

        {/* Description + CTA */}
        <div className="flex flex-col items-center md:items-end w-full mt-[17px]">
          <div className="flex flex-col gap-[17px] w-[293px] md:w-[294px]">
            <p className="text-[#1f1f1f] text-sm font-bold italic uppercase tracking-[-0.035em] leading-[1.1]">
              H.Studio is a <span className="font-normal">full-service</span> creative
              studio creating beautiful digital experiences and products. We are an{' '}
              <span className="font-normal">award winning</span> design and art group
              specializing in branding, web design and engineering.
            </p>
            <LetsTalkButton variant="default" className="self-start" />
          </div>
        </div>

      </div>
    </section>
  )
}
