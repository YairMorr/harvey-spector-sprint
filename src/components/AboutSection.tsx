const TEXT_CLS =
  "font-light text-black leading-[0.84] tracking-[-0.08em] uppercase " +
  "text-[32px] md:text-[6.67vw]";

export function AboutSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-[120px]">
      <div className="flex flex-col gap-6 w-full">

        {/* ── Header: label + rule ── */}
        <div className="flex flex-col gap-3 items-end w-full">
          <span className="font-mono text-sm text-[#1f1f1f] uppercase">
            [ 8+ years in industry ]
          </span>
          <div className="w-full h-px bg-[#1f1f1f]/20" />
        </div>

        {/* ── Text block ── */}
        <div className="flex flex-col gap-2">

          {/* Line 1 — "A CREATIVE DIRECTOR   /" */}
          {/* Mobile: 001 sits above in a centered column */}
          {/* Desktop: 001 sits beside the slash in a row */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-3">
            <span className="font-mono text-sm text-[#1f1f1f] md:hidden">001</span>
            <p className={`${TEXT_CLS} whitespace-pre`}>A creative director   /</p>
            <span className="hidden md:block font-mono text-sm text-[#1f1f1f] mt-[0.6em]">
              001
            </span>
          </div>

          {/* Line 2 — PHOTOGRAPHER (indented on desktop) */}
          <div className="flex justify-center md:justify-start md:pl-[14.86vw]">
            <p className={TEXT_CLS}>Photographer</p>
          </div>

          {/* Line 3 — BORN & RAISED (deep indent on desktop) */}
          <div className="flex justify-center md:justify-start md:pl-[42.36vw]">
            <p className={TEXT_CLS}>
              Born{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontVariationSettings: "'opsz' 12, 'wdth' 100",
                  textTransform: "none",
                }}
              >
                &amp;
              </span>
              {" "}raised
            </p>
          </div>

          {/* Line 4 — ON THE SOUTH SIDE (no indent) */}
          <div className="flex justify-center md:justify-start">
            <p className={TEXT_CLS}>On the south side</p>
          </div>

          {/* Line 5 — OF CHICAGO. + [ CREATIVE FREELANCER ] */}
          {/* Mobile: label below; Desktop: label inline to the right */}
          <div className="flex flex-col items-center gap-3 md:items-start md:pl-[42.08vw]">
            <div className="flex items-end gap-4">
              <p className={TEXT_CLS}>Of Chicago.</p>
              <span className="hidden md:block font-mono text-sm text-[#1f1f1f] mb-[0.15em]">
                [ creative freelancer ]
              </span>
            </div>
            <span className="md:hidden font-mono text-sm text-[#1f1f1f]">
              [ creative freelancer ]
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
