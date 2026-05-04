'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { urlFor } from '@/sanity/lib/image'
import { LetsTalkButton } from './LetsTalkButton'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  _id: string
  title: string | null
  coverImage?: { asset?: { _id: string; url: string } | null; alt?: string | null } | null
  tags?: string[] | null
  imageSize?: 'tall' | 'standard' | null
  projectUrl?: string | null
}

function ProjectCard({ project }: { project: Project }) {
  const imgRef   = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)

  const imageSrc    = project.coverImage?.asset ? urlFor(project.coverImage).width(900).url() : ''
  const desktopAspect = project.imageSize === 'tall' ? '10 / 11' : '1 / 1'

  function onEnter() {
    gsap.to(imgRef.current,   { scale: 1.07, duration: 0.5, ease: 'power2.out' })
    gsap.to(titleRef.current, { x: 10,       duration: 0.35, ease: 'power2.out' })
  }
  function onLeave() {
    gsap.to(imgRef.current,   { scale: 1, duration: 0.5, ease: 'power2.out' })
    gsap.to(titleRef.current, { x: 0,    duration: 0.35, ease: 'power2.out' })
  }

  return (
    <div className="flex flex-col gap-[10px] w-full" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="relative h-[390px] md:h-auto w-full overflow-hidden" style={{ aspectRatio: desktopAspect }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={imageSrc}
          alt={project.coverImage?.alt ?? project.title ?? ''}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex gap-3 items-center">
          {(project.tags ?? []).map((tag: string) => (
            <span key={tag} className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full text-[14px] font-medium text-[#111] tracking-[-0.56px] whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p ref={titleRef} className="font-black uppercase text-black leading-[1.1] tracking-[-0.96px] md:tracking-[-1.44px] text-[24px] md:text-[36px] whitespace-nowrap">
          {project.title}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portfolio-arrow.svg" alt="" width={32} height={32} className="-rotate-90 w-8 h-8 shrink-0" />
      </div>
    </div>
  )
}

function CtaBox() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      gsap.to(boxRef.current, {
        x: 80,
        ease: 'none',
        scrollTrigger: { trigger: boxRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <div ref={boxRef} className="relative flex items-center gap-3 py-3 px-6 w-full md:w-[465px]">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
      <div className="flex flex-col gap-[10px] items-start flex-1 py-3">
        <p className="italic text-[#1f1f1f] text-[14px] leading-[1.3] tracking-[-0.56px]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <LetsTalkButton variant="default" />
      </div>
    </div>
  )
}

export function SelectedWorkClient({ projects }: { projects: Project[] }) {
  return (
    <section className="px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-[61px] overflow-x-hidden bg-white">

      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-4 md:hidden">
          <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ portfolio ]</span>
          <div className="flex items-start justify-between w-full">
            <h2 className="font-light text-black uppercase text-[32px] tracking-[-2.56px] leading-[0.86]">Selected<br />Work</h2>
            <span className="font-mono text-sm text-[#1f1f1f]">004</span>
          </div>
        </div>
        <div className="hidden md:flex items-start gap-[10px]">
          <h2 className="font-light text-black uppercase text-[96px] tracking-[-7.68px] leading-[0.86]">Selected<br />Work</h2>
          <span className="font-mono text-sm text-[#1f1f1f] mt-2">004</span>
        </div>
        <div className="hidden md:flex items-center justify-center h-[110px] w-[15px]">
          <span className="-rotate-90 font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap">[ portfolio ]</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:hidden">
        {projects.map((p) => <ProjectCard key={p._id} project={p} />)}
        <CtaBox />
      </div>

      <div className="hidden md:flex gap-6 items-end w-full">
        <div className="flex-1 min-w-0 flex flex-col justify-between gap-[10px]">
          {projects[0] && <ProjectCard project={projects[0]} />}
          {projects[1] && <ProjectCard project={projects[1]} />}
          <CtaBox />
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-[117px] pt-[240px]">
          {projects[2] && <ProjectCard project={projects[2]} />}
          {projects[3] && <ProjectCard project={projects[3]} />}
        </div>
      </div>

    </section>
  )
}
