'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TEXT_CLS =
  "font-light leading-[0.84] tracking-[-0.08em] uppercase " +
  "text-[32px] md:text-[6.67vw]"

export function AboutSection() {
  const linesRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const lines = linesRef.current.filter(Boolean)
    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { color: '#c0c0c0' },
        {
          color: '#000000',
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
            end: 'top 40%',
            scrub: true,
          },
        }
      )
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const line = (i: number) => (el: HTMLElement | null) => { linesRef.current[i] = el }

  return (
    <section className="bg-white px-4 md:px-8 py-12 md:py-[120px] overflow-hidden">
      <div className="flex flex-col gap-6 w-full">

        {/* ── Header ── */}
        <div className="flex flex-col gap-3 items-end w-full">
          <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ 8+ years in industry ]</span>
          <div className="w-full h-px bg-[#1f1f1f]/20" />
        </div>

        {/* ── Text block ── */}
        <div className="flex flex-col gap-2">

          <div className="flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-3">
            <span className="font-mono text-sm text-[#1f1f1f] md:hidden">001</span>
            <p ref={line(0)} className={`${TEXT_CLS} whitespace-pre`}>A creative director   /</p>
            <span className="hidden md:block font-mono text-sm text-[#1f1f1f] mt-[0.6em]">001</span>
          </div>

          <div className="flex justify-center md:justify-start md:pl-[14.86vw]">
            <p ref={line(1)} className={TEXT_CLS}>Photographer</p>
          </div>

          <div className="flex justify-center md:justify-start md:pl-[42.36vw]">
            <p ref={line(2)} className={TEXT_CLS}>
              Born{" "}
              <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontVariationSettings: "'opsz' 12, 'wdth' 100", textTransform: "none" }}>
                &amp;
              </span>
              {" "}raised
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <p ref={line(3)} className={TEXT_CLS}>On the south side</p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-start md:pl-[42.08vw]">
            <div className="flex items-end gap-4">
              <p ref={line(4)} className={TEXT_CLS}>Of Chicago.</p>
              <span className="hidden md:block font-mono text-sm text-[#1f1f1f] mb-[0.15em]">[ creative freelancer ]</span>
            </div>
            <span className="md:hidden font-mono text-sm text-[#1f1f1f]">[ creative freelancer ]</span>
          </div>

        </div>
      </div>
    </section>
  )
}
