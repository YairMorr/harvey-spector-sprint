'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { urlFor } from '@/sanity/lib/image'
import { LetsTalkButton } from './LetsTalkButton'

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

  const imageSrc     = project.coverImage?.asset ? urlFor(project.coverImage).width(900).url() : ''
  const desktopAspect = project.imageSize === 'tall' ? '10 / 11' : '1 / 1'

  function onEnter() {
    gsap.to(imgRef.current,   { scale: 1.07, duration: 0.5,  ease: 'power2.out' })
    gsap.to(titleRef.current, { x: 10,       duration: 0.35, ease: 'power2.out' })
  }
  function onLeave() {
    gsap.to(imgRef.current,   { scale: 1, duration: 0.5,  ease: 'power2.out' })
    gsap.to(titleRef.current, { x: 0,    duration: 0.35, ease: 'power2.out' })
  }

  const Wrapper = project.projectUrl ? 'a' : 'div'
  const wrapperProps = project.projectUrl
    ? { href: project.projectUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      className="flex flex-col gap-[10px] w-full group"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...wrapperProps}
    >
      <div
        className="relative w-full overflow-hidden bg-[#f3f3f3]"
        style={{ aspectRatio: desktopAspect }}
      >
        {imageSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={imageSrc}
            alt={project.coverImage?.alt ?? project.title ?? ''}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
          {(project.tags ?? []).map((tag: string) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full text-[13px] font-medium text-[#111] tracking-[-0.52px] whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p
          ref={titleRef}
          className="font-black uppercase text-black leading-[1.1] tracking-[-0.96px] md:tracking-[-1.44px] text-[24px] md:text-[32px]"
        >
          {project.title}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portfolio-arrow.svg" alt="" width={28} height={28} className="-rotate-90 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
      </div>
    </Wrapper>
  )
}

export function ProjectsPageContent({ projects }: { projects: Project[] }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-white flex flex-col justify-end px-4 md:px-8 pt-[140px] pb-12 md:pb-16 overflow-hidden">
        <span className="font-mono text-sm text-[#1f1f1f]/50 uppercase leading-[1.1] mb-10 md:mb-12">[ portfolio ]</span>
        <div className="flex items-end justify-between w-full gap-6">
          <h1 className="font-light text-black uppercase leading-[0.85] tracking-[-0.08em] text-[clamp(48px,9vw,140px)]">
            Selected<br />Work
          </h1>
          <div className="hidden md:flex flex-col items-end gap-3 shrink-0 pb-2">
            <span className="font-mono text-[#1f1f1f]/30 text-sm">[{String(projects.length).padStart(3, '0')}]</span>
            <p className="text-[#1f1f1f]/50 text-sm leading-[1.6] tracking-[-0.02em] text-right max-w-[260px]">
              A selection of brand, web and photography projects spanning eight years of practice.
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-[#1f1f1f]/10 mt-12 md:mt-16" />
      </section>

      {/* Projects grid */}
      <section className="bg-white px-4 md:px-8 py-12 md:py-[80px] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-6 md:gap-y-16">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f3f3f3] px-4 md:px-8 py-16 md:py-[120px] overflow-hidden">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 items-end w-full">
            <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ work together ]</span>
            <div className="w-full h-px bg-[#1f1f1f]/20" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="font-light text-black leading-[0.84] tracking-[-0.08em] uppercase text-[32px] md:text-[4vw] md:max-w-[60%]">
              Have a project worth talking about?
            </p>
            <LetsTalkButton variant="default" className="self-start md:self-end shrink-0" />
          </div>
        </div>
      </section>
    </>
  )
}
