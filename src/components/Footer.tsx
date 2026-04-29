const SOCIAL_LINKS = ["Facebook", "Instagram", "X.com", "Linkedin"];

export function Footer() {
  return (
    <footer className="bg-black pt-12 px-4 md:px-8 overflow-hidden">

      {/* ── Top block ── */}
      <div className="flex flex-col gap-6 md:gap-12 mb-6 md:mb-[120px]">

        {/* CTA + socials row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

          {/* "Have a project in mind?" + button */}
          <div className="flex flex-col gap-3">
            <p className="font-light italic text-white text-[24px] tracking-[-0.96px] uppercase leading-[1.1]">
              Have a{" "}
              <span className="font-black not-italic">project</span>
              {" "}in mind?
            </p>
            <button className="self-start border border-white text-white text-sm font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] hover:bg-white hover:text-black transition-colors">
              Let&apos;s talk
            </button>
          </div>

          {/* Social links — stacked on mobile, two columns on desktop */}
          <div className="md:text-center text-white text-[18px] tracking-[-0.72px] uppercase leading-[1.1] flex flex-col gap-1 md:gap-0">
            <p>Facebook</p>
            <p>Instagram</p>
          </div>

          <div className="hidden md:block text-right text-white text-[18px] tracking-[-0.72px] uppercase leading-[1.1]">
            <p>X.com</p>
            <p>Linkedin</p>
          </div>

          {/* Mobile-only: remaining social links */}
          <div className="md:hidden text-white text-[18px] tracking-[-0.72px] uppercase leading-[1.1] flex flex-col gap-1">
            <p>X.com</p>
            <p>Linkedin</p>
          </div>
        </div>

        {/* Horizontal rule */}
        <div className="w-full h-px bg-white/20" />
      </div>

      {/* ── Bottom block ── */}

      {/* Mobile bottom */}
      <div className="md:hidden flex flex-col gap-4 pb-0">
        <div className="flex gap-8 justify-center">
          <a href="#" className="text-white text-[12px] tracking-[-0.48px] uppercase underline">
            Licences
          </a>
          <a href="#" className="text-white text-[12px] tracking-[-0.48px] uppercase underline">
            Privacy policy
          </a>
        </div>
        <span className="font-mono text-white text-[10px] uppercase">
          [ Coded By Claude ]
        </span>
        <div className="overflow-hidden">
          <p className="font-semibold text-white capitalize leading-[0.8] whitespace-nowrap"
            style={{ fontSize: "23vw", letterSpacing: "-0.06em" }}>
            H.Studio
          </p>
        </div>
      </div>

      {/* Desktop bottom */}
      <div className="hidden md:flex items-end justify-between">

        {/* H.Studio wordmark — clipped, bleeds off bottom */}
        <div className="relative overflow-hidden w-[1093px] h-[219px] shrink-0">
          {/* [ CODED BY CLAUDE ] rotated label */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-[15px] h-[160px]">
            <span
              className="font-mono text-white text-sm uppercase whitespace-nowrap"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              [ Coded By Claude ]
            </span>
          </div>
          {/* Giant H.Studio */}
          <p
            className="font-semibold text-white capitalize leading-[0.8] whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ fontSize: "290px", letterSpacing: "-0.06em" }}
          >
            H.Studio
          </p>
        </div>

        {/* Legal links */}
        <div className="flex gap-8 items-center pb-8 shrink-0">
          <a href="#" className="text-white text-[12px] tracking-[-0.48px] uppercase underline hover:opacity-70 transition-opacity">
            Licences
          </a>
          <a href="#" className="text-white text-[12px] tracking-[-0.48px] uppercase underline hover:opacity-70 transition-opacity">
            Privacy policy
          </a>
        </div>
      </div>

    </footer>
  );
}
