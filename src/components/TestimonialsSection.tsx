'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TESTIMONIALS = [
  {
    logo: "/testimonial-logo-1.svg", logoW: 143, logoH: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    style: { top: 142, left: "7%", rotate: "-6.85deg" },
    parallax: -80,
    zIndex: 3,
  },
  {
    logo: "/testimonial-logo-2.svg", logoW: 138, logoH: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    style: { top: 272, left: "47%", rotate: "2.9deg" },
    parallax: -120,
    zIndex: 1,
  },
  {
    logo: "/testimonial-logo-3.svg", logoW: 109, logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    style: { top: 553, left: "21%", rotate: "2.23deg" },
    parallax: -160,
    zIndex: 3,
  },
  {
    logo: "/testimonial-logo-4.svg", logoW: 81, logoH: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    style: { top: 546, left: "68%", rotate: "-4.15deg" },
    parallax: -140,
    zIndex: 3,
  },
]

function Card({ logo, logoW, logoH, quote, author, rotate }: {
  logo: string; logoW: number; logoH: number; quote: string; author: string; rotate: string
}) {
  return (
    <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[280px] shrink-0" style={{ rotate }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt="" width={logoW} height={logoH} className="h-auto" style={{ width: logoW }} />
      <p className="text-[#1f1f1f] text-[16px] leading-[1.3] tracking-[-0.72px]">{quote}</p>
      <p className="font-black text-black text-[14px] leading-[1.1] tracking-[-0.64px] uppercase">{author}</p>
    </div>
  )
}

export function TestimonialsSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([])
  const sliderRef   = useRef<HTMLDivElement>(null)
  const drag        = useRef({ active: false, startX: 0, scrollLeft: 0 })

  // Desktop parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          gsap.fromTo(card,
            { y: 0 },
            {
              y: TESTIMONIALS[i].parallax,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          )
        })
        return () => {}
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Mobile drag slider
  function sliderStart(clientX: number) {
    const el = sliderRef.current
    if (!el) return
    drag.current = { active: true, startX: clientX, scrollLeft: el.scrollLeft }
  }
  function sliderMove(clientX: number) {
    if (!drag.current.active || !sliderRef.current) return
    sliderRef.current.scrollLeft = drag.current.scrollLeft - (clientX - drag.current.startX)
  }
  function sliderEnd() { drag.current.active = false }

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden">

      {/* ── Mobile: horizontal drag slider ── */}
      <div className="md:hidden px-4 pt-12 pb-4">
        <h2 className="font-medium text-black text-[48px] tracking-[-3.36px] leading-[0.8] capitalize mb-8">
          Testimonials
        </h2>
      </div>
      <div
        ref={sliderRef}
        className="md:hidden flex gap-4 px-4 pb-12 cursor-grab active:cursor-grabbing select-none"
        style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}
        onMouseDown={(e) => sliderStart(e.clientX)}
        onMouseMove={(e) => sliderMove(e.clientX)}
        onMouseUp={sliderEnd}
        onMouseLeave={sliderEnd}
        onTouchStart={(e) => sliderStart(e.touches[0].clientX)}
        onTouchMove={(e) => sliderMove(e.touches[0].clientX)}
        onTouchEnd={sliderEnd}
      >
        {TESTIMONIALS.map((t) => (
          <Card key={t.author} {...t} rotate={t.style.rotate} />
        ))}
      </div>

      {/* ── Desktop: scattered cards + centered title ── */}
      <div className="hidden md:flex flex-col items-center justify-center relative min-h-[960px] px-8">
        {/* Title vertically centered via flex, z-2 keeps it above card with z-1 */}
        <div className="relative z-[2] flex justify-center w-full">
          <h2 className="font-medium text-black text-[198px] tracking-[-13.86px] leading-[1.1] capitalize">
            Testimonials
          </h2>
        </div>

        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.author}
            ref={(el) => { cardRefs.current[i] = el }}
            className="absolute"
            style={{ top: t.style.top, left: t.style.left, zIndex: t.zIndex }}
          >
            <Card {...t} rotate={t.style.rotate} />
          </div>
        ))}
      </div>

    </section>
  )
}
