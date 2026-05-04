"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { LetsTalkButton } from "./LetsTalkButton";

const NAV_LINKS = [
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News",     href: "#news" },
  { label: "Contact",  href: "#contact" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  const lineRef = useRef<HTMLSpanElement>(null);

  function onEnter() {
    gsap.killTweensOf(lineRef.current);
    gsap.fromTo(lineRef.current, { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 0.18, ease: "power2.out" });
  }

  function onLeave() {
    gsap.killTweensOf(lineRef.current);
    gsap.to(lineRef.current, { scaleX: 0, transformOrigin: "right", duration: 0.15, ease: "power2.in" });
  }

  return (
    <a href={href} className="relative whitespace-nowrap pb-0.5" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {label}
      <span
        ref={lineRef}
        className="absolute bottom-0 left-0 w-full h-[2px] block"
        style={{ transform: "scaleX(0)", transformOrigin: "left", backgroundColor: "currentColor" }}
      />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navRef      = useRef<HTMLElement>(null);
  const logoRef     = useRef<HTMLSpanElement>(null);
  const linksRef    = useRef<HTMLDivElement>(null);
  const menuRef     = useRef<HTMLDivElement>(null);
  const buttonRef   = useRef<HTMLButtonElement>(null);
  const line1Ref    = useRef<SVGLineElement>(null);
  const line2Ref    = useRef<SVGLineElement>(null);
  const line3Ref    = useRef<SVGLineElement>(null);
  const itemsRef    = useRef<(HTMLElement | null)[]>([]);
  const burgerPos   = useRef({ x: 0, y: 0 });

  // ── Scroll-based theme inversion ──────────────────────────────────────────
  useEffect(() => {
    const NAV_H = 80;
    let prevState = "";

    function update() {
      if (open) return;

      const darkEls = document.querySelectorAll("[data-nav-dark]");
      const overDark = Array.from(darkEls).some((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        return top < NAV_H && bottom > 0;
      });

      const state = overDark ? "dark" : "light";
      if (state === prevState) return;
      prevState = state;

      const color = state === "dark" ? "#ffffff" : "#000000";
      gsap.to([logoRef.current, linksRef.current, buttonRef.current], { color, duration: 0.35 });
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [open]);

  // ── Hamburger morph ───────────────────────────────────────────────────────
  function capturePos() {
    const btn = buttonRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    burgerPos.current = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function morphToX() {
    gsap.to(line1Ref.current, { attr: { x1: 4, y1: 4, x2: 20, y2: 20 }, duration: 0.35, ease: "power2.inOut" });
    gsap.to(line2Ref.current, { opacity: 0, scaleX: 0, transformOrigin: "center", duration: 0.15 });
    gsap.to(line3Ref.current, { attr: { x1: 20, y1: 4, x2: 4, y2: 20 }, duration: 0.35, ease: "power2.inOut" });
    gsap.to([buttonRef.current, logoRef.current], { color: "#ffffff", duration: 0.3, delay: 0.15 });
  }

  function morphToBurger() {
    gsap.to(line1Ref.current, { attr: { x1: 3, y1: 6, x2: 21, y2: 6 }, duration: 0.35, ease: "power2.inOut" });
    gsap.to(line2Ref.current, { opacity: 1, scaleX: 1, duration: 0.2, delay: 0.1 });
    gsap.to(line3Ref.current, { attr: { x1: 3, y1: 18, x2: 21, y2: 18 }, duration: 0.35, ease: "power2.inOut" });
    gsap.to([buttonRef.current, logoRef.current], { color: "#000000", duration: 0.25 });
  }

  // ── Mobile menu open/close ────────────────────────────────────────────────
  useEffect(() => {
    if (!open || !menuRef.current) return;
    const { x, y } = burgerPos.current;
    const items = itemsRef.current.filter(Boolean);
    gsap.fromTo(menuRef.current,
      { clipPath: `circle(0px at ${x}px ${y}px)` },
      { clipPath: `circle(200vmax at ${x}px ${y}px)`, duration: 0.7, ease: "power3.inOut" }
    );
    gsap.fromTo(items,
      { y: 32, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: "power3.out", stagger: 0.07, delay: 0.3 }
    );
  }, [open]);

  function handleOpen() {
    capturePos();
    morphToX();
    setOpen(true);
  }

  function handleClose() {
    morphToBurger();
    const { x, y } = burgerPos.current;
    const menu = menuRef.current;
    if (!menu) return;
    gsap.to(menu, {
      clipPath: `circle(0px at ${x}px ${y}px)`,
      duration: 0.55,
      ease: "power3.inOut",
      onComplete: () => setOpen(false),
    });
  }

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      <nav className="relative flex items-center justify-between px-4 md:px-8 py-4 lg:py-5 w-full">
        <span ref={logoRef} className="font-semibold text-base text-black tracking-[-0.04em] capitalize shrink-0 relative z-[60]">
          H.Studio
        </span>

        {/* Desktop links */}
        <div ref={linksRef} className="hidden md:flex items-center gap-6 lg:gap-14 font-semibold text-sm lg:text-base text-black tracking-[-0.04em] capitalize">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>

        <LetsTalkButton variant="default" className="hidden md:block shrink-0" />

        {/* Mobile hamburger */}
        <button
          ref={buttonRef}
          className="md:hidden relative z-[60] text-black"
          onClick={() => (open ? handleClose() : handleOpen())}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line ref={line1Ref} x1="3" y1="6" x2="21" y2="6" />
            <line ref={line2Ref} x1="3" y1="12" x2="21" y2="12" />
            <line ref={line3Ref} x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile fullscreen menu */}
        {open && (
          <div
            ref={menuRef}
            className="fixed inset-0 bg-black flex flex-col justify-center px-8 z-50"
            style={{ clipPath: "circle(0px at 100% 0%)" }}
          >
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                ref={(el) => { itemsRef.current[i] = el; }}
                href={link.href}
                className="font-light text-white uppercase tracking-[-0.02em] py-5 border-b border-white/10"
                style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)" }}
                onClick={handleClose}
              >
                {link.label}
              </a>
            ))}
            <div ref={(el) => { itemsRef.current[NAV_LINKS.length] = el; }} className="pt-8">
              <LetsTalkButton variant="outline" onClick={handleClose} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
