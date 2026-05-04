'use client'

import React, { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PORTRAIT_SRC = "/portrait.png";

 
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

function PortraitWithReveal({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const wrapRef    = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap    = wrapRef.current;
    const overlay = overlayRef.current;
    if (!wrap || !overlay) return;

    const st = gsap.fromTo(
      overlay,
      { x: "0%" },
      {
        x: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 85%",
          end: "top 25%",
          scrub: 1,
        },
      }
    );

    return () => { st.scrollTrigger?.kill(); };
  }, []);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className ?? ""}`} style={style}>
      <img
        src={PORTRAIT_SRC}
        alt="Harvey Specter portrait"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black"
        style={{ transform: "translateX(0%)" }}
      />
    </div>
  );
}

export function PortraitSection() {
  const textBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.to(textBoxRef.current, {
        x: -120,
        ease: "none",
        scrollTrigger: {
          trigger: textBoxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="bg-white px-4 md:px-8 py-12 md:py-20 overflow-hidden">

      {/* ── Mobile ── */}
      <div className="flex flex-col gap-5 md:hidden">
        <span className="font-mono text-sm text-[#1f1f1f] uppercase">002</span>
        <span className="font-mono text-sm text-[#1f1f1f] uppercase">[ About ]</span>
        <CornerFrame>
          <p className="text-[#1f1f1f] text-sm font-normal leading-[1.3] tracking-[-0.04em]">
            {ABOUT_TEXT}
          </p>
        </CornerFrame>
        <PortraitWithReveal className="w-full" style={{ aspectRatio: "422 / 594" }} />
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-start justify-between">
        <span className="font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap shrink-0">
          [ About ]
        </span>

        {/* ml-auto pushes the whole group to the right; gap-[32px] is the fixed spacing from Figma */}
        <div className="flex items-end gap-[32px] ml-auto">
          {/* Fixed-width text box — drifts left on scroll */}
          <div ref={textBoxRef} className="w-[461px] shrink-0">
            <CornerFrame>
              <p className="text-[#1f1f1f] text-sm font-normal leading-[1.3] tracking-[-0.04em]">
                {ABOUT_TEXT}
              </p>
            </CornerFrame>
          </div>

          {/* Portrait — always immediately to the right of the text box */}
          <div className="flex items-start gap-6 shrink-0">
            <span className="font-mono text-sm text-[#1f1f1f] uppercase">002</span>
            <PortraitWithReveal className="w-[436px] h-[614px]" />
          </div>
        </div>
      </div>

    </section>
  );
}
