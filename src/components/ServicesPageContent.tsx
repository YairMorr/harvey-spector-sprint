'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { LetsTalkButton } from './LetsTalkButton'

const STATIC_IMAGES: Record<number, string> = {
  1: '/services-brand-discovery.jpg',
  2: '/services-web-design.jpg',
  3: '/services-marketing.jpg',
  4: '/services-photography.jpg',
}

type Service = {
  _id: string
  title: string
  description: string
  order: number
}

function ServiceItem({ title, description, order }: Service) {
  const lineRef  = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imgRef   = useRef<HTMLImageElement>(null)

  function onEnter() {
    gsap.to(lineRef.current,  { backgroundColor: 'rgba(255,255,255,1)',   duration: 0.3,  ease: 'power2.out' })
    gsap.to(titleRef.current, { x: 14,                                     duration: 0.35, ease: 'power2.out' })
    gsap.to(imgRef.current,   { scale: 1.07,                               duration: 0.4,  ease: 'power2.out' })
  }
  function onLeave() {
    gsap.to(lineRef.current,  { backgroundColor: 'rgba(255,255,255,0.2)', duration: 0.3,  ease: 'power2.out' })
    gsap.to(titleRef.current, { x: 0,                                      duration: 0.35, ease: 'power2.out' })
    gsap.to(imgRef.current,   { scale: 1,                                  duration: 0.4,  ease: 'power2.out' })
  }

  const image = STATIC_IMAGES[order] ?? STATIC_IMAGES[1]

  return (
    <div
      className="flex flex-col gap-3 md:gap-[9px] w-full cursor-default"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span className="font-mono text-sm text-white uppercase leading-[1.1]">[ {order} ]</span>
      <div ref={lineRef} className="w-full h-[2px]" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between flex-wrap">
        <h3 ref={titleRef} className="font-bold italic text-white uppercase text-[36px] md:text-[48px] tracking-[-1.44px] md:tracking-[-2px] leading-[1.1] shrink-0">
          {title}
        </h3>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-start">
          <p className="text-white/70 text-sm font-normal leading-[1.6] tracking-[-0.56px] md:w-[440px]">
            {description}
          </p>
          <div className="overflow-hidden shrink-0 w-[151px] h-[151px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={image}
              alt={title}
              width={151}
              height={151}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ServicesPageContent({ services }: { services: Service[] }) {
  return (
    <>
      {/* Hero */}
      <section data-nav-dark className="bg-black flex flex-col justify-end px-4 md:px-8 pt-[140px] pb-12 md:pb-16 overflow-hidden">
        <span className="font-mono text-sm text-white/50 uppercase leading-[1.1] mb-10 md:mb-12">[ services ]</span>
        <div className="flex items-end justify-between w-full gap-6">
          <h1 className="font-light text-white uppercase leading-[0.85] tracking-[-0.08em] text-[clamp(48px,9vw,140px)]">
            Four<br />Disciplines.
          </h1>
          <div className="hidden md:flex flex-col items-end gap-3 shrink-0 pb-2">
            <span className="font-mono text-white/30 text-sm">[{services.length}]</span>
            <p className="text-white/50 text-sm leading-[1.6] tracking-[-0.02em] text-right max-w-[260px]">
              From brand foundations to pixel&#8209;perfect execution — everything under one roof.
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-white/10 mt-12 md:mt-16" />
      </section>

      {/* Services list */}
      <section data-nav-dark className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-[48px] overflow-x-hidden">
        {services.map((s) => (
          <ServiceItem key={s._id} {...s} />
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#f3f3f3] px-4 md:px-8 py-16 md:py-[120px] overflow-hidden">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 items-end w-full">
            <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ next steps ]</span>
            <div className="w-full h-px bg-[#1f1f1f]/20" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="font-light text-black leading-[0.84] tracking-[-0.08em] uppercase text-[32px] md:text-[4vw] md:max-w-[60%]">
              Ready to build something that moves people?
            </p>
            <LetsTalkButton variant="default" className="self-start md:self-end shrink-0" />
          </div>
        </div>
      </section>
    </>
  )
}
