import { type ReactNode } from "react";

const PORTRAIT_SRC =
  "https://www.figma.com/api/mcp/asset/a7b94d0b-f852-45fb-80a9-989b893768a0";

const ABOUT_TEXT =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

function CornerFrame({ children }: { children: ReactNode }) {
  const c = "absolute w-4 h-4 border-[#1f1f1f]";
  return (
    <div className="relative flex items-center py-3 px-6">
      <span className={`${c} top-0 left-0 border-t border-l`} />
      <span className={`${c} top-0 right-0 border-t border-r`} />
      <span className={`${c} bottom-0 left-0 border-b border-l`} />
      <span className={`${c} bottom-0 right-0 border-b border-r`} />
      {children}
    </div>
  );
}

export function PortraitSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20">

      {/* ── Mobile ── */}
      <div className="flex flex-col gap-5 md:hidden">
        <span className="font-mono text-sm text-[#1f1f1f] uppercase">002</span>
        <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ About ]</span>
        <CornerFrame>
          <p className="text-[#1f1f1f] text-sm font-normal leading-[1.3] tracking-[-0.04em]">
            {ABOUT_TEXT}
          </p>
        </CornerFrame>
        <div className="w-full overflow-hidden" style={{ aspectRatio: "422 / 594" }}>
          <img
            src={PORTRAIT_SRC}
            alt="Harvey Specter"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-start justify-between">
        {/* Left label */}
        <span className="font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap shrink-0">
          [ About ]
        </span>

        {/* Right column — text block + 002 + portrait, bottom-aligned */}
        <div className="flex flex-1 items-end gap-8 ml-8">

          {/* Bracket-framed text — grows to fill space, sits at the bottom */}
          <div className="flex-1">
            <CornerFrame>
              <p className="text-[#1f1f1f] text-sm font-normal leading-[1.3] tracking-[-0.04em]">
                {ABOUT_TEXT}
              </p>
            </CornerFrame>
          </div>

          {/* 002 label + portrait — 002 at top, portrait below */}
          <div className="flex items-start gap-6 shrink-0">
            <span className="font-mono text-sm text-[#1f1f1f] uppercase">002</span>
            <div className="w-[436px] h-[614px] overflow-hidden shrink-0">
              <img
                src={PORTRAIT_SRC}
                alt="Harvey Specter portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
