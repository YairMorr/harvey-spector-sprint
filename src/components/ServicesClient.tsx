'use client'

import { useRef } from 'react'
import gsap from 'gsap'

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
    gsap.to(lineRef.current,  { backgroundColor: 'rgba(255,255,255,1)', duration: 0.3, ease: 'power2.out' })
    gsap.to(titleRef.current, { x: 14, duration: 0.35, ease: 'power2.out' })
    gsap.to(imgRef.current,   { scale: 1.07, duration: 0.4, ease: 'power2.out' })
  }

  function onLeave() {
    gsap.to(lineRef.current,  { backgroundColor: 'rgba(255,255,255,0.2)', duration: 0.3, ease: 'power2.out' })
    gsap.to(titleRef.current, { x: 0, duration: 0.35, ease: 'power2.out' })
    gsap.to(imgRef.current,   { scale: 1, duration: 0.4, ease: 'power2.out' })
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
        <h3 ref={titleRef} className="font-bold italic text-white uppercase text-[36px] tracking-[-1.44px] leading-[1.1] shrink-0">
          {title}
        </h3>
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-start">
          <p className="text-white text-sm font-normal leading-[1.3] tracking-[-0.56px] md:w-[393px]">
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

export function ServicesClient({ services }: { services: Service[] }) {
  return (
    <section data-nav-dark className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-[48px] overflow-x-hidden">
      <span className="font-mono text-sm text-white uppercase leading-[1.1]">[ services ]</span>

      <div className="flex items-center justify-between w-full font-light text-white uppercase tracking-[-2.56px] md:tracking-[-7.68px] text-[32px] md:text-[96px] leading-none">
        <span>[{services.length}]</span>
        <span>Deliverables</span>
      </div>

      <div className="flex flex-col gap-[48px] w-full">
        {services.map((s) => (
          <ServiceItem key={s._id} {...s} />
        ))}
      </div>
    </section>
  )
}
