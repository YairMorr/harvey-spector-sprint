const PROJECTS = [
  {
    title: "Surfers paradise",
    image: "/portfolio-surfers-paradise.jpg",
    tags: ["Social Media", "Photography"],
    desktopHeight: "md:h-[744px]",
  },
  {
    title: "Cyberpunk caffe",
    image: "/portfolio-cyberpunk-caffe.jpg",
    tags: ["Social Media", "Photography"],
    desktopHeight: "md:h-[699px]",
  },
  {
    title: "Agency 976",
    image: "/portfolio-agency-976.jpg",
    tags: ["Social Media", "Photography"],
    desktopHeight: "md:h-[699px]",
  },
  {
    title: "Minimal Playground",
    image: "/portfolio-minimal-playground.jpg",
    tags: ["Social Media", "Photography"],
    desktopHeight: "md:h-[744px]",
  },
];

function ProjectCard({
  title,
  image,
  tags,
  desktopHeight,
}: (typeof PROJECTS)[number]) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      {/* Image */}
      <div className={`relative h-[390px] ${desktopHeight} w-full overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Tag pills */}
        <div className="absolute bottom-4 left-4 flex gap-3 items-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full text-[14px] font-medium text-[#111] tracking-[-0.56px] whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title + arrow */}
      <div className="flex items-center justify-between w-full">
        <p className="font-black uppercase text-black leading-[1.1] tracking-[-0.96px] md:tracking-[-1.44px] text-[24px] md:text-[36px] whitespace-nowrap">
          {title}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio-arrow.svg"
          alt=""
          width={32}
          height={32}
          className="-rotate-90 w-8 h-8 shrink-0"
        />
      </div>
    </div>
  );
}

function CtaBox() {
  return (
    <div className="relative flex items-center gap-3 py-3 px-6 w-full md:w-[465px]">
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />

      <div className="flex flex-col gap-[10px] items-start flex-1 py-3">
        <p className="italic text-[#1f1f1f] text-[14px] leading-[1.3] tracking-[-0.56px]">
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button className="bg-black text-white text-sm font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] hover:bg-zinc-800 transition-colors">
          Let&apos;s talk
        </button>
      </div>
    </div>
  );
}

export function SelectedWorkSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-[61px]">

      {/* Header */}
      <div className="flex items-start justify-between w-full">

        {/* Mobile: [ portfolio ] above title */}
        <div className="flex flex-col gap-4 md:hidden">
          <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ portfolio ]</span>
          <div className="flex items-start justify-between w-full">
            <h2 className="font-light text-black uppercase text-[32px] tracking-[-2.56px] leading-[0.86]">
              Selected<br />Work
            </h2>
            <span className="font-mono text-sm text-[#1f1f1f]">004</span>
          </div>
        </div>

        {/* Desktop: "SELECTED WORK" + 004 on left, [ portfolio ] rotated right */}
        <div className="hidden md:flex items-start gap-[10px]">
          <h2 className="font-light text-black uppercase text-[96px] tracking-[-7.68px] leading-[0.86]">
            Selected<br />Work
          </h2>
          <span className="font-mono text-sm text-[#1f1f1f] mt-2">004</span>
        </div>
        <div className="hidden md:flex items-center justify-center h-[110px] w-[15px]">
          <span className="-rotate-90 font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap">
            [ portfolio ]
          </span>
        </div>

      </div>

      {/* Mobile: single column */}
      <div className="flex flex-col gap-6 md:hidden">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
        <CtaBox />
      </div>

      {/* Desktop: two columns */}
      <div className="hidden md:flex gap-6 items-end w-full">

        {/* Left column — Surfers + Cyberpunk + CTA */}
        <div className="flex-1 flex flex-col justify-between gap-[10px]">
          <ProjectCard {...PROJECTS[0]} />
          <ProjectCard {...PROJECTS[1]} />
          <CtaBox />
        </div>

        {/* Right column — offset 240px, Agency + Minimal */}
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          <ProjectCard {...PROJECTS[2]} />
          <ProjectCard {...PROJECTS[3]} />
        </div>

      </div>

    </section>
  );
}
