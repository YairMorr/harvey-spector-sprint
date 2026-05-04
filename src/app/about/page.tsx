'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FooterSpacer } from '@/components/FooterSpacer'
import { LetsTalkButton } from '@/components/LetsTalkButton'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: '8+',  label: 'Years in industry' },
  { value: '120+', label: 'Projects delivered' },
  { value: '40+',  label: 'Clients worldwide' },
  { value: '3×',   label: 'Award winner' },
]

const DISCIPLINES = [
  { num: '[ 1 ]', title: 'Brand Discovery' },
  { num: '[ 2 ]', title: 'Web Design & Dev' },
  { num: '[ 3 ]', title: 'Marketing' },
  { num: '[ 4 ]', title: 'Photography' },
  { num: '[ 5 ]', title: 'Creative Direction' },
  { num: '[ 6 ]', title: 'Visual Identity' },
]

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        gsap.to(bgRef.current, {
          scale: 1.12,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden flex flex-col px-4 md:px-8 pb-6 md:pb-0 md:pt-[320px]">
      <div className="md:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/harvey-hero-mobile.jpg")' }} />
      <div ref={bgRef} className="hidden md:block absolute inset-0 bg-cover bg-top" style={{ backgroundImage: 'url("/harvey-hero.jpg")' }} />

      {/* Backdrop blur */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[350px] backdrop-blur-[10px] pointer-events-none"
        style={{ maskImage: 'linear-gradient(to bottom, transparent, black 65%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 65%)' }}
      />

      <div className="relative flex flex-col w-full mt-auto md:mt-0">
        <div className="flex justify-center md:justify-start md:px-[18px] md:-mb-[15px]">
          <span className="font-mono text-sm text-white uppercase leading-[1.1] mix-blend-overlay">
            [ About ]
          </span>
        </div>

        <h1 className="text-white font-medium capitalize mix-blend-overlay text-center w-full md:-mb-[15px] leading-[0.8] md:leading-[1.1] text-[96px] md:text-[13.75vw] tracking-[-6.72px] md:tracking-[-0.96vw]">
          <span className="inline-block">Harvey</span>
          <br className="md:hidden" />
          <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
          <span className="inline-block">Specter</span>
        </h1>

        <div className="flex flex-col items-center md:items-end w-full mt-[17px]">
          <div className="flex flex-col gap-[17px] w-[293px] md:w-[294px]">
            <p className="text-[#1f1f1f] text-sm font-bold italic uppercase tracking-[-0.035em] leading-[1.1]">
              Creative director &amp; photographer — born and raised on the{' '}
              <span className="font-normal">South Side of Chicago</span>.
              Over <span className="font-normal">8 years</span> crafting brands that refuse to blend in.
            </p>
            <LetsTalkButton variant="default" className="self-start" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />

        {/* ── Bio ── */}
        <section className="bg-white px-4 md:px-8 py-16 md:py-[120px] overflow-hidden">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3 items-end w-full">
              <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ bio ]</span>
              <div className="w-full h-px bg-[#1f1f1f]/20" />
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="md:w-[560px]">
                <p className="font-light text-black leading-[0.84] tracking-[-0.08em] uppercase text-[32px] md:text-[4vw]">
                  A creative director, photographer &amp; founder of H.Studio.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:w-[440px]">
                <p className="text-[#1f1f1f]/80 text-sm leading-[1.6] tracking-[-0.02em]">
                  Raised on the South Side of Chicago, Harvey brings a raw, deliberate aesthetic to every project — rooted in discipline, sharpened by culture. He founded H.Studio as a full-service creative studio where branding, web design, engineering and photography converge into a single cohesive vision.
                </p>
                <p className="text-[#1f1f1f]/80 text-sm leading-[1.6] tracking-[-0.02em]">
                  His work has been recognised by leading design organisations and spans industries from fashion and hospitality to technology and finance. Whether crafting a brand identity from scratch or directing a campaign, Harvey approaches every brief with the same conviction: good design should do more than look beautiful — it should move people to act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-[48px]">
          <span className="font-mono text-sm text-white uppercase leading-[1.1]">[ by the numbers ]</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {STATS.map((s) => (
              <div key={s.value} className="flex flex-col gap-2">
                <span className="font-light text-white leading-none tracking-[-0.08em] text-[64px] md:text-[80px]">
                  {s.value}
                </span>
                <span className="font-mono text-sm text-white/50 uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Disciplines — same pattern as ServicesSection ── */}
        <section className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-[48px] overflow-x-hidden">
          <span className="font-mono text-sm text-white uppercase leading-[1.1]">[ disciplines ]</span>

          <div className="flex items-center justify-between w-full font-light text-white uppercase tracking-[-2.56px] md:tracking-[-7.68px] text-[32px] md:text-[96px] leading-none">
            <span>[6]</span>
            <span>Services</span>
          </div>

          <div className="flex flex-col gap-[48px] w-full">
            {DISCIPLINES.map((d) => (
              <div key={d.num} className="flex flex-col gap-3 md:gap-[9px] w-full group cursor-default">
                <span className="font-mono text-sm text-white uppercase leading-[1.1]">{d.num}</span>
                <div className="w-full h-[2px] transition-all duration-300" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                <h3 className="font-bold italic text-white uppercase text-[36px] tracking-[-1.44px] leading-[1.1] shrink-0 transition-transform duration-300 group-hover:translate-x-[14px]">
                  {d.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section className="bg-[#f3f3f3] px-4 md:px-8 py-16 md:py-[120px] overflow-hidden">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3 items-end w-full">
              <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ philosophy ]</span>
              <div className="w-full h-px bg-[#1f1f1f]/20" />
            </div>
            <blockquote className="font-light text-black leading-[0.84] tracking-[-0.08em] uppercase text-[32px] md:text-[6.67vw] md:pl-[14.86vw]">
              &ldquo;Good design should do more than look beautiful — it should move people to act.&rdquo;
            </blockquote>
          </div>
        </section>

        <FooterSpacer />
      </div>

      <Footer />
    </>
  )
}
